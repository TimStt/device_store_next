import React from "react";
import style from "./aside-actions-device.module.scss";
import { useSession } from "next-auth/react";

import { useSelector } from "react-redux";
import { IPropsDevice, TAsideActionsDevice } from "@/shared/types/ui";
import { Minus, Plus } from "lucide-react";
import { useAddProductBasket } from "@/shared/hooks/use-add-product-basket";
import { useDeleteProductBasket } from "@/shared/hooks/use-delete-product-basket";
import { selectProductById } from "@/redux/selectors/basket";

const AsideActionsProduct = ({ device, session }: TAsideActionsDevice) => {
  const { image, ...otherDeviceInfo } = device;

  const { handlerAdd } = useAddProductBasket();
  const { handlerDelete } = useDeleteProductBasket();
  const deviceInBasket = useSelector(selectProductById(device.id));

  return (
    <div className={style.root}>
      <span className={style.root__price}>{device.price} ₽ </span>{" "}
      {session &&
        (deviceInBasket ? (
          <div className={style.root__control}>
            {" "}
            <button
              onClick={() => handlerDelete(deviceInBasket, true)}
              type="button"
            >
              <Minus />
            </button>
            <b>{deviceInBasket.count}</b>
            <button
              onClick={() =>
                handlerAdd({
                  ...otherDeviceInfo,
                  image: image.src,
                })
              }
              type="button"
            >
              <Plus />
            </button>
          </div>
        ) : (
          <button
            onClick={() =>
              handlerAdd({
                ...otherDeviceInfo,
                image: image.src,
              })
            }
          >
            Добавить в корзину
          </button>
        ))}
    </div>
  );
};

export default AsideActionsProduct;
