import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalChangeImageInitial } from "@/shared/types/ui";
import { addItemByLS } from "@/shared/utils/add-product-by-LS";

const initialState = {
  isOpen: false,
};

const mobileMenuModalSlice = createSlice({
  name: "mobileMenuModal",
  initialState,
  reducers: {
    setStateModalMobileMenu: (state, action: PayloadAction<boolean>) => {
      const stateModal = action.payload;
      state.isOpen = action.payload;
      addItemByLS(stateModal, "isOpenMobileMenu");
    },
  },
});

export const { setStateModalMobileMenu } = mobileMenuModalSlice.actions;

export default mobileMenuModalSlice.reducer;
