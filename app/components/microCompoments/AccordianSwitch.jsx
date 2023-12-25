import { Button, Divider } from "antd";
import React, { useEffect } from "react";
import { Switch } from 'antd';
const AccordianSwitch = ({ title , banquethall , setBanquetHalls } ) => {

 
  return (
    <>
      <div className="group px-5">
        <div className="flex justify-between items-center font-medium ">
          <p className="text-paraColor font-semibold">
            {title}
          </p>
          <Switch  />
        </div>
      </div>
      <Divider className="bg-gray-300" />
    </>
  );
};

export default AccordianSwitch;
