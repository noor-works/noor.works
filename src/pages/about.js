import About from "@/components/about/About";
import Shell from "@/components/Shell";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About / Noor</title>
      </Head>
      <Shell>
        <About />
      </Shell>
    </>
  );
};

export default about;
