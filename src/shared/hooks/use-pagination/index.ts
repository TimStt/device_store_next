import { IUsePagination } from "@/shared/types/ui";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDeferredValue, useMemo } from "react";

export const usePagination = <ProductsList>({
  productsList,
  maxItemPage = 10,
}: IUsePagination<ProductsList>) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const params = new URLSearchParams(searchParams?.toString());
  const totalCount = productsList.length;
  const totalPages = Math.ceil(totalCount / maxItemPage);
  const currentPage = params.get("page") ? +params.get("page")! : 1;

  const onChange = (event: React.ChangeEvent<unknown>, page: number) => {
    params.set("page", page.toString());
    push(`${pathname}?${params.toString()}`);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const splitProductsList = productsList.slice(
    (currentPage - 1) * maxItemPage,
    currentPage * maxItemPage
  );

  const renderProductList = useDeferredValue(splitProductsList);

  return {
    totalPages,
    onChange,
    pages,
    currentPage,
    renderProductList,
  };
};
