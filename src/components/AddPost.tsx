import React from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

import { api } from "~/utils/api";

function AddPost() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState("");
  const { mutate, isLoading: isPosting } = api.post.create.useMutation({
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      errorMessage?.[0]
        ? toast.error(errorMessage[0])
        : toast.error("Failed to post! Please try again later.");
    },
  });
  const handleSubmit = async () => {
    try {
      mutate({
        id: uuidv4(),
        userId: "google-oauth2|109599121695652790303",
        title: title,
        description: description,
        content: content,
        image: image,
      });
    } catch (e) {
      console.error(e);
    }
  };
  if (isPosting)
    return <div className="flex w-screen items-center justify-center"></div>;
  return (
    <div className="flex w-screen items-center justify-center">
      <div
        className="mt-24 flex w-[90%] flex-col items-center justify-center gap-2 sm:w-[628px]"
        style={{ fontFamily: "Poppins" }}
      >
        <input
          id="title"
          type="text"
          placeholder="Title"
          className="w-[90%] rounded-lg bg-white/5 p-2 text-[#a1a1a1] focus:outline focus:outline-1 focus:outline-white/50 sm:w-[80%]"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          id="description"
          type="text"
          placeholder="Description"
          className="w-[90%] rounded-lg bg-white/5 p-2 text-[#a1a1a1] focus:outline focus:outline-1 focus:outline-white/50 sm:w-[80%]"
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          id="content"
          placeholder="Content"
          className="min-h-[300px] w-[90%] rounded-lg bg-white/5 p-2 text-[#a1a1a1] focus:outline focus:outline-1 focus:outline-white/50 sm:w-[80%]"
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          id="image"
          type="text"
          placeholder="Image URL"
          className="w-[90%] rounded-lg bg-white/5 p-2 text-[#a1a1a1] focus:outline focus:outline-1 focus:outline-white/50 sm:w-[80%]"
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          className="w-20 rounded-lg bg-slate-500 p-2 text-sm font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddPost;
