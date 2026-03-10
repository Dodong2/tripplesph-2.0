import express from 'express'
import dotenv from 'dotenv'
import { Redis } from 'ioredis'
import prisma from './db/prisma.js'
import authHandlder from './routes/auth.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001


app.use(express.json())
app.use("/api/auth", authHandlder)

//redis testing connection
const redis = new Redis(process.env.REDIS_URL!);

async function connectRedis() : Promise<void> {
  await redis.set("test_key", "hello");
  const value = await redis.get("test_key")
  console.log('Redis connected:', value)
}


// prisma postgres connection test
async function connectPostgres(): Promise<void> {
  try {
    console.log('Testing Postgres connection...')
    await prisma.$connect()
    console.log('Postgres connected via Prisma') 
  } catch (err) {
    console.error('Postgres connection failed:', err)
  }
}

// Routes
app.get('/', (_req, res) => {
  res.json({ message: 'TriPPLesPH API running' })
})



//test API connection backend
app.get('/db-test', async (req, res) => {
  try {
    const test = await prisma.testConnection.create({
      data: { message: 'Prisma database working connected' }
    })
    res.json({ status: 'success', data: test })
  } catch(err) {
    console.error()
    res.status(500).json({ message: 'Server Error' })
  }
})

// Bootstrap
await connectRedis()
await connectPostgres()

// ─── ENV CHECK — temporary, tanggalin later ───────────
console.log("ENV CHECK:", {
  betterAuthUrl: process.env.BETTER_AUTH_URL,
  googleId: process.env.GOOGLE_CLIENT_ID ? "✓ present" : "✗ missing",
  googleSecret: process.env.GOOGLE_CLIENT_SECRET ? "✓ present" : "✗ missing",
});


app.get('/test-auth', (_req, res) => {
  res.send(`
    <html>
      <body>
        <button onclick="signIn()">Sign in with Google</button>
        <script>
          async function signIn() {
            const res = await fetch('http://localhost:3001/api/auth/sign-in/social', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                provider: 'google',
                callbackURL: 'http://localhost:3001/test-auth'
              }),
              credentials: 'include'
            });
            const data = await res.json();
            // Better Auth returns redirect URL
            if (data.url) window.location.href = data.url;
          }
        </script>
      </body>
    </html>
  `)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
