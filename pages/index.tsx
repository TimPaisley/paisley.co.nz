import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import me from "../public/me.jpg";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-100">
      <Head>
        <title>Tim</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧔</text></svg>"
        ></link>
      </Head>

      <Image
        className="w-20 h-20 object-cover object-top rounded-full mb-12 border-2 border-blue-500"
        src={me}
        alt="A picture of me (Tim Paisley)"
        placeholder="blur"
      />

      <a
        className="underline mb-4 hover:text-blue-700"
        href="mailto:tepaisley@gmail.com"
      >
        tepaisley@gmail.com
      </a>

      <a
        className="underline mb-4 hover:text-blue-700"
        href="https://www.linkedin.com/in/tim-paisley-7308ba123/"
      >
        linkedin.com/timpaisley
      </a>

      <a
        className="underline mb-4 hover:text-blue-700"
        href="https://github.com/timpaisley"
      >
        github.com/timpaisley
      </a>
    </div>
  );
};

export default Home;
