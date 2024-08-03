import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { createClient } from '@libsql/client';
import * as schema from './schema';
config({ path: '.env' }); // or .env.local

const queryClient = postgres(process.env.Supabase!, {prepare: false})


export const db = drizzle(queryClient,{schema: schema} );