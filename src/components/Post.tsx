import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import type { RouterOutputs } from "~/utils/api";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

type PostWithUser = RouterOutputs["post"]["all"][number];
function Post(props: PostWithUser) {
  const { id, title, description, image } = props;
  return (
    <div className="flex h-[384px] w-[90%] flex-col items-center overflow-hidden text-ellipsis rounded-lg bg-white bg-opacity-5 sm:h-[528px] sm:w-[528px]">
      <Image
        alt="post-image"
        src={image ?? ""}
        height={200}
        width={500}
        className="h-[60%] w-full rounded-t-lg"
      ></Image>
      <div
        className={`flex flex-col items-center gap-2 p-6 text-center ${poppins.className}}`}
      >
        <Link href={`/blog/${id}`}>
          <h1 className="text-xl font-semibold text-[#f1f1f1] hover:cursor-pointer hover:underline sm:text-3xl">
            {title}
          </h1>
        </Link>
        <p className="text-sm text-[#a1a1a1] sm:text-base">{description}</p>
      </div>
    </div>
  );
}

export default Post;
