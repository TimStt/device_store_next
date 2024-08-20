export const paths = {
  home: "/",
  login: "/login",
  register: "/register",
  profile: "/profile",
  admin: "/profile/admin",
  adminList: (page?: string) =>
    "/profile/admin/list" + (page ? `?page=${page}` : ""),
  adminListId: "/profile/admin/list/:id",
  adminChangeId: (id: string, page?: string) =>
    `/profile/admin/list/product?id=${id}${`&page=${page || 1}`}`,
  productPersonPage: (id: string) => "/product/" + id,
  basket: "/basket",
};
