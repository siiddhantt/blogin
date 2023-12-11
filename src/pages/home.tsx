import React from "react";
import Post from "../components/Post";
import { type SelectBlog } from "~/server/db/schema";

import { db } from "~/server/db";
import { getAll } from "../server/api/routers/post";

function HomePage({ posts }: { posts: string }) {
  const data = JSON.parse(posts) as SelectBlog[];
  return (
    <div>
      <div className="h-16"></div>
      <div className="flex w-full flex-col items-center gap-2">
        {data?.map((value: SelectBlog) => <Post key={value.id} {...value} />)}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await getAll({ d: db });
  return {
    props: {
      posts: JSON.stringify(posts),
    },
  };
}

export default HomePage;
