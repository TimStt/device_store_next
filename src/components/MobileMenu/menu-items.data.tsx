import { CircleUserRound, Home, ShoppingBasket } from "lucide-react";

export const menu_mobil = [
  {
    href: "/",
    text: "Главная",
    icon: <Home color="#9B9B9B" size={26} />,
  },
  {
    href: "/basket",
    text: "Корзина",
    icon: <ShoppingBasket color="#9B9B9B" size={26} />,
  },
  {
    href: "/profile",
    text: "Профиль",
    icon: <CircleUserRound color="#9B9B9B" size={26} />,
  },
];
