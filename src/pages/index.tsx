import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BlogIn</title>
        <meta
          name="description"
          content="A simple, elegant, and modern blogging platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center"></main>
    </>
  );
}
