import React, { memo } from "react";
import { useSelector } from "react-redux";
import CardProductAdmin from "../card-product";
import { selectorProductsListAdmin } from "@/redux/selectors/list-devices-admin";
import style from "./list-products.module.scss";
import { IPropsDevices } from "@/shared/types/ui";

const ListProductsAdmin = memo(({ devices }: IPropsDevices) => {
  return (
    <ul className={style.root}>
      {devices.map((device, index) => (
        <li key={index}>
          <CardProductAdmin device={device} indexDevice={index + 1} />{" "}
        </li>
      ))}
    </ul>
  );
});

ListProductsAdmin.displayName = "ListProductsAdmin";
export default ListProductsAdmin;
