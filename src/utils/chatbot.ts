const responses = [
  {
    patterns: ['hello', 'hi', 'hey', 'greetings'],
    replies: [
      "Hello! How can I help you today?",
      "Hi there! What's on your mind?",
      "Hey! How can I assist you?"
    ]
  },
  {
    patterns: ['how are you', 'how do you do'],
    replies: [
      "I'm doing great, thanks for asking! How about you?",
      "I'm functioning perfectly! What can I do for you?"
    ]
  },
  {
    patterns: ['bye', 'goodbye', 'see you'],
    replies: [
      "Goodbye! Have a great day!",
      "See you later! Take care!",
      "Bye! Feel free to come back if you need anything!"
    ]
  },
  {
    patterns: ['help', 'what can you do', 'features'],
    replies: [
      "I can help you with general questions and conversation. Try asking me about my features or how I work!",
      "I'm a chatbot designed to engage in conversation and provide assistance. What would you like to know?",
      "I can chat with you about various topics and try to help answer your questions. What's on your mind?"
    ]
  }
];

export function generateResponse(input: string): { content: string; confidence: number } {
  const normalizedInput = input.toLowerCase().trim();
  
  // Find matching response pattern
  for (const response of responses) {
    if (response.patterns.some(pattern => normalizedInput.includes(pattern))) {
      return {
        content: response.replies[Math.floor(Math.random() * response.replies.length)],
        confidence: 0.8
      };
    }
  }

  // Default response if no pattern matches
  return {
    content: "I'm not sure I understand. Could you rephrase that or try asking something else?",
    confidence: 0.2
  };
}