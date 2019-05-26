import global from "../styles/global.scss";

import Head from "next/head";

import NavHeader from "../components/NavHeader";
import IndexHero from "../components/IndexHero";
const Index = () => (
  <div className="body">
    <Head>
      <title>topIN</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavHeader />
    <IndexHero />
    <style global jsx>
      {`
        .body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          margin: 0;
          font-size: 20px;
          -webkit-font-smoothing: antialiased;
          line-height: 1.3;
          background-color: white;
          color: #586371;
          width: 100vw;
          height: 1000vh;
        }
        .m_container {
          padding: 0px 50px;
        }
      `}
    </style>
  </div>
);

export default Index;
