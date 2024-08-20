import React from "react";
import style from "./_layot.module.scss";
import Footer from "../footer";
import Header from "../header";
import { Metadata } from "next/types";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import ImageEditModal from "../image-edit";
import MenuMobile from "../header/ui/mobile-menu";

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
      <MenuMobile />
    </>
  );
};
export default Layout;
