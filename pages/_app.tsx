import { AppProps } from "next/app";
import React from "react";
import Layout from "../src/components/LayoutMain";
import "../src/styles/app.scss";

import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { persistor, store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

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
        <PersistGate loading={null} persistor={persistor}>
          {pathName === "/login" || pathName === "/register"
            ? loginLayout()
            : mainLayout()}
        </PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
