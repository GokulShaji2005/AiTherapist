'use client'
import { useState, useRef, useEffect } from 'react'
import { Send, XCircle } from 'lucide-react'
import { createNewSession,sendMessage } from '@/api/chatApi'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
import { endSession } from '@/api/chatApi'

export default function ChatPage() {
  // Sample messages for demonstration
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hello! I'm here to provide compassionate support. How are you feeling today?",
      sender: 'ai',

    },
   
  ])

  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const[sessionid,setSessionId]=useState('');
  const [isLoading, setIsLoading] = useState(true);
   const router = useRouter()
  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

useEffect(()=>{
  // const {data}=await createNewSession();

  const starChat=async()=>{
 try{
  
  const { data: { session } } = await supabase.auth.getSession()
      
  if (!session) {
        console.log("No session found, redirecting to login")
        router.push('/auth/login')
        return
      }
    const {data,error}=await createNewSession();
    if(error){
     return console.log("error in sessionCreation",error)
    }
    console.log(data.sessionId);
    setSessionId(data.sessionId)
  }
  catch (error) {
      console.error("Error in starChat:", error)
      router.push('/auth/login')
    }

 }
 
  starChat();
},[router])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle sending message
  const handleSendMessage = async(e) => {
    e?.preventDefault()
    
    if (inputValue.trim() === '') return

  const userMessage = {
    id: crypto.randomUUID(),
    sender: "user",
    content: inputValue,
  };

  // 2️⃣ Show user message immediately
  setMessages((prev) => [...prev, userMessage]);
  //  const currentInput = inputValue; 
  setInputValue("");

try{
   const res = await sendMessage(inputValue,sessionid) 
    const assistantMessage = {
      id: crypto.randomUUID(),
      sender: "ai",
      content: res.reply,
    };
      setMessages((prev) => [...prev, assistantMessage]);
    setInputValue('')
}
catch(err){
  res.json("assistant msg problem");
}
}


  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

const handleEndSession = async () => {
  if (!sessionid) {
    console.warn("EndSession clicked before sessionId ready");
    return;
  }

  try {
    await endSession(sessionid);
    console.log("Session ended successfully");
  } catch (err) {
    console.error("End session failed", err);
  }
};


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
                {message.content}
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
      <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm px-3 sm:px-8 py-4">
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
            <Send className="w-4 h-4" strokeWidth={2} />
          </button>
            <button
            type="button"
            aria-label="End current session"
            disabled={!sessionid}
            className="px-3 sm:px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-md border border-red-300 text-red-600 bg-white hover:bg-red-50 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
             onClick={handleEndSession} >
            {/* Icon only on mobile, icon + text on larger screens */}
            {/* <span className="sm:hidden flex items-center justify-center">
           
            </span> */}
               <XCircle className="w-3 h-3" />
            <span className="hidden sm:inline-flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              <span>End Session</span>
            </span>
          </button>
        </form>
      </div>
    </div>
  )

}

