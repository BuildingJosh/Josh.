import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { z } from "zod";

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(5000)
});

// Rate limiting map
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour
const MAX_REQUESTS = 5;

// Configure AWS SES
const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Rate limiting check
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const now = Date.now();
    const userRequests = rateLimit.get(ip) || [];
    const recentRequests = userRequests.filter(time => now - time < RATE_LIMIT_WINDOW);

    if (recentRequests.length >= MAX_REQUESTS) {
      return res.status(429).json({
        error: 'Too many requests. Please try again later.'
      });
    }

    // Update rate limit tracking
    rateLimit.set(ip, [...recentRequests, now]);

    // Validate input
    const data = contactSchema.parse(req.body);

    // Prepare email
    const emailParams = {
      Source: process.env.AWS_SES_FROM_EMAIL,
      Destination: {
        ToAddresses: [process.env.AWS_SES_TO_EMAIL]
      },
      Message: {
        Subject: {
          Data: `Website Contact: ${data.subject}`
        },
        Body: {
          Text: {
            Data: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
          }
        }
      }
    };

    // Send email
    await ses.send(new SendEmailCommand(emailParams));

    // Send success response
    return res.status(200).json({
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Invalid input',
        details: error.errors
      });
    }

    return res.status(500).json({
      error: 'Failed to send message. Please try again later.'
    });
  }
}
