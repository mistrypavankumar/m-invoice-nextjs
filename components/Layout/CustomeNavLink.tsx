import Link from "next/link";
import React from "react";

type CustomeNavLinkProps = {
  menuName: string;
  pathName: string;
  path: string;
};

const CustomeNavLink = ({ menuName, pathName, path }: CustomeNavLinkProps) => {
  return (
    <Link
      href={path}
      className={` font-semibold px-5 py-2 transition-color hover:scale-105 hover:text-primaryDarkBlue transition-all duration-500 ${
        path === pathName
          ? "border-b-[3px]  text-primaryDarkBlue border-green-500 "
          : "text-gray-500"
      }`}
    >
      {menuName}
    </Link>
  );
};

export default CustomeNavLink;
