import React from 'react';

interface SuggestedResponsesProps {
  suggestions: string[];
  onSelect: (suggestion: string) => void;
}

export function SuggestedResponses({ suggestions, onSelect }: SuggestedResponsesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          onClick={() => onSelect(suggestion)}
          className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-full 
                   hover:bg-blue-100 transition-colors"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}