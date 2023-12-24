import React from "react";
import style from "./_layot.module.scss";
import Footer from "../Footer";
import Header from "../Header";
import { Metadata } from "next/types";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Comrade",
  description: "Лучшие продукты - здесь",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description!} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
