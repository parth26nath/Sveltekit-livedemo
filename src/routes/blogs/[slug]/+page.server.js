import { sql } from "@vercel/postgres";

export async function load({ params,locals }) {
  return {
    names: await sql`SELECT * from NAMES where user_id='${locals.user}'`
  }
}