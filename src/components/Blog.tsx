"use client";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

export default function Blog({ mdxSource }: Props) {
  return <MDXRemote {...mdxSource} />;
}
