import { AppProps } from "next/app";
import React from "react";
import Layout from "../src/components/Layot";
import "../src/styles/app.scss";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
