import { GetServerSideProps } from "next";
import { getUserSession } from "@/shared/api/get-user-session";
import Profile from "@/pages/profile";
import { wrapper } from "@/redux/store";
import { setUser } from "@/redux/slices/user-slice";
import { IUserFree } from "@/shared/types/auth";
import { getUserByName } from "@/shared/api/get-user-by-name";

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(({ dispatch }) => async ({ req }) => {
    const user = await getUserSession(req);
    const findUserByName = await getUserByName(user?.name!);
    if (!findUserByName)
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    const { password, createdAt, ...otherInfo } = findUserByName;

    dispatch(setUser(otherInfo));
    return { props: { otherInfo } };
  });

export default Profile;
