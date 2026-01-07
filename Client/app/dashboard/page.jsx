'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const [user,setUser]=useState('');
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push('/auth/login')
      }
      else{
        setUser(data.user);
      }
    })
  }, [router])

  return <h1>{user?.email}</h1>
}
