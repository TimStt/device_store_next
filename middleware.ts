// export { default } from "next-auth/middleware";
import withAuth from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
export default withAuth({
  pages: {
    signIn: "/login",
    error: "/login",
  },
});

export const config = {
  matcher: [
    "/profile",
    "/profile/admin",
    "/profile/admin/list",
    "/profile/admin/list/:id",
  ],
};
