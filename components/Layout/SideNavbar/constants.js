import {
  IoMdFolderOpen,
  IoMdFolder,
  IoMdSettings,
  IoSettingsOutline,
} from "react-icons/io";

import { RiDatabase2Fill, RiDatabase2Line } from "react-icons/ri";
import { BsFillPersonFill, BsPerson } from "react-icons/bs";

export const menus = [
  {
    menu: "Invoice",
    path: "/invoice",
    icons: [IoMdFolderOpen, IoMdFolder],
  },
  {
    menu: "Customers",
    path: "/customers",
    icons: [BsPerson, BsFillPersonFill],
  },
  {
    menu: "Products",
    path: "/products",
    icons: [RiDatabase2Line, RiDatabase2Fill],
  },
];
