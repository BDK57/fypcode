import React from "react";
import { ConfigProvider } from "antd";

import theme from "@/theme/themeConfig";
const DetailHeading = ({ title, paragrapgh }) => {
  return (
    <ConfigProvider theme={theme}>
      <div className="container mx-auto py-10 px-5 flex flex-col justify-between gap-3">
        <h1 className="text-3xl font-extrabold text-textColor capitalize">{title}</h1>
        <p  className="text-base font-extrabold text-paraColor ">
          Book the best wedding venues and marquees, in Islamabad, Lahore, and
          Karachi and the best wedding halls in Rawalpindi to host your wedding
          outside under the stars or in a gorgeous hall, with Shadiyana. Glance
          at their menus, halls, charges, and much more.
        </p>
      </div>
    </ConfigProvider>
  );
};

export default DetailHeading;
