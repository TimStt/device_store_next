export const addItemByLS = <Data>(products: Data, name: string = "basket") => {
  localStorage.setItem(name, JSON.stringify(products));
};
