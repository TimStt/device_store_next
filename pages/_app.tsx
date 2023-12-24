import { AppProps } from "next/app";
import React from "react";
import Layout from "../src/components/LayoutMain";
import "../src/styles/app.scss";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const pathName = usePathname();

  const loginLayout = () => {
    return (
      <main>
        <Component {...pageProps} />
      </main>
    );
  };
  const mainLayout = () => {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {pathName === "/login" || pathName === "/register"
          ? loginLayout()
          : mainLayout()}
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
