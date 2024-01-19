"use client";

import { FormEvent, useReducer, useState } from "react";

import Loader from "@/components/Loader/Loader";
import AnimatedFormField from "@/components/login/AnimatedFormField";
import Link from "next/link";
import axios from "axios";

import { useRouter } from "next/navigation";

const Login = () => {
  const loading = false;
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginCredential = {
      email,
      password,
    };

    try {
      const response = await axios.post("/api/v1/auth/login", loginCredential);

      if (response.status === 200) {
        router.push(`/dashboard/${response.data.user._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full h-[80vh] flex justify-center items-center">
            <div className=" w-full flex align-center justify-center">
              <form
                className="w-[90%] md:w-[35%] px-4 pt-10 pb-5 mx-auto shadow-md h-auto rounded-md"
                onSubmit={handleLogin}
              >
                <h1 className="text-2xl mb-10 font-bold text-primaryDarkBlue">
                  Login
                </h1>
                <AnimatedFormField
                  value={email}
                  setOnChangeValue={(e) => {
                    setEmail(e.target.value);
                  }}
                  inputType="email"
                  labelName="Email"
                />
                <AnimatedFormField
                  value={password}
                  setOnChangeValue={(e) => {
                    setPassword(e.target.value);
                  }}
                  inputType="password"
                  labelName="Password"
                />

                <p className="text-green-500">
                  <Link href="/forgot-password">Forgot Password ?</Link>
                </p>

                <input
                  type="submit"
                  value="Login"
                  className="scaleable-btn w-[100px]"
                />

                <p className="text-slate-600 flex mt-5">
                  New to M-Invoice ?
                  <span className="text-green-500 underline ml-2 block cursor-pointer">
                    {" "}
                    <Link href="/register">Sign Up</Link>
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

export default Login;
