'use client'
import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'
import { createNewSession } from '@/api/chatApi'
/**
 * ChatPage Component
 * 
 * Chat interface matching MindAI design system
 * Uses existing color palette: #d4ad98 (primary), #f7f3ee (background)
 * Matches design patterns from /ui layout
 */
export default function ChatPage() {
  // Sample messages for demonstration
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to provide compassionate support. How are you feeling today?",
      sender: 'ai',
    //   timestamp: new Date(Date.now() - 300000)
    },
    // {
    //   id: 2,
    //   text: "Hi, I've been feeling a bit overwhelmed lately with work and personal stuff.",
    //   sender: 'user',
    // //   timestamp: new Date(Date.now() - 240000)
    // },
    // {
    //   id: 3,
    //   text: "I understand. It's completely normal to feel overwhelmed sometimes. Would you like to talk about what's been weighing on your mind?",
    //   sender: 'ai',
    // //   timestamp: new Date(Date.now() - 180000)
    // }
  ])

  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const[sessionid,setSessionId]=useState('');

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

useEffect(()=>{
  // const {data}=await createNewSession();
  const starChat=async()=>{
    const {data,error}=await createNewSession();
    if(error){
     return console.log("error in sessionCreation")
    }
    console.log(data.sessionid);
    setSessionId(data.sessionid)
  }

  starChat();
})

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle sending message
  const handleSendMessage = (e) => {
    e?.preventDefault()
    
    if (inputValue.trim() === '') return

    const newMessage = {
      // id: messages.length + 1,
      messages: inputValue,
      sessionid
      // sender: 'user',
      // timestamp: new Date()
    }

    setMessages([...messages, newMessage])
    setInputValue('')

    // Simulate AI response after a short delay
    // setTimeout(() => {
    //   const aiResponse = {
    //     id: messages.length + 2,
    //     text: "Thank you for sharing that with me. I'm here to help you work through these feelings.",
    //     sender: 'ai',
    //     timestamp: new Date()
    //   }
    //   setMessages(prev => [...prev, aiResponse])
    // }, 1000)
  }

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Format timestamp
//   const formatTime = (date) => {
//     return date.toLocaleTimeString('en-US', { 
//       hour: 'numeric', 
//       minute: '2-digit',
//       hour12: true 
//     })
//   }

  return (
    <div className="flex flex-col h-[calc(100vh-9rem)] -m-6 sm:-m-8">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            } animate-slide-up`}
          >
            <div
              className={`max-w-[75%] sm:max-w-[65%] ${
                message.sender === 'user'
                  ? 'bg-[#d4ad98] text-white'
                  : 'bg-gray-100 text-gray-800'
              } rounded-2xl px-4 py-3 shadow-sm`}
            >
              <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap wrap-break-word">
                {message.text}
              </p>
              <span
                className={`text-xs mt-1 block ${
                  message.sender === 'user'
                    ? 'text-white/70'
                    : 'text-gray-500'
                }`}
              >
                
                {/* {formatTime(message.timestamp)} */}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm px-6 sm:px-8 py-4">
        <form onSubmit={handleSendMessage} className="flex gap-2 sm:gap-3">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message…"
            aria-label="Message input"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#d4ad98]/50 focus:border-[#d4ad98] transition-all duration-300 text-gray-800 placeholder-gray-400"
          />
          <button
            type="submit"
            disabled={inputValue.trim() === ''}
            aria-label="Send message"
            className={`px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
              inputValue.trim() === ''
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-[#d4ad98] text-white hover:bg-[#c49d87] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            <span className="hidden sm:inline">Send</span>
            <Send className="w-5 h-5" strokeWidth={2} />
          </button>
        </form>
      </div>
    </div>
  )
}
