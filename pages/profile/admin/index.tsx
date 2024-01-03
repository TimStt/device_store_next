import React from "react";
import style from "./_admin.module.scss";
import { UserType } from "@/types";
import Loading from "../../../src/components/Loading";
import Link from "next/link";
import Layout from "../Layout";
import { Pen, Plus } from "lucide-react";

const AdminPanel: React.FC<{ user: UserType }> = ({ user }) => {
  // if (!user) {
  //   return <Loading />;
  // }
  // const { zipcode, geolocation, ...mainAdress } = user?.address || {};

  // const adressNames: string[] = ["Город", "Улица", "Номер дома"];

  return (
    <Layout>
      <section className={style.root}>
        <Link href="admin/list">
          <div className={style.link}>
            <span>Изменить товары</span>
            <Pen size={40} />
          </div>
        </Link>
        <Link href="admin/add">
          <div className={style.link}>
            <span>Добавить товар</span>
            <Plus size={40} />
          </div>
        </Link>
      </section>
    </Layout>
  );
};

export default AdminPanel;
