import { getOneProductThunk } from "@/redux/slices/product-actions-slice";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useGetChangeProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();

  const id = new URLSearchParams(searchParams?.toString()).get("id");
  useEffect(() => {
    if (id) {
      dispatch(getOneProductThunk(id));
    }
  }, [dispatch, id]);
};
