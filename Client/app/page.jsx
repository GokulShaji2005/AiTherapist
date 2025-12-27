'use client'
import HeroSection from "@/components/landing/HeroSection";
import Features from "@/components/landing/Features";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
export default function Home() {

 
  return (
    <>
      <HeroSection />
      <Features />
    </>
  );
}
