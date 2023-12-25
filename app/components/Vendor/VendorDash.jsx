import React from 'react'
import Sidebar from './Sidebar/Sidebar';

import { ConfigProvider } from "antd";

import theme from "@/theme/themeConfig";
const VendorDash = () => {
  return (
    <ConfigProvider theme={theme}>
      <Sidebar/>
      </ConfigProvider>
  )
}

export default VendorDash
