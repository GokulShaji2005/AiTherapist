'use client'
import HeroSection from "@/components/landing/HeroSection";
import Features from "@/components/landing/Features";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/footer";
export default function Home() {


 
  return (
    <>
      <HeroSection />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
}
