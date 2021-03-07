import Head from "next/head";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState();
  const sendMessage = () => {
    console.log("CLICKED!");
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  return (
    <>
      <Head>
        <title>Frontend</title>
      </Head>
      <main>
        <button onClick={sendMessage}>Send Message</button>
        <hr />
        <code style={{ padding: "0.5rem", backgroundColor: "#eee" }}>
          {JSON.stringify(data, null, "\t")}
        </code>
      </main>
    </>
  );
};

export default Home;
