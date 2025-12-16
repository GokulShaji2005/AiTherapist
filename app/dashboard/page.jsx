// import { createSupabaseServer } from '@/lib/supabase/server';
// import { redirect } from 'next/navigation';

// export default async function Dashboard() {
//   const supabase = createSupabaseServer();
//   const { data } = await supabase.auth.getClaims();

//   if (!data?.claims) redirect('/auth/login');

// //   return <h1>Welcome!</h1>;
// // }
// import { createSupabaseServer } from '@/lib/supabase/server';
// import { redirect } from 'next/navigation';

// export default async function Dashboard() {
//   const supabase = createSupabaseServer();
//   const { data: { user } } = await supabase.auth.getUser();

//   if (!user) redirect('/auth/login');

//   return <h1>Dashboard</h1>;
// }
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
  }, [])

  return <h1>{user?.email}</h1>
}
