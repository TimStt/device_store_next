export const addProductByLS = <Data>(
  products: Data[],
  name: string = "basket"
) => {
  localStorage.setItem(name, JSON.stringify(products));
};
