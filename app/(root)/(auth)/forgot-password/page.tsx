"use client";

import AnimatedFormField from "@/components/login/AnimatedFormField";
import Link from "next/link";
import { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {};

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className=" w-full flex align-center justify-center">
        <form
          onSubmit={handleForgotPassword}
          className="w-[90%] md:w-[35%] px-4 pt-10 pb-5 mx-auto shadow-md h-auto rounded-md"
        >
          <div className="mb-10">
            <h1 className="text-2xl font-bold text-primaryDarkBlue">
              Forgot Password
            </h1>
            <p>
              Please enter you email to reset your password. If not{" "}
              <Link
                href={"/login"}
                className="font-semibold underline text-green-500"
              >
                Login
              </Link>
            </p>
          </div>
          <AnimatedFormField
            inputType="email"
            labelName="Email"
            value={email}
            setOnChangeValue={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="submit"
            value="Send"
            className="scaleable-btn w-[100px]"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
