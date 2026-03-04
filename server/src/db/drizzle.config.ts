import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
import path from 'path';
import { drizzle } from 'drizzle-orm/better-sqlite3';
// explicitly load .env from server folder
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, // will exist now
  },
});