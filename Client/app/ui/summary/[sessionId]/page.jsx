'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { HelpCircleIcon } from 'lucide-react';
function StepCard({ number, step }) {
  return (
    <div className="group flex gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#d4ad98]/50 hover:-translate-y-0.5">
      <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#f0dfd4] text-[#8b6f5c] font-semibold text-lg group-hover:bg-[#d4ad98] group-hover:text-white transition-colors duration-300">
        {number}
      </div>
      <p className="flex-1 text-sm text-gray-700 leading-relaxed pt-1.5">
        {step}
      </p>
    </div>
  );
}

export default function SessionSummaryPage() {
  const {sessionId }= useParams();
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  if (!sessionId) return;

  const fetchSummary = async () => {
    try {
      const res = await api.post("/db/summary", { sessionId });
      const message = res.data?.messages?.[0];
      console.log(message)
      if (!message) {
        throw new Error("No summary data received");
      }

      let copingSteps = [];

      if (Array.isArray(message.coping_steps)) {
        copingSteps = message.coping_steps;
        console.log("coping steps is array")
      } 
      else if (typeof message.coping_steps === "string") {
        try {
          copingSteps = JSON.parse(message.coping_steps);
          console.log("Hello")
        } catch (e) {
          console.error("Invalid coping_steps JSON:", message.coping_steps);
          copingSteps = [];
        }
      }
  console.log(typeof message.coping_steps)
     console.log(copingSteps)
      setSummaryData({
        title: message.title ?? "",
        summary: message.summary ?? "",
        copingSteps
      });
    } catch (err) {
      console.error("Failed to load session summary", err);
      setSummaryData(null);
    } finally {
      setLoading(false);
    }
  };

  fetchSummary();
}, [sessionId]);

// useEffect(() => {
//     if (!sessionId) return;

//     const fetchSummary = async () => {
//       try {
//         const res = await api.post("/db/summary", {
//           sessionId
//         });
//         const message=res.data.messages;
//         // const parsedData={
//         //   ...message,
//         //     copingSteps: JSON.parse(message.coping_steps)
//         // }
//         setSummaryData(message);
//         console.log(message)
//       } catch (err) {
//         console.error("Failed to load session messages", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSummary();
//   }, [sessionId]);
  // useEffect(() => {
  //   const fetchSummary = async () => {
  //     try {
  //       setLoading(true);
  //       const response = api.post('api/db/summary')
  //       if (response.ok) {
  //         const data = await response.json();
  //         setSummaryData(data);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch summary:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   if (params.sessionId) {
  //     fetchSummary();
  //   }
  // }, [params.sessionId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#d4ad98] border-t-transparent"></div>
      </div>
    );
  }


  return (
    <main className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="space-y-8 sm:space-y-10">
        <section className="space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {summaryData.title}
          </h1>
        </section>

        <section className="space-y-3">
          <h2 className="sr-only">Summary</h2>
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {summaryData.summary}
            </p>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-8 h-8 bg-[#d4ad98] rounded-lg flex items-center justify-center">
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Coping Steps
            </h2>
          </div>
          
          {/* <ul className="space-y-4" role="list" aria-label="Coping strategies">
            {Array.copingSteps.map((step, index) => (
              <li key={index}>
                <StepCard number={index + 1} step={step} />
              </li>
            ))}
          </ul> */}
          <ul className="space-y-4" role="list" aria-label="Coping strategies">
  {summaryData?.copingSteps?.length > 0 ? (
    summaryData.copingSteps.map((step, index) => (
      <li key={index}>
        <StepCard number={index + 1} step={step} />
      </li>
    ))
  ) : (
    <p className="text-sm text-gray-500">No coping steps available.</p>
  )}
</ul>

        </section>

        <section className="pt-6">
          <div className="p-5 bg-[#f0dfd4]/40 backdrop-blur-sm rounded-2xl border border-[#d4ad98]/30">
            <p className="text-xs text-gray-600 text-center leading-relaxed">
              Remember: Progress takes time. Be patient and compassionate with yourself on this journey.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
