import { Pool } from "pg";
import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";

dotenv.config({ path: ".env" });
import * as schema from "./schema";

export const db = drizzle(
  new Pool({
    connectionString: process.env.DATABASE_URL ?? "",
  }),
  { schema },
);
