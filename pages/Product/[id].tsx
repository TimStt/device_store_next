import Product from "@/pages/product";
import { setPersonalProducts } from "@/redux/slices/personal-product-slice";
import { getOneProductThunk } from "@/redux/slices/product-actions-slice";
import { wrapper } from "@/redux/store";
import { unwrapResult } from "@reduxjs/toolkit";

export default Product;

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async ({ params }) => {
      const id = params?.id;
      const device = unwrapResult(
        await dispatch(getOneProductThunk(id as string))
      );
      dispatch(setPersonalProducts(device));
      return { props: {} };
    }
);
