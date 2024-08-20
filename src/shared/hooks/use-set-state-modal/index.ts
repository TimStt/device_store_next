import { setStateModalMobileMenu } from "@/redux/slices/mobile-menu-modal";
import { IUseSetStateModal } from "@/shared/types/ui";
import { addItemByLS } from "@/shared/utils/add-product-by-LS";
import { getItemByLS } from "@/shared/utils/get-item-by-LS";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useSetStateModal = ({
  nameStateModal = "isOpenMobileMenu",
  setStateModal,
}: IUseSetStateModal) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const stateModal = getItemByLS<boolean>(nameStateModal);

    if (stateModal !== undefined) {
      dispatch(setStateModal(stateModal));
    }
  }, [dispatch, nameStateModal, setStateModal]);
};
