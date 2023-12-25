"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { BeatLoader, } from "react-spinners";
import { ToastError, ToastSuccess } from "@/app/components/toasters/taoster";
import { CheckPassword, ValidateEmail } from '../../helpers/validation/validator'
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Auth, provider } from "@/app/firebase.config";
import { login } from "../../redux/userslice/userslice";
import { Button } from 'antd'
import { message } from "antd";
import theme from "../../../theme/themeConfig";
import { ConfigProvider } from "antd";
const Page = () => {


    useEffect(() => {
        setTimeout(() => {
            document.querySelector('#container').classList.remove('right-panel-active')
        }, 50)
    }, []);


    const router = useRouter();
    const [loading, setLoading] = useState(false);
    let dispatch = useDispatch();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });





    const GoogleSignin = async () => {
        await signInWithPopup(Auth, provider).then(async (result) => {
            if (result.user) {
                const data = {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    accessToken: result.user.accessToken,
                }
                const res = await axios.post('/api/users/sociallogin', data)
                if (res.status === 200) {
                    dispatch(login(response.data.user))
                    if(response.data.user.usertype == 'vendor'){
                        handlevendor(response)
                    }
                    message.open({
                        type:'success',
                        content:'LoggedIn Successfully',
                        onClose:() => router.push('/')
                    })
                    
                }
            }

        }).catch((error) => {
            message.open({
                type:'error',
                content:error,
            })
        })
    }





    const handlevendor = async (res) => {
        const response = await axios.get(`/api/Vendor/${res.data.user._id}`)
        console.log("data is",response)
        if(response.data.status == 200){
            console.log("rs",response.data.data[0]._id)
            const id = await localStorage.setItem('vendorid',response.data.data[0]._id)
        }
    }



    const onSubmit = async (e) => {
        console.log("lcikc")
        setLoading(true);
        e.preventDefault();
        try {
            if (user.email.length > 0 || user.password.length > 0) {
                if (ValidateEmail(user.email)) {
                    if ((CheckPassword(user.password))) {
                        const response = await axios.post("/api/users/login", user);
                        console.log("response",response.data)
                        if (response.data.status === 200) {
                            console.log("res", response.data.user)
                            dispatch(login(response.data.user))
                            if(response.data.user.usertype == 'vendor'){
                                handlevendor(response)
                            }
                            message.open({
                                type:'success',
                                content:'LoggedIn Successfully',
                                onClose:() => router.push('/')
                            })
                        }
                        else {
                            console.log("else condtiopn",response.data)
                            message.open({
                                type:'error',
                                content:response.data.error,
                            })
                        }
                    }
                    else {
                        message.open({
                            type:'error',
                            content:"Enter Valid Format Password",
                        })
                    }
                }
                else {

                    message.open({
                        type:'error',
                        content:"Enter Valid Format Password",
                    })

                }
            }

            else {
                message.open({
                    type:'error',
                    content:"Fill The Given Form",
                })
            }
        }

        catch (error) {
            message.open({
                type:'error',
                content:error,
            })
            
        } finally {
            setLoading(false);
        }
    };







    return (

        <>
            <ConfigProvider theme={theme}>
                <div className="main">
                    <div className="container right-panel-active custom-box-shadow" id="container">
                        <div className="form-container sign-in-container">
                            <form className="globolform w-3/4 mx-auto" action="#">
                                <h1 className="text-3xl mb-5">Sign in</h1>
                                <div onClick={GoogleSignin} className="flex flex-col w-full  pb-6 text-center bg-white">
                                    <a className="flex items-center justify-center w-full py-4 mb-1 text-sm font-medium transition duration-300 text-grey-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300">
                                        <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt = "googel sign in logo" />
                                        Sign in with Google
                                    </a>

                                </div>
                                <span className="text-lg mt-2 mb-5">or use your account</span>
                                <input type="email" placeholder="Email" value={user.email} onChange={(e) => {
                                    setUser({ ...user, email: e.target.value })
                                }} />
                                <input type="password" placeholder="Password" value={user.password} onChange={(e) => {
                                    setUser({ ...user, password: e.target.value })
                                }} />
                                <Link href={'/user/forgetpassword'} className="mt-5 mb-5" >Forgot your password?</Link>

                                <Button type="primary" className="custom-btn btn-15 h-10" style={{ paddingInline: "40px", height: "40px" }} onClick={onSubmit}
                                    disabled={false}>

                                    {loading ? <BeatLoader size={5} className={""} color={"white"} /> : "Sign In"}</Button>
                                {/* <Link href={'/user/signup'} className="text-md mt-2 mb-5">SignUp</Link> */}
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1 className="text-3xl text-white	">Welcome Back!</h1>
                                    <p>To keep connected with us please login with your personal info</p>
                                    <Button type="primary" className="ghost custom-btn btn-15" id="signIn" style={{ paddingInline: "40px", height: "40px" }}>Sign In</Button>
                                </div>
                                <div className="overlay-panel overlay-right space-y-4">
                                    <h1 className="text-3xl text-white	">Hello, Friend!</h1>
                                    <p className=" text-white">Enter your personal details and start journey with us</p>

                                    <Link href='/user/signup' className='md:block hidden'>
                                        <Button className='border-mainColor' style={{ borderColor: "#d5af80", color: 'var(--mainColor)', paddingInline: "40px", height: "40px" }}  >Sign Up</Button>

                                    </Link> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ConfigProvider>
        </>
    );
};
export default Page;