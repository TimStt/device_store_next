import React from "react";
import { IDevicesTypes } from "@/shared/types/products";

import style from "./product-list.module.scss";
import { IPropsDevices } from "@/shared/types/ui";
import { useSelector } from "react-redux";
import { selectorCatalogProducts } from "@/redux/selectors/catalog";
import SkeletonCatalog from "../skeleton-catalog";
import Card from "@/components/card";

const ProductList: React.FC = () => {
  const devices = useSelector(selectorCatalogProducts);
  return (
    <ul className={style.root}>
      {devices?.length
        ? devices.map((device, index) => (
            <Card device={device} key={index} {...device} />
          ))
        : Array(20)
            .fill(null)
            .map((_, index) => <SkeletonCatalog key={index} />)}
    </ul>
  );
};

export default ProductList;
