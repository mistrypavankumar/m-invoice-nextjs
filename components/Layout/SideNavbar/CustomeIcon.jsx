import React from "react";
import { Link } from "react-router-dom";

const CustomeIcon = ({ path, Icon }) => {
  return (
    <Link to={path ? path : "/#"}>
      <Icon className="text-2xl text-green-500" />
    </Link>
  );
};

export default CustomeIcon;
