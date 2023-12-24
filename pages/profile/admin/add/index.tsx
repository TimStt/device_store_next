import React from "react";
import style from "../../src/components/ProfileInfo/_ProfileInfo.module.scss";
import { UserType } from "@/types";

import Link from "next/link";

const AdminPanel: React.FC<{ user: UserType }> = ({ user }) => {
  // if (!user) {
  //   return <Loading />;
  // }
  // const { zipcode, geolocation, ...mainAdress } = user?.address || {};

  // const adressNames: string[] = ["Город", "Улица", "Номер дома"];

  return (
    <div>
      <Link href="admin/sheet">Изменить товары</Link>
      <Link href="admin/add">Добавить товар</Link>
    </div>
  );
};

export default AdminPanel;
