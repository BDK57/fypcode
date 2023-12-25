"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserDashBoard from "../components/user/UserDashBoard";
import VendorDash from "../components/Vendor/VendorDash";
const page = () => {


    const userdata = useSelector((state) => state.user);
    return (
        <>
            {userdata?.userdata?.usertype === 'user' && <UserDashBoard />}
            {userdata?.userdata?.usertype === 'vendor' && <VendorDash />}
        </>
    );
};

export default page;