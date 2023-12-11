import dotenv from "dotenv";
import { type Config } from "drizzle-kit";

dotenv.config({ path: ".env" });

export default {
  driver: "pg",
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  dbCredentials: { connectionString: process.env.DATABASE_URL || "" } as {
    connectionString: string;
  },
} satisfies Config;
