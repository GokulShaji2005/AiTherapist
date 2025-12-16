import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function GET(request) {
  const code = new URL(request.url).searchParams.get('code')

  if (!code) {
    return NextResponse.redirect('/auth/login')
  }

  await supabase.auth.exchangeCodeForSession(code)
await supabase.from('profiles').upsert({
  id: user.id,
  email: user.email,
  full_name: user.user_metadata?.full_name,
  avatar_url: user.user_metadata?.avatar_url,
  provider: user.app_metadata?.provider,
})

  return NextResponse.redirect('/dashboard')
}
