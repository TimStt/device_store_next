import { getDevices } from "@/shared/api/get-devices";
import { GetStaticProps } from "next/types";

import Home from "@/pages/home";
import { wrapper } from "@/redux/store";
import { setCatalogProducts } from "@/redux/slices/catalog-slice";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  ({ dispatch }) =>
    async () => {
      const devices = await getDevices();
      dispatch(setCatalogProducts(devices));
      return { props: {}, revalidate: 60 };
    }
);

export default Home;
