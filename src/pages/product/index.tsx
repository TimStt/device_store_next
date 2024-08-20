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

const Product: React.FC = () => {
  const { data: session } = useSession();
  const device = useSelector(selectorPersonalProducts);

  const loading = useSelector(selectorGetLoading);

  return (
    <article
      className={cls(style.root, "container", {
        [style.loading]: loading,
      })}
    >
      {loading ? (
        <Spinner className={style.root__spinner} size={100} />
      ) : (
        <>
          {device ? (
            <MainInfoCard device={device} />
          ) : (
            <EmptyPage
              title={"Товар не найден"}
              image={"/empty.jpg"}
              backLink={"home"}
            />
          )}
        </>
      )}
    </article>
  );
};

export default Product;
