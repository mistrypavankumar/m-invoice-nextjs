"use client";

import React, { useState } from "react";

// import Button from "../Button";
import CustomeNavLink from "./CustomeNavLink";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "../Button";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // need to change after connecting to backend
  const isAuthenticated = false;

  return (
    <div className="flex justify-between items-center w-[90%] h-[13vh] mx-auto z-20">
      <div className="w-1/3">
        <Link
          className="font-bold text-base sm:text-xl md:text-2xl text-primaryDarkBlue"
          href="/"
        >
          <span className="text-green-500">MG</span>-INVOICE
        </Link>
      </div>

      {/* center menu */}
      <div className="hidden w-full md:block justify-center items-center gap-x-7">
        <div className="flex justify-center items-center">
          <CustomeNavLink path="/" pathName={pathname} menuName="Home" />
          <CustomeNavLink path="/#" pathName={pathname} menuName="Invoicing" />
          <CustomeNavLink path="/#" pathName={pathname} menuName="Tools" />
        </div>
      </div>

      {/* right side */}
      <div className="flex justify-end w-1/2 xl:w-1/2">
        {isAuthenticated ? (
          <Button
            label="Dashboard"
            btnType="outline"
            customeStyle="mr-7"
            btnWidth={70}
            onClick={() => {
              router.push("/invoice");
            }}
          />
        ) : (
          <>
            <Button
              label="Login"
              btnType="outline"
              customeStyle="mr-7"
              btnWidth={70}
              onClick={() => {
                router.push("/login");
              }}
            />
            <Button
              label="Sign Up"
              btnWidth={70}
              onClick={() => {
                router.push("/register");
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
