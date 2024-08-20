import { Pagination } from "@mui/material";
import React from "react";
import style from "./pagination-admin-list.module.scss";
import { usePagination } from "@/shared/hooks/use-pagination";
import { useSelector } from "react-redux";
import { selectorProductsListAdmin } from "@/redux/selectors/list-devices-admin";
import { IPaginationAdminList } from "@/shared/types/ui";

const PaginationAdminList = ({
  totalPages,
  onChange,
  currentPage,
}: IPaginationAdminList) => {
  const devices = useSelector(selectorProductsListAdmin);

  return (
    <Pagination
      className={style.root}
      count={totalPages}
      size="large"
      page={currentPage}
      onChange={onChange}
    />
  );
};

export default PaginationAdminList;
