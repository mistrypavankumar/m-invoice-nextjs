"use client";

import Loader from "@/components/Loader/Loader";
import AnimatedFormField from "@/components/login/AnimatedFormField";
import axios from "axios";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react";

const Register: React.FC = () => {
  const loading = false;
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [error_message, setError_message] = useState("");

  const registerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };
    try {
      const res = await axios.post("/api/v1/auth/register", user);

      if (res.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      setError_message("Registration failed");
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full h-[80vh] flex justify-center items-center">
            <div className="w-full flex align-center justify-center">
              <form
                onSubmit={registerSubmit}
                className="w-[90%] md:w-[35%] px-4 pt-8 pb-5 mx-auto shadow-md h-auto rounded-md"
              >
                <h1 className="text-2xl mb-10 font-bold text-primaryDarkBlue">
                  Sign Up
                </h1>
                {error_message && (
                  <div
                    className="relative group mb-10 bg-red-300/30 rounded-md h-10 px-3"
                    onClick={() => setError_message("")}
                  >
                    <p className="text-red-500 absolute left-5 top-1/2 -translate-y-1/2">
                      {error_message}
                    </p>
                    <X
                      size={20}
                      className="text-red-600/50 cursor-pointer group-hover:text-red-600 duration-300 absolute right-5 top-1/2 -translate-y-1/2"
                    />
                  </div>
                )}

                <AnimatedFormField
                  value={name}
                  setOnChangeValue={(
                    e: React.ChangeEvent<HTMLInputElement>
                  ) => {
                    setName(e.target.value);
                  }}
                  inputType="text"
                  labelName="Name"
                />
                <AnimatedFormField
                  value={email}
                  setOnChangeValue={(
                    e: React.ChangeEvent<HTMLInputElement>
                  ) => {
                    setEmail(e.target.value);
                  }}
                  inputType="email"
                  labelName="Email"
                />
                <AnimatedFormField
                  value={password}
                  setOnChangeValue={(
                    e: React.ChangeEvent<HTMLInputElement>
                  ) => {
                    setPassword(e.target.value);
                  }}
                  inputType="password"
                  labelName="Password"
                />
                <AnimatedFormField
                  value={confirmPassword}
                  setOnChangeValue={(
                    e: React.ChangeEvent<HTMLInputElement>
                  ) => {
                    setConfirmPassword(e.target.value);
                  }}
                  inputType="password"
                  labelName="Confirm Password"
                />

                <button type="submit" className="scaleable-btn w-[100px]">
                  Sign Up
                </button>

                <p className="text-slate-600 flex mt-5">
                  Already have an account?
                  <span className="text-green-500 underline ml-2 block cursor-pointer">
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

export default Register;
