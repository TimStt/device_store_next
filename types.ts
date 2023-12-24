export interface RatingTypes {
  rate: number;
  count: number;
}

export interface DevicesTypes {
  id: number;
  title: string | null;
  price: number;
  image: string;
  rating?: RatingTypes;
  category?: string | null;
  description: string | null;
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

export interface stateProductFetchTypes {
  products: DevicesTypes | DevicesTypes[] | undefined;
  status: string;
}

export interface RootStateProduct {
  products: stateProductFetchTypes;
}
