import { sql } from "drizzle-orm";
import { pgTable, varchar, text, timestamp } from "drizzle-orm/pg-core";
import { type InferSelectModel, type InferInsertModel } from "drizzle-orm";

export const user = pgTable("user", {
  id: varchar("id", { length: 255 }).primaryKey().notNull(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }),
  nickname: varchar("nickname", { length: 255 }),
  image: varchar("image_url", { length: 255 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const blog = pgTable("blog", {
  id: varchar("id", { length: 255 }).primaryKey().notNull(),
  userId: varchar("user_id", { length: 255 })
    .notNull()
    .references(() => user.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  image: varchar("image_url", { length: 255 }),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type SelectBlog = InferSelectModel<typeof blog>;
export type InsertBlog = InferInsertModel<typeof blog>;
