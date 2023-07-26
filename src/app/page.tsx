'use client';

import { useChat } from 'ai/react';
import { cn } from '@/lib';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto mt-2 flex w-full max-w-md flex-col rounded-lg bg-gray-200 p-6 py-24 shadow-md ">
      <div className="mb-4 overflow-y-auto p-3">
        {messages.map((m) => (
          <div
            key={m.id}
            className={cn(
              'mb-2 rounded-lg p-3',
              m.role === 'user' ? 'self-end bg-indigo-500 text-white' : 'bg-gray-100',
            )}
          >
            <span className="font-semibold">{m.role === 'user' ? 'You: ' : 'AI: '}</span>
            <span>{m.content}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          className="mr-2 w-full rounded border border-gray-300 p-2 shadow"
          placeholder="Say something..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="rounded bg-indigo-500 p-2 text-white transition hover:bg-indigo-600"
        >
          Send
        </button>
      </form>
    </div>
  );
}
