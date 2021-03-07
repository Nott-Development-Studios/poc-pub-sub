import Head from "next/head";

const Home = () => {
  const sendMessage = () => {
    console.log("CLICKED!");
  };

  return (
    <>
      <Head>
        <title>Frontend</title>
      </Head>
      <main>
        <button onClick={sendMessage}>Send Message</button>
      </main>
    </>
  );
};

export default Home;
