import React from "react";
import style from "./product.module.scss";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { selectorGetLoading } from "@/redux/selectors/actions-devices";
import cls from "classnames";
import AsideActionsProduct from "./ui/aside-actions-product";
import { selectorPersonalProducts } from "@/redux/selectors/personal-product";
import Spinner from "@/shared/ui/spinner";
import MainInfoCard from "./ui/main-info-card";
import EmptyPage from "@/components/empty-page";
import { useRouter } from "next/router";

const Product: React.FC = () => {
  const device = useSelector(selectorPersonalProducts);
  const id = useRouter().query.id as string;
  const loading = useSelector(selectorGetLoading);

  return (
    <article
      className={cls(style.root, "container", {
        [style.loading]: loading,
      })}
    >
      <MainInfoCard />
    </article>
  );
};

export default Product;
