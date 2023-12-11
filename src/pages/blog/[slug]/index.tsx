import React from "react";
import remarkGfm from "remark-gfm";
import { serialize } from "next-mdx-remote/serialize";

import { db } from "~/server/db";
import { getById } from "../../../server/api/routers/post";
import Blog from "../../../components/Blog";
import { type Props } from "../../../components/Blog";

function Page({ mdxSource }: Props) {
  return (
    <div className="flex w-screen items-center justify-center">
      <div className="prose prose-invert mx-2 mt-24 rounded-3xl border border-white/10 p-14 md:p-20">
        <Blog mdxSource={mdxSource} />
      </div>
    </div>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const res = await getById({ d: db, id: params.slug });
  const mdxSource = await serialize(res?.[0]?.content ?? "", {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      format: "mdx",
    },
  });
  return { props: { mdxSource: mdxSource } };
}

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default Page;
