export interface RatingTypes {
  rate: number;
  count: number;
}

export interface DevicesTypes {
  id: string;
  title: string;
  price: number | null;
  image: string;
  rating?: RatingTypes;
  category?: string | null;
  description: string | null;
  count?: number;
}

export interface UserName {
  firstname: string;
  lastname: string;
}
export interface UserAdress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: UserGeolocation;
}
export interface UserGeolocation {
  lat: string;
  long: string;
}
export interface UserType {
  id?: number;
  name?: UserName;
  email?: string | undefined;
  username: string;
  cpassword?: string;
  address?: UserAdress;
  password: string;
  phone?: string;
  image?: string;
  accessToken?: string;
  __v?: number;
}
export interface navItemsProfile {
  name: string;
  href: string;
}

export interface inputAuthType {
  username: string;
  password: string;
  cpassword?: string;
  nickName?: string;
}

export interface stateProductsFetchTypes {
  products: DevicesTypes[];
  status: string;
}
export interface stateProductFetchTypes {
  product: DevicesTypes[];
  getStatus: string;
  postStatus: string;
  putStatus: string;
  deleteStatus: string;
}
export interface RootStateProducts {
  products: stateProductsFetchTypes;
}
export interface RootStateProduct {
  changeProducts: stateProductFetchTypes;
}
export interface RootStateBasket {
  basket: stateBasket;
}

export interface stateBasket {
  totalPrice: number;
  totalCount: number;

  busketProduct: DevicesTypes[];
}
