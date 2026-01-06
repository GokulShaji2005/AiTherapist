'use client'
import { useState,useEffect } from "react";
import api from "@/lib/api";
import { sessionWiseMsg } from "@/api/chatApi";
import { useRouter } from "next/navigation";
export default function SessionsPage() {
  // Sample session data for UI demonstration
    const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const router=useRouter();
useEffect(() => {
  const fetchSessions = async () => {
    try {
      const res = await api.post("/db/userWiseMsg");
      setSessions(res.data.messages);
      console.log(res.data.messages)
    } catch (err) {
      console.error("Failed to load sessions", err);
    } finally {
      setLoading(false);
    }
  };

  fetchSessions();
}, []);

const sessionClick=(sessionId)=>{
  router.push(`/ui/sessions/${sessionId}`);
  
}
if(loading){
      return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Loading sessions...
      </div>
    );

}
  return (
    <div className="flex flex-col h-full p-6 sm:p-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Your Sessions
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Browse your conversation history
        </p>
      </div>

      {/* Vertical Scrollable Cards Container */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#d4ad98]/30 transition-all duration-300 cursor-pointer p-5"
              onClick={()=>sessionClick(session.id)}>
              <h3 className="text-base font-semibold text-gray-800 text-left">
                {session.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
