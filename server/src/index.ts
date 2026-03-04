import express from 'express'
import dotenv from 'dotenv'
import Redis from 'ioredis'
import { Pool } from "pg";


dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.json({ message: 'TriPPLesPH API running 🚀' })
})

//redis testing connection
const redis = new Redis(process.env.REDIS_URL!);

await redis.set("test_key", "hello");
redis.get("test_key").then((value) => {
    console.log("✅ Redis connected:", value)
})

// postgres testing connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function testPostgres() {
  try {
    console.log("⏳ Testing Postgres connection...");
    const res = await pool.query("SELECT NOW()");
    console.log("✅ Postgres connected:", res.rows[0]);
  } catch (err) {
    console.error("❌ Postgres connection failed:");
    console.error(err);
  }
}

testPostgres();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
