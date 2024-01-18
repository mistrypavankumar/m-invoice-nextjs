import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title, reverse }) => {
  return (
    <Helmet>
      {reverse ? (
        <title>{title ? `${title} | Mg-Invoice tool` : "Mg-Invoice"}</title>
      ) : (
        <title>{title ? `Mg-Invoice | ${title}` : "Mg-Invoice"}</title>
      )}
    </Helmet>
  );
};

export default MetaData;
