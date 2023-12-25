"use client";
import React, { useEffect, useState } from "react";
import { Divider } from "antd";
import { ConfigProvider } from "antd";

import theme from "../../../theme/themeConfig";
import AccordianCheckBox from "../microCompoments/AccordianCheckBox";
import AccordianSwitch from "../microCompoments/AccordianSwitch";
import TablePagination from "../microCompoments/TablePagination";
import { GetHalls } from "../../apiFetch/getApi";
const HeroSection = () => {

  
  const[banquethall , setBanquetHalls] = useState([]);
  
  useEffect(() => {
    GetAllHalls();
  },[])

  const GetAllHalls = async () => {
    const data = await GetHalls('/api/Vendor/Hall');
    setBanquetHalls(data)
}

  
  
  const onChange = (values) => {
  }
  

  return (
    <ConfigProvider theme={theme}>
      <div className="container mx-auto px-5">
        <div className="mainSection flex flex-col lg:flex-row">
          <div className="w-100 lg:w-3/12">
            <p className="text-xl capitalize text-paraColor">filter</p>

            <Divider className="bg-gray-300" style={{ marginTop: "0.5rem" }} />

            <AccordianCheckBox
              title="City"
              options={[
                {
                  label: "Karachi",
                  value: "karachi",
                },
                {
                  label: "Lahore",
                  value: "lahore",
                },
                {
                  label: "Islamabad",
                  value: "islamabad",
                },
              ]}
            />

            <AccordianCheckBox
              title="Budget (per person)"
              options={[
                {
                  label: "0 - 1400",
                  value: "0-1400",
                },
                {
                  label: "1401 - 1800",
                  value: "1401-1800",
                },
                {
                  label: "1801 - 2400",
                  value: "1801-2400",
                },
                {
                  label: "2401 - 3500",
                  value: "2401-3500",
                },
                {
                  label: "3501 - 4500",
                  value: "3501-4500",
                },
              ]}
            />

            <AccordianSwitch banquethall={banquethall} setBanquetHalls={setBanquetHalls}  title="Parking Space"  />


            <AccordianCheckBox
              title="Type"
              
              
              options={[
                {
                  label: "Hall",
                  value: "hall",
                },
                {
                  label: "Marquee/Banquet",
                  value: "Marquee-Banquet",
                },
                {
                  label: "Outdoor",
                  value: "Outdoor",
                },
                {
                  label: "Other",
                  value: "Other",
                },
              ]}
            />

            <AccordianCheckBox
              
              title="Capacity"
              options={[
                {
                  label: "0 - 1400",
                  value: "0-1400",
                },
                {
                  label: "1401 - 1800",
                  value: "1401-1800",
                },
                {
                  label: "1801 - 2400",
                  value: "1801-2400",
                },
                {
                  label: "2401 - 3500",
                  value: "2401-3500",
                },
                {
                  label: "3501 - 4500",
                  value: "3501-4500",
                },
              ]}
            />

            <AccordianCheckBox 
              
              title="Staff"
              options={[
                {
                  label: "Male",
                  value: "male",
                },
                {
                  label: "Female",
                  value: "female",
                },
                
              ]}
            />

           
          </div>

          <div className="w-100 lg:w-4/5">
            <TablePagination banquetdata={banquethall} />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default HeroSection;
