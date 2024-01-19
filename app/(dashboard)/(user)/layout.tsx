"use client";

import { verifyAuthToken } from "@/lib/actions/user.action";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const router = useRouter();
  const userId = params.id;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`/api/v1/user/${userId}`);

        if (res.data._id == userId) {
          router.push(`/dashboard/${userId}`);
        } else {
          router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserData();
  }, []);

  return <div>{children}</div>;
};

export default Layout;
