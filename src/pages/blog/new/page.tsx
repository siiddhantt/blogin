// "use client";
// import React from "react";
// const { v4: uuidv4 } = require("uuid");
// import { useUser } from "@auth0/nextjs-auth0/client";

// function getBaseUrl() {
//   if (process.env.NEXT_PUBLIC_VERCEL_URL)
//     return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
//   return `http://127.0.0.1:${process.env.NEXT_PUBLIC_PORT ?? 3000}`;
// }

// function Page() {
//   const HOST = getBaseUrl();
//   const { user } = useUser();
//   const [title, setTitle] = React.useState("");
//   const [description, setDescription] = React.useState("");
//   const [content, setContent] = React.useState("");
//   const [image, setImage] = React.useState("");
//   const handleSubmit = async () => {
//     try {
//       fetch(`${HOST}/api/blog/new`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id: uuidv4(),
//           userId: user?.sub,
//           title: title,
//           description: description,
//           content: content,
//           image: image,
//         }),
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div className="flex items-center justify-center w-screen">
//       <div
//         className="flex flex-col items-center justify-center gap-2 mt-24 w-[90%] sm:w-[628px]"
//         style={{ fontFamily: "Poppins" }}
//       >
//         <input
//           id="title"
//           type="text"
//           placeholder="Title"
//           className="w-[90%] sm:w-[80%] p-2 rounded-lg text-[#a1a1a1] bg-white/5 focus:outline focus:outline-1 focus:outline-white/50"
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           id="description"
//           type="text"
//           placeholder="Description"
//           className="w-[90%] sm:w-[80%] p-2 rounded-lg text-[#a1a1a1] bg-white/5 focus:outline focus:outline-1 focus:outline-white/50"
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <textarea
//           id="content"
//           placeholder="Content"
//           className="min-h-[300px] w-[90%] sm:w-[80%] p-2 rounded-lg text-[#a1a1a1] bg-white/5 focus:outline focus:outline-1 focus:outline-white/50"
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <input
//           id="image"
//           type="text"
//           placeholder="Image URL"
//           className="w-[90%] sm:w-[80%] p-2 rounded-lg text-[#a1a1a1] bg-white/5 focus:outline focus:outline-1 focus:outline-white/50"
//           onChange={(e) => setImage(e.target.value)}
//         />
//         <button
//           className="w-20 p-2 text-sm font-semibold rounded-lg bg-slate-500"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Page;
