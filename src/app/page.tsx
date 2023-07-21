'use client'
 
import { useChat } from 'ai/react'
import { cn } from '@/lib';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
 
  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col bg-gray-200 rounded-lg shadow-md p-6">
      <div className="overflow-y-auto mb-4 p-3">
        {messages.map(m => (
          <div
          key={m.id}
          className={cn("p-3 rounded-lg mb-2", m.role === 'user' ? 'bg-indigo-500 text-white self-end' : 'bg-gray-100' )}
          >
            <span className="font-semibold">{m.role === 'user' ? 'You: ' : 'AI: '}</span>
            <span>{m.content}</span>
          </div>
        ))}
      </div>
 
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          className="w-full border border-gray-300 rounded shadow p-2 mr-2"
          placeholder="Say something..."
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition">Send</button>
      </form>
    </div>
  )
}
