"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
// import { ToastError, ToastSuccess } from "../components/toasters/taoster";
import { ToastError, ToastSuccess } from "@/app/components/toasters/taoster";
import { CheckPassword } from "@/helpers/validation/validator";
import axios from "axios";
const Page = ({ params }) => {
    console.log(params)
    const router = useRouter();
    const [user, setUser] = useState({
        password: "",
        confirmpassword: "",
    });
    const [loading, setLoading] = useState(false);


    const onSubmit = async (e) => {

        setLoading(true);
        e.preventDefault();

        try {
            if (user.password.length > 0) {
                if (CheckPassword(user.password)) {
                    if (user.confirmpassword == user.password) {
                        const res = await axios.put(`http://localhost:3000/api/users/resetpassword/${params.token}`, user)
                        if (res.status == 200) {
                            ToastSuccess(res.data.message)
                            router.push('/login')
                        }
                        else {
                            ToastSuccess(res.data.message)
                        }
                    }
                    else {
                        ToastError("password and confirm password doesnot match")
                    }
                }
                else {
                    ToastError("Password format is not valid")
                }
            }
            else {
                ToastError("Fill The Given Form")
            }
        }

        catch (error) {
            ToastError("Error: " + error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="main">
                <div className="forgetpassform">

                    <form action="#">
                        <h1 className="text-3xl mb-5">Reset Password</h1>
                        <input type="password" placeholder="Enter Password" value={user.password} onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }} />
                        <input type="password" placeholder="Enter Confirm Password" value={user.confirmpassword} onChange={(e) => {
                            setUser({ ...user, confirmpassword: e.target.value })
                        }} />
                        <button className="custom-btn btn-15 h-10 mt-5" onClick={onSubmit}>
                            {loading ? <BeatLoader size={5} className={""} color={"white"} /> : "Reset The Password"}</button>
                    </form>
                </div>
            </div>

        </>
    );
};
export default Page;