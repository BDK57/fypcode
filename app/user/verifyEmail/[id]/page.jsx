"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { ToastSuccess, ToastError } from "@/app/components/toasters/taoster";
import axios from "axios";

const page = ({ params }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const verifyEmail = async () => {
        try {
            setLoading(true);

            const response = await axios.post(`/api/users/verifyEmail/${params.id}`);
            if (response.status === 200) {
                ToastSuccess(response.data.message);
                router.push("/user/login");
            } else {
                ToastError("Email verification failed");
            }
        } catch (error) {
            ToastError(`An error occurred during email verification: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main">
            <div className="forgetpassform" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 className="text-3xl mb-5">Email Verification</h1>
                <button className="custom-btn btn-15 h-10 mt-5" onClick={verifyEmail}>
                    {loading ? <BeatLoader size={5} className={""} color={"white"} /> : "Go To Login Page"}
                </button>
            </div>
        </div>
    );
};

export default page;