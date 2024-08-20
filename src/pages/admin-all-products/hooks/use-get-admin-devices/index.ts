import { getListAdminThunk } from "@/redux/slices/list-devices-admin-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useGetAdminDevices = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getListAdminThunk());
  }, [dispatch]);
};
