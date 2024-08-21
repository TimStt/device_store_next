import Product from "@/pages/product";
import { setPersonalProducts } from "@/redux/slices/personal-product-slice";
import { getOneProductThunk } from "@/redux/slices/product-actions-slice";
import { wrapper } from "@/redux/store";
import { getOneDevice } from "@/shared/api/get-one-device";
import { getBufferBySrc } from "@/shared/utils/get-buffer-by-src";
import { unwrapResult } from "@reduxjs/toolkit";
import { get } from "http";
import { getPlaiceholder } from "plaiceholder";

export default Product;

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async ({ params }) => {
      try {
        const id = params?.id;
        const device = await getOneDevice(id as string);

        if (!device)
          return {
            props: {},
            redirect: { destination: "/404" },
            notFound: true,
          };
        const buffer = await getBufferBySrc(device?.image);

        const { base64 } = await getPlaiceholder(buffer, {
          size: 64,
        });
        dispatch(
          setPersonalProducts({
            ...device,
            image: {
              src: device.image,
              placeholder: base64,
            },
          })
        );
        return { props: {} };
      } catch (error) {
        console.log((error as Error).message);
      } finally {
        return { props: {} };
      }
    }
);
