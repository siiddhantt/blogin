import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "~/components/Navbar";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
        <Toaster position="bottom-center" />
      </UserProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
