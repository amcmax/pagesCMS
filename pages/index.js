import Head from "next/head";
import Pages from "../components/pages/Pages";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div className="mx-auto px-4">
      <Head>
        <title>PagesCMS</title>
        <meta name="description" content="Generated by PagesCMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Pages />
      </main>
    </div>
  );
}
