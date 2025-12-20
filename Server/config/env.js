import dotenv from 'dotenv'

dotenv.config()

if (!process.env.GROQ_API_KEY) {
  throw new Error("❌ GROQ_API_KEY is missing")
}

console.log("✅ ENV loaded")
