"use client";

import Loader from "@/components/Loader/Loader";
import AnimatedFormField from "@/components/login/AnimatedFormField";
import Link from "next/link";
import { useState } from "react";

const register = () => {
  const loading = false;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerSubmit = () => {};

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full h-[80vh] flex justify-center items-center">
            <div className=" w-full flex align-center justify-center">
              <form
                className="w-[90%] md:w-[35%] px-4 pt-8 pb-5 mx-auto shadow-md h-auto rounded-md"
                onSubmit={registerSubmit}
                encType="form-data"
              >
                <h1 className="text-2xl mb-10 font-bold text-primaryDarkBlue">
                  Sign Up
                </h1>
                <AnimatedFormField
                  value={name}
                  setOnChangeValue={() => {}}
                  inputType="text"
                  labelName="Name"
                />
                <AnimatedFormField
                  value={email}
                  setOnChangeValue={() => {}}
                  inputType="email"
                  labelName="Email"
                />
                <AnimatedFormField
                  value={password}
                  setOnChangeValue={() => {}}
                  inputType="password"
                  labelName="Password"
                />
                <AnimatedFormField
                  value={confirmPassword}
                  setOnChangeValue={() => {}}
                  inputType="password"
                  labelName="Confirm Password"
                />

                <input
                  type="submit"
                  value="Sign Up"
                  className="scaleable-btn w-[100px]"
                />

                <p className="text-slate-600 flex mt-5">
                  Already have an account?
                  <span className="text-green-500 underline ml-2 block cursor-pointer">
                    {" "}
                    <Link href="/login">Login</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default register;
