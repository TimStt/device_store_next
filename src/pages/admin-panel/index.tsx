import React from "react";
import style from "./admin.module.scss";

import Link from "next/link";
import LayoutProfile from "../profile/ui/layout-profile";
import { Pen, Plus } from "lucide-react";

const AdminPanel = () => {
  return (
    <LayoutProfile>
      <div className={style.root}>
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
      </div>
    </LayoutProfile>
  );
};

export default AdminPanel;
