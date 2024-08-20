import { AppProps } from "next/app";
import React, { ElementType } from "react";
import Layout from "@/components/layout-main";
import "@/styles/index.scss";

import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { wrapper } from "@/redux/store";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { nanoid } from "@reduxjs/toolkit";
import { useRouter } from "next/router";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const pathName = usePathname();
  const router = useRouter();

  const DEFOULT_LAYOUT: ElementType = Layout;
  const LayoutMain =
    pathName === "/login" || pathName === "/register" ? "main" : DEFOULT_LAYOUT;

  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <LayoutMain>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Toaster position="top-center" reverseOrder={false} />
            <Component {...props.pageProps} key={router.asPath} />
          </AnimatePresence>
        </LayoutMain>
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
