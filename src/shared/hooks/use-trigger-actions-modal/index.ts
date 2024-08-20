import { useCallback, useEffect } from "react";
import { useTrackingClickOnOut } from "../use-tracking-click-on-out";
import { IUseTriggerActionsModal, TActionTypeModal } from "@/shared/types/ui";
import { useDispatch } from "react-redux";
import { useScrollHidden } from "../use-scroll-hidden";
import { setStateModalMobileMenu } from "@/redux/slices/mobile-menu-modal";
import { useSetStateModal } from "@/shared/hooks/use-set-state-modal";

export const useTriggerActionsModal = ({
  modalRef,
  modalInnerRef,
  setState,
  isOpen,
}: IUseTriggerActionsModal) => {
  const dispatch = useDispatch();
  const setStateModal = useCallback(
    (actionType: TActionTypeModal) => {
      if (actionType === "open") {
        modalRef.current?.showModal();
        return;
      }

      setTimeout(() => modalRef.current?.close(), 500);
    },
    [modalRef]
  );

  useEffect(() => {
    setStateModal(isOpen ? "open" : "close");
  }, [setStateModal, isOpen]);

  useScrollHidden(isOpen);
  useSetStateModal({
    nameStateModal: "isOpenMobileMenu",
    setStateModal: setState,
  });
  useTrackingClickOnOut(() => dispatch(setState(false)), isOpen, modalInnerRef);
};
