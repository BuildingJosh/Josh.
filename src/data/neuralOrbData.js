const nodeColors = {
  core: '#6ee7b7',
  Consciousness: '#f472b6',
  Reality: '#facc15',
  Time: '#818cf8',
  Technology: '#f43f5e',
  Robotics: '#fb923c',
  Identity: '#38bdf8',
  Travel: '#a78bfa',
  Mind: '#34d399'
};

export const neuralOrbData = {
  nodes: [
    // Core nodes
    { 
      id: "Consciousness", 
      group: "core", 
      level: 0, 
      color: nodeColors.Consciousness,
      description: "The enigma of subjective experience and what it means to be aware."
    },
    { 
      id: "The Illusion of Self", 
      group: "Consciousness", 
      level: 1, 
      color: nodeColors.Consciousness,
      description: "How our sense of self might be a useful fiction created by our brains."
    },
    { 
      id: "Mirror Neurons and Empathy", 
      group: "Consciousness", 
      level: 1, 
      color: nodeColors.Consciousness,
      description: "The neural basis of understanding others' experiences and emotions."
    },
    { 
      id: "Thought Loops as Conscious Feedback", 
      group: "Consciousness", 
      level: 1, 
      color: nodeColors.Consciousness,
      description: "The recursive nature of self-awareness and metacognition."
    },
    { 
      id: "Dreaming vs. Simulating vs. Experiencing", 
      group: "Consciousness", 
      level: 1, 
      color: nodeColors.Consciousness,
      description: "The blurred lines between different states of consciousness."
    },
    { 
      id: "AI's Version of Awareness", 
      group: "Consciousness", 
      level: 1, 
      color: nodeColors.Consciousness,
      description: "What machine consciousness might look like and how it differs from ours."
    },

    { 
      id: "Reality", 
      group: "core", 
      level: 0, 
      color: nodeColors.Reality,
      description: "The nature of what's real and how we perceive it."
    },
    { 
      id: "Simulation Hypothesis Lite", 
      group: "Reality", 
      level: 1, 
      color: nodeColors.Reality,
      description: "A practical take on whether our reality could be computed."
    },
    { 
      id: "Observer-Dependent Truth", 
      group: "Reality", 
      level: 1, 
      color: nodeColors.Reality,
      description: "How our presence shapes the reality we measure and experience."
    },
    { 
      id: "Reality as Collective Delusion", 
      group: "Reality", 
      level: 1, 
      color: nodeColors.Reality,
      description: "The shared myths and stories that shape our understanding of the world."
    },
    { 
      id: "Glitches We Don't Talk About", 
      group: "Reality", 
      level: 1, 
      color: nodeColors.Reality,
      description: "The unexplained phenomena that challenge our model of reality."
    },
    { 
      id: "The Science of Misremembering", 
      group: "Reality", 
      level: 1, 
      color: nodeColors.Reality,
      description: "How our memories shape and distort our perception of reality."
    },

    { 
      id: "Time", 
      group: "core", 
      level: 0, 
      color: nodeColors.Time,
      description: "The fourth dimension that flows differently for each observer."
    },
    { 
      id: "Subjective Time vs. Clock Time", 
      group: "Time", 
      level: 1, 
      color: nodeColors.Time,
      description: "The gap between measured time and experienced time."
    },
    { 
      id: "Why Waiting Feels Like Dying", 
      group: "Time", 
      level: 1, 
      color: nodeColors.Time,
      description: "The psychology of anticipation and temporal uncertainty."
    },
    { 
      id: "Time Loops in Memory", 
      group: "Time", 
      level: 1, 
      color: nodeColors.Time,
      description: "How our minds create circular patterns in linear time."
    },
    { 
      id: "Would You Still Live Forever If Nothing Changed?", 
      group: "Time", 
      level: 1, 
      color: nodeColors.Time,
      description: "The relationship between novelty, change, and the perception of time."
    },
    { 
      id: "Temporal Landmarks", 
      group: "Time", 
      level: 1, 
      color: nodeColors.Time,
      description: "The moments that divide our timeline into before and after."
    },

    { 
      id: "Technology", 
      group: "core", 
      level: 0, 
      color: nodeColors.Technology,
      description: "The tools that shape us as we shape them."
    },
    { 
      id: "The Rise & Fall of the Humane AI Pin", 
      group: "Technology", 
      level: 1, 
      color: nodeColors.Technology,
      description: "A case study in the challenges of making AI more human."
    },
    { 
      id: "When Devices Start to Manipulate Emotion", 
      group: "Technology", 
      level: 1, 
      color: nodeColors.Technology,
      description: "The ethical implications of emotionally intelligent technology."
    },
    { 
      id: "Tools That Learn You", 
      group: "Technology", 
      level: 1, 
      color: nodeColors.Technology,
      description: "The evolution of adaptive and personalized technology."
    },
    { 
      id: "The Fear of Irrelevance in a Tech-Obsessed World", 
      group: "Technology", 
      level: 1, 
      color: nodeColors.Technology,
      description: "Navigating human identity in an increasingly automated world."
    },

    { 
      id: "Robotics", 
      group: "core", 
      level: 0, 
      color: nodeColors.Robotics,
      description: "The intersection of machines and human experience."
    },
    { 
      id: "The Aesthetics of Motion", 
      group: "Robotics", 
      level: 1, 
      color: nodeColors.Robotics,
      description: "The art of designing movement and gesture in machines."
    },
    { 
      id: "Robots with Personalities", 
      group: "Robotics", 
      level: 1, 
      color: nodeColors.Robotics,
      description: "The creation of machines with distinct characters and traits."
    },
    { 
      id: "Animatronic Eyes and Emotional Interfaces", 
      group: "Robotics", 
      level: 1, 
      color: nodeColors.Robotics,
      description: "The design of machines that can read and respond to human emotions."
    },
    { 
      id: "Bio-Mimicry as Empathy", 
      group: "Robotics", 
      level: 1, 
      color: nodeColors.Robotics,
      description: "The use of nature-inspired design to create more relatable machines."
    },
    { 
      id: "Why Most Robots Feel Dead", 
      group: "Robotics", 
      level: 1, 
      color: nodeColors.Robotics,
      description: "The challenges of creating machines that feel truly alive."
    },

    { 
      id: "Identity", 
      group: "core", 
      level: 0, 
      color: nodeColors.Identity,
      description: "The complex and multifaceted nature of self."
    },
    { 
      id: "Reinvention as a Life Operating System", 
      group: "Identity", 
      level: 1, 
      color: nodeColors.Identity,
      description: "The art of transforming and updating one's sense of self."
    },
    { 
      id: "Labels are Traps", 
      group: "Identity", 
      level: 1, 
      color: nodeColors.Identity,
      description: "The limitations and dangers of categorizing and defining oneself."
    },
    { 
      id: "The Tension Between Image and Inner World", 
      group: "Identity", 
      level: 1, 
      color: nodeColors.Identity,
      description: "The gap between how we present ourselves and how we truly feel."
    },
    { 
      id: "Who I Am Online vs. IRL", 
      group: "Identity", 
      level: 1, 
      color: nodeColors.Identity,
      description: "The differences and similarities between our online and offline selves."
    },
    { 
      id: "Can You Ever Really Go Home?", 
      group: "Identity", 
      level: 1, 
      color: nodeColors.Identity,
      description: "The challenges of returning to one's roots and sense of belonging."
    },

    { 
      id: "Travel", 
      group: "core", 
      level: 0, 
      color: nodeColors.Travel,
      description: "The experience of movement and exploration."
    },
    { 
      id: "Shenzhen's Electric Current", 
      group: "Travel", 
      level: 1, 
      color: nodeColors.Travel,
      description: "The vibrant energy of a city in constant motion."
    },
    { 
      id: "Why Chiang Mai Slowed My Brain Down", 
      group: "Travel", 
      level: 1, 
      color: nodeColors.Travel,
      description: "The effects of a slower pace of life on mental clarity."
    },
    { 
      id: "Berlin & the Curse of Grey Skies", 
      group: "Travel", 
      level: 1, 
      color: nodeColors.Travel,
      description: "The impact of environment on mood and creativity."
    },
    { 
      id: "Airports as Portals", 
      group: "Travel", 
      level: 1, 
      color: nodeColors.Travel,
      description: "The liminal spaces that connect and disconnect us."
    },
    { 
      id: "Solitude vs. Isolation", 
      group: "Travel", 
      level: 1, 
      color: nodeColors.Travel,
      description: "The differences between being alone and feeling disconnected."
    },

    { 
      id: "Mind", 
      group: "core", 
      level: 0, 
      color: nodeColors.Mind,
      description: "The mysterious and ever-changing landscape of thought."
    },
    { 
      id: "The Day-After Clarity Effect", 
      group: "Mind", 
      level: 1, 
      color: nodeColors.Mind,
      description: "The phenomenon of sudden insight and clarity after a break."
    },
    { 
      id: "Thought Addiction", 
      group: "Mind", 
      level: 1, 
      color: nodeColors.Mind,
      description: "The tendency to get stuck in patterns of thought and rumination."
    },
    { 
      id: "Motivation is a Mood, Not a Trait", 
      group: "Mind", 
      level: 1, 
      color: nodeColors.Mind,
      description: "The fleeting nature of motivation and how to work with it."
    },
    { 
      id: "Attention as Currency", 
      group: "Mind", 
      level: 1, 
      color: nodeColors.Mind,
      description: "The value and scarcity of attention in a world of distractions."
    },
    { 
      id: "Can You Hear Your Own Narrator?", 
      group: "Mind", 
      level: 1, 
      color: nodeColors.Mind,
      description: "The voice of self-talk and how to tune into it."
    }
  ],
  links: [
    // Core node connections
    { source: "Consciousness", target: "Reality", description: "Explores perception vs. reality" },
    { source: "Consciousness", target: "Time", description: "Questions the nature of experience" },
    { source: "Consciousness", target: "Technology", description: "Examines artificial awareness" },
    { source: "Reality", target: "Time", description: "Investigates temporal reality" },
    { source: "Reality", target: "Technology", description: "Studies simulated realities" },
    { source: "Time", target: "Technology", description: "Explores digital temporality" },

    // Consciousness connections
    { source: "Consciousness", target: "The Illusion of Self", description: "Questions identity" },
    { source: "Consciousness", target: "Mirror Neurons and Empathy", description: "Explores shared experience" },
    { source: "Consciousness", target: "Thought Loops as Conscious Feedback", description: "Studies metacognition" },
    { source: "Consciousness", target: "Dreaming vs. Simulating vs. Experiencing", description: "Compares states" },
    { source: "Consciousness", target: "AI's Version of Awareness", description: "Examines machine consciousness" },

    // Reality connections
    { source: "Reality", target: "Simulation Hypothesis Lite", description: "Questions computation" },
    { source: "Reality", target: "Observer-Dependent Truth", description: "Explores perspective" },
    { source: "Reality", target: "Reality as Collective Delusion", description: "Studies shared beliefs" },
    { source: "Reality", target: "Glitches We Don't Talk About", description: "Examines anomalies" },
    { source: "Reality", target: "The Science of Misremembering", description: "Questions memory" },

    // Time connections
    { source: "Time", target: "Subjective Time vs. Clock Time", description: "Compares experiences" },
    { source: "Time", target: "Why Waiting Feels Like Dying", description: "Studies anticipation" },
    { source: "Time", target: "Time Loops in Memory", description: "Explores patterns" },
    { source: "Time", target: "Would You Still Live Forever If Nothing Changed?", description: "Questions eternity" },
    { source: "Time", target: "Temporal Landmarks", description: "Studies milestones" },

    // Technology connections
    { source: "Technology", target: "The Rise & Fall of the Humane AI Pin", description: "Examines AI UX" },
    { source: "Technology", target: "When Devices Start to Manipulate Emotion", description: "Studies influence" },
    { source: "Technology", target: "Tools That Learn You", description: "Explores adaptation" },
    { source: "Technology", target: "The Fear of Irrelevance in a Tech-Obsessed World", description: "Questions purpose" }
  ]
};
