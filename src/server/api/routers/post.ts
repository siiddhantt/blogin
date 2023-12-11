import { z } from "zod";

import { type db } from "~/server/db";
import { blog } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export async function getAll({ d }: { d: typeof db }) {
  return d.select().from(blog);
}

export async function getById({ d, id }: { d: typeof db; id: string }) {
  const res = await d.select().from(blog).where(eq(blog.id, id));
  return res;
}

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
        userId: z.string().min(1),
        title: z.string().min(1),
        description: z.string().min(1),
        content: z.string().min(1),
        image: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(blog).values({
        id: input.id,
        userId: input.userId,
        title: input.title,
        description: input.description,
        content: input.content,
        image: input.image,
      });
    }),

  all: publicProcedure.query(({ ctx }) => {
    return getAll({ d: ctx.db });
  }),

  getById: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(({ ctx, input }) => {
      return getById({ d: ctx.db, id: input.id });
    }),
});
