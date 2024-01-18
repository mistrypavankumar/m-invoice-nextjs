import React, { useState } from "react";
import { MdPerson, MdFolder } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { menus } from "./constants";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxRLine, RiSettings4Line } from "react-icons/ri";

import { useAlert } from "react-alert";
import CustomeIcon from "./CustomeIcon";
import store from "../../../store";
import { logout } from "../../../actions/userAction";

// IoMdFolderOpen

const SideNavbar = ({ companyName }) => {
  const alert = useAlert();
  const navigate = useNavigate();

  const [toggle, setToggle] = useState(false);

  const [isActive, setIsActive] = useState(window.location.pathname);

  const logoutUser = () => {
    store.dispatch(logout());
    alert.success("Logout Successfully");
  };

  return (
    <div
      className={`${
        toggle ? "w-[210px]" : "w-[60px]"
      } h-screen transition-all duration-500 bg-primaryDarkBlue overflow-hidden z-50 left-0 bottom-0 fixed`}
    >
      <div className="flex justify-center items-center gap-x-2 overflow-hidden pb-3 border-b-2 border-green-500 border-opacity-20 w-[95%] mx-auto  mt-10">
        <div
          onClick={() => setToggle(!toggle)}
          className="w-[40px] h-[40px] flex justify-center items-center border-2 border-green-500 cursor-pointer bg-primaryBlue rounded-full"
        >
          {<MdPerson className="text-white text-3xl" />}
        </div>

        <p
          className={`text-white text-sm ${
            toggle ? "line-clamp-1" : "hidden"
          } transition-all duration-500 `}
        >
          {companyName && companyName}
        </p>
      </div>

      <div className="w-[100%] mt-3 h-[80%] mx-auto flex flex-col">
        {menus.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex items-center gap-x-2 ${
                isActive === item.path ? "text-green-500" : "text-white"
              } px-4 py-2 hover:bg-white/20 hover:text-green-500 transition-all duration-200 cursor-pointer ${
                isActive === item.path ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => {
                setIsActive(item.path);
                navigate(item.path, { replace: true });
              }}
            >
              {isActive === item.path ? (
                <CustomeIcon path={item.path} Icon={item.icons[1]} />
              ) : (
                <CustomeIcon path={item.path} Icon={item.icons[0]} />
              )}

              <Link
                className={`${
                  toggle ? "line-clamp-1" : "hidden"
                } transition-all duration-500 `}
                to={item.path}
              >
                {item.menu}
              </Link>
            </div>
          );
        })}

        <div className="absolute bottom-5 flex justify-center flex-col gap-y-2 text-white pt-2 border-t-2 border-green-500/20 w-full">
          <div
            onClick={() => navigate("/settings", { replace: true })}
            className={`flex items-center gap-x-2 cursor-pointer px-4 py-2 hover:bg-white/20 ${
              isActive === "/settings" ? "text-green-500" : "text-white"
            } px-4 py-2 hover:bg-white/20 hover:text-green-500 transition-all duration-200 cursor-pointer ${
              isActive === "/settings" ? "bg-white" : "bg-transparent"
            }`}
          >
            {isActive === "/settings" ? (
              <CustomeIcon path="/settings" Icon={IoMdSettings} />
            ) : (
              <CustomeIcon path={"/settings"} Icon={RiSettings4Line} />
            )}
            <p
              className={`text-white text-sm ${
                toggle ? "line-clamp-1" : "hidden"
              } transition-all duration-500 `}
            >
              Settings
            </p>
          </div>

          <div
            onClick={logoutUser}
            className="flex items-center gap-x-2 cursor-pointer px-4 py-2 hover:bg-white/20"
          >
            <CustomeIcon Icon={RiLogoutBoxRLine} />{" "}
            <p
              className={`text-white text-sm ${
                toggle ? "line-clamp-1" : "hidden"
              } transition-all duration-500 `}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
