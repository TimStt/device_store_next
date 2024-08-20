import React from "react";
import style from "./add-button.module.scss";
import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useAddProductBasket } from "@/shared/hooks/use-add-product-basket";
import { IPropsDevice, IPropsDevices } from "@/shared/types/ui";
import { selectProductById } from "@/redux/selectors/basket";

const AddBasketButton: React.FC<IPropsDevice> = ({ device }) => {
  const { handlerAdd } = useAddProductBasket();
  const busketProduct = useSelector(selectProductById(device?.id));
  return (
    <button className={style.addBtn} onClick={() => handlerAdd(device)}>
      <Plus size={30} color="#D3D3D3" />
      {busketProduct?.count}
    </button>
  );
};

export default AddBasketButton;
