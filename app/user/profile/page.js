'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ToastSuccess } from '../components/toasters/taoster';
const page = () => {
    const router = useRouter()
    const [data, setdata] = useState("second")
    const getCurrentUserDetails = async () => {
        const res = await axios.get('/api/users/currentUser');
         console.log(res.data.data)
        setdata(res.data.data)
        // console.log(data.data._id)
    }

    const logout = async () => {
        try {

            const res = await axios.get("/api/users/logout")
            console.log("res" + res)
            ToastSuccess('Logout Successfully')
            router.push('/login')

        } catch (error) {
            ToastError("Error: " + error.response.data.error)
            // toast.error(error.message)
        }
    }
    return (
        <>
            <div className='bg flex justify-center items-center flex-col gap-5'>
                <h1 className='text-9xl'>Profile page</h1>
                <h2 className='text-3xl text-bold mt-5'>
                    {data == "second" ? "User Profile ID" : <Link className='text-3xl text-bold' href={`/profile/${data._id}`}>{`User Profile ID:\t`}
                        <span className='text-3xl text-bold border-b-4 border-white mx-3' >{`${JSON.stringify(data?._id)}`}
                        </span>
                    </Link>}
                </h2>
                <div className='flex justify-between items-center gap-5'>
                    <button className="custom-btn btn-15" id="signIn" onClick={getCurrentUserDetails}>See Profile</button>
                    <button className="custom-btn btn-15 " onClick={logout}>Log Out</button>
                </div>
            </div>



        </>
    )
}

export default page