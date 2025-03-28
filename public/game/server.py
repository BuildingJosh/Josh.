from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)

# Initialize SQLite database
def init_db():
    conn = sqlite3.connect('scores.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS scores
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  initials TEXT NOT NULL,
                  score INTEGER NOT NULL,
                  level INTEGER NOT NULL,
                  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)''')
    conn.commit()
    conn.close()

# Create database on startup
init_db()

@app.route('/')
def serve_game():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/scores', methods=['GET'])
def get_scores():
    conn = sqlite3.connect('scores.db')
    c = conn.cursor()
    c.execute('SELECT initials, score, level, timestamp FROM scores ORDER BY score DESC LIMIT 10')
    scores = [{'initials': row[0], 'score': row[1], 'level': row[2], 'timestamp': row[3]} 
             for row in c.fetchall()]
    conn.close()
    return jsonify(scores)

@app.route('/api/scores', methods=['POST'])
def add_score():
    data = request.json
    if not data or 'initials' not in data or 'score' not in data or 'level' not in data:
        return jsonify({'error': 'Missing required fields'}), 400
    
    # Validate initials (3 characters)
    initials = data['initials'].upper()[:3]
    if len(initials) != 3:
        return jsonify({'error': 'Initials must be 3 characters'}), 400

    conn = sqlite3.connect('scores.db')
    c = conn.cursor()
    c.execute('INSERT INTO scores (initials, score, level) VALUES (?, ?, ?)',
              (initials, data['score'], data['level']))
    conn.commit()
    conn.close()
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(port=8000, debug=True)
