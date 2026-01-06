import { supabase } from "../supabase/client";

export default async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Sign out failed:", error.message);
    return;
  }

  // Manual redirect (recommended)
  window.location.href = "/";
}
