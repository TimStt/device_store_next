import React, { use, useCallback, useEffect, useState } from "react";
import style from "./list.module.scss";

import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";
import Link from "next/link";

import { ArrowLeftCircle, Pen, X } from "lucide-react";
import { Pagination } from "@mui/material";
import {
  selectorLoadingListAdmin,
  selectorProductsListAdmin,
} from "@/redux/selectors/list-devices-admin";
import { paths } from "@/shared/config/paths";
import { useDeleteDevice } from "./hooks/use-delete-device";
import Spinner from "@/shared/ui/spinner";
import CardProductAdmin from "./ui/card-product";
import ListProductsAdmin from "./ui/list-products";
import cls from "classnames";
import HeaderListAdmin from "./ui/header-list-admin";
import { useGetAdminDevices } from "./hooks/use-get-admin-devices";
import PaginationAdminList from "./ui/pagination-admin-list";
import { usePagination } from "@/shared/hooks/use-pagination";

const AdminAllProducts: React.FC = () => {
  useGetAdminDevices();
  const loadingList = useSelector(selectorLoadingListAdmin);
  const devices = useSelector(selectorProductsListAdmin);

  const { totalPages, onChange, currentPage, renderProductList } =
    usePagination({
      productsList: devices,
      maxItemPage: 10,
    });
  return (
    <section
      className={cls(style.root, "container", {
        [style.loading]: loadingList,
      })}
    >
      {loadingList ? (
        <Spinner className={style.root__spinner} size={70} strokeWidth={10} />
      ) : (
        <>
          <HeaderListAdmin />
          <ListProductsAdmin devices={renderProductList} />
          <PaginationAdminList
            totalPages={totalPages}
            onChange={onChange}
            currentPage={currentPage}
          />
        </>
      )}
    </section>
  );
};

export default AdminAllProducts;
