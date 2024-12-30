export const getSuggestions = (lastMessage: string): string[] => {
  const defaultSuggestions = [
    "Hello!",
    "How are you?",
    "What can you help me with?",
  ];

  const followUpSuggestions: Record<string, string[]> = {
    "how are you": [
      "I'm doing great!",
      "What can you do?",
      "Tell me more about yourself",
    ],
    "hello": [
      "Nice to meet you!",
      "What features do you have?",
      "Can you help me?",
    ],
  };

  const normalizedMessage = lastMessage.toLowerCase();
  return followUpSuggestions[normalizedMessage] || defaultSuggestions;
};