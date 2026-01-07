'use client'
import {React,useEffect, useState} from 'react';
import {
  MessageCircle,
  Calendar,
  AlertCircle,
  Lightbulb,
  Menu,
  ChevronDown,
  Brain,
} from 'lucide-react';
// import useSi from '@/lib/auth/signOut';
import signOut, { useSignOut } from '@/lib/auth/signOut';
import { supabase } from '@/lib/supabase/client';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

// import { setAuthToken } from '@/lib/api';
/**
 * AppLayout Component
 * 
 * Reusable layout for AI therapist platform "MindAI"
 * Pure presentational component - UI only, no logic
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Main content to render
//  */




export default function AppLayout({ children }) {
  const [user,setUser]=useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
 
//  useEffect(() => {
//     supabase.auth.getSession().then(({ data }) => {
//       setAuthToken(data.session?.access_token);
//     });

//     const { data: listener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setAuthToken(session?.access_token);
//       }
//     );

//     return () => listener.subscription.unsubscribe();
//   }, []);
useEffect(()=>{
  supabase.auth.getUser().then(({data}) =>{
    setUser(data?.user ?? null);
  });
   const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
},[]);
  const router=useRouter();
const handleClickSessions=()=>{

  router.push('/ui/sessions');
}

  return (
    <div className="min-h-screen bg-[#f7f3ee] overflow-hidden relative">
      {/* Decorative Background Blobs - matching HeroSection */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-linear-to-br from-[#d4ad98]/20 to-[#e8c8b5]/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-linear-to-tr from-[#f0dfd4]/30 to-[#d4ad98]/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-linear-to-bl from-[#e8c8b5]/15 to-transparent rounded-full blur-2xl" />

      {/* Desktop Sidebar - Hidden on mobile */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-60 lg:flex-col z-40">
        <div className="flex flex-col grow bg-white/90 backdrop-blur-sm border-r border-gray-200 shadow-lg">
          {/* Sidebar Header - Brand */}
          <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-200">
            <div className="flex items-center justify-center w-10 h-10 bg-[#d4ad98] rounded-full shadow-lg">
              <svg 
                className="w-6 h-6 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 tracking-tight">
                MindAI
              </h1>
              <p className="text-xs text-gray-600">Compassionate Support</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {/* Chat - Active State */}
            <Link
              href="/ui/chat"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                pathname === '/ui/chat'
                  ? 'bg-[#d4ad98]/10 border border-[#d4ad98]/30 text-[#d4ad98] font-semibold shadow-sm'
                  : 'text-gray-700 hover:bg-[#d4ad98]/5 hover:text-[#d4ad98]'
              }`}
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2} />
              <span>New Chat</span>
            </Link>

            {/* Sessions */}
            <Link
              href="/ui/sessions"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                pathname.startsWith('/ui/sessions')
                  ? 'bg-[#d4ad98]/10 border border-[#d4ad98]/30 text-[#d4ad98] font-semibold shadow-sm'
                  : 'text-gray-700 hover:bg-[#d4ad98]/5 hover:text-[#d4ad98]'
              }`}
            >
              <Calendar className="w-5 h-5" strokeWidth={2} />
              <span>Sessions</span>
            </Link>

            {/* Critical */}
            {/* <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-[#d4ad98]/5 hover:text-[#d4ad98] transition-all duration-300 font-medium"
            >
              <AlertCircle className="w-5 h-5" strokeWidth={2} />
              <span>Critical</span>
            </a> */}

            {/* Solutions */}
            <Link
              href="/ui/summary"
             className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                pathname.startsWith('/ui/summary')
                  ? 'bg-[#d4ad98]/10 border border-[#d4ad98]/30 text-[#d4ad98] font-semibold shadow-sm'
                  : 'text-gray-700 hover:bg-[#d4ad98]/5 hover:text-[#d4ad98]'
              }`}
            >
              <Lightbulb className="w-5 h-5" strokeWidth={2} />
              <span>Solutions</span>
            </Link>
          </nav>

          {/* Sidebar Footer - Optional */}
          {/* <div className="px-6 py-4 border-t border-gray-200"> */}
            <div className="flex items-center gap-2 px-4 py-2">
              {/* <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> */}
              {/* <span>All systems operational</span> */}
                <button
       
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-[#d4ad98]/5 hover:text-[#d4ad98] transition-all duration-300 font-medium"
            >
              <Calendar className="w-5 h-5" strokeWidth={2} />
              <span onClick={signOut}>Logout</span>
            </button>
            </div>
          </div>
        {/* </div> */}
      </aside>

      {/* Mobile Slide-over Sidebar Overlay (Visual Only) */}
      <div className={`lg:hidden fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
           onClick={() => setIsMobileMenuOpen(false)}>
        {/* Sidebar Drawer */}
        <aside className={`fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
               onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col h-full">
            {/* Mobile Sidebar Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-[#d4ad98] rounded-full shadow-lg">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800 tracking-tight">
                    MindAI
                  </h1>
                  <p className="text-xs text-gray-600">Compassionate Support</p>
                </div>
              </div>
              {/* Close button visual */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
              {/* Chat - Active */}
              <Link
                href="/ui/chat"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
                  pathname === '/ui/chat'
                    ? 'bg-[#d4ad98]/10 border border-[#d4ad98]/30 text-[#d4ad98] font-semibold'
                    : 'text-gray-700 hover:bg-[#d4ad98]/5 hover:text-[#d4ad98]'
                }`}
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2} />
                <span>Chat</span>
              </Link>

              {/* Sessions */}
              <Link
                href="/ui/sessions"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
                  pathname.startsWith('/ui/sessions')
                    ? 'bg-[#d4ad98]/10 border border-[#d4ad98]/30 text-[#d4ad98] font-semibold'
                    : 'text-gray-700 hover:bg-[#d4ad98]/5 hover:text-[#d4ad98]'
                }`}
              >
                <Calendar className="w-5 h-5" strokeWidth={2} />
                <span>Sessions</span>
              </Link>

              {/* Critical */}
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-[#d4ad98]/5 hover:text-[#d4ad98] font-medium"
              >
                <AlertCircle className="w-5 h-5" strokeWidth={2} />
                <span>Critical</span>
              </a>

              {/* Solutions */}
              <Link
                href="/ui/summary"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium ${
                  pathname.startsWith('/ui/summary')
                    ? 'bg-[#d4ad98]/10 border border-[#d4ad98]/30 text-[#d4ad98] font-semibold'
                    : 'text-gray-700 hover:bg-[#d4ad98]/5 hover:text-[#d4ad98]'
                }`}
              >
                <Lightbulb className="w-5 h-5" strokeWidth={2} />
                <span>Solutions</span>
              </Link>
            </nav>
            
            {/* Mobile Logout Button */}
            <div className="px-4 py-4 border-t border-gray-200">
              <button
                onClick={signOut}
                className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-700 hover:bg-[#d4ad98]/5 hover:text-[#d4ad98] transition-all duration-300 font-medium"
              >
                <Calendar className="w-5 h-5" strokeWidth={2} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Main Content Area */}
      <div className="lg:pl-60">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md shadow-black/5">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            {/* Left: Mobile Hamburger Menu */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Menu className="w-6 h-6" strokeWidth={2} />
              </button>
              
              {/* Mobile Brand Name */}
              <div className="lg:hidden flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-[#d4ad98] rounded-full shadow-lg">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                    />
                  </svg>
                </div>
                <h1 className="text-lg font-bold text-gray-800">MindAI</h1>
              </div>
            </div>

            {/* Right: User Profile Section */}
            <div className="flex items-center gap-3">
              {/* User Profile Dropdown (Visual Only) */}
              <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-[#d4ad98] flex items-center justify-center text-white font-semibold text-sm shadow-md">
                    
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full" />
                </div>

                {/* User Name - Hidden on small mobile */}
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-gray-800">{user?.user_metada?.full_name || user?.email.split("@")[0]}</p>
                  <p className="text-xs text-gray-600">Premium Member</p>
                </div>

                {/* Dropdown Caret */}
                <ChevronDown className="hidden sm:block w-4 h-4 text-gray-500" strokeWidth={2} />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Wrapper */}
        <main className="min-h-[calc(100vh-4rem)] relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {/* Content Area - Renders children */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg shadow-black/10 border border-gray-200/60 p-6 sm:p-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/**
 * USAGE EXAMPLE:
 * 
 * import AppLayout from '@/app/ui/layout';
 * 
 * export default function ChatPage() {
 *   return (
 *     <AppLayout>
 *       <h1>Chat Interface</h1>
 *       <p>Your chat content goes here...</p>
 *     </AppLayout>
 *   );
 * }
 */
