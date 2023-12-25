"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BeatLoader, BounceLoader, BarLoader, RingLoader } from "react-spinners";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { ToastError, ToastSuccess } from "@/app/components/toasters/taoster";
import { CheckPassword, ValidateEmail } from '../../helpers/validation/validator'
import { Button, ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";


const Page = () => {


    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        isVerified: false,
        isAdmin: false,
    });


    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            if (
                user.email.length > 0 &&
                user.password.length > 0 ||
                user.username.length > 0
            ) {
                console.log(CheckPassword(user.password))
                if (ValidateEmail(user.email)) {

                    if ((CheckPassword(user.password))) {
                        const response = await axios.post("/api/users/signup", user);
                        console.log("res", response.data)
                        if (response.data.status === 200) {
                            router.push("/user/login");
                            ToastSuccess(response.data.message)
                        }
                        else {
                            ToastSuccess(response.data.error)
                        }
                    }
                    else {

                        ToastError("Enter Valid Format Password")
                    }
                }
                else {

                    ToastError("Please Enter Valid Email Address")
                }
            }

            else {
                ToastError("Fill The Given Form")
            }


        } catch (error) {
            ToastError("Error: " + error.response.data.error)

        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        setTimeout(() => {
            container.classList.add('right-panel-active')
        }, 200)
    }, []);


    return (
        <>
            <ConfigProvider theme={theme}>
                <div className="main">
                    <div className="container custom-box-shadow" id="container">
                        <div className="form-container sign-up-container">
                            <form className="globolform" action="#">
                                <h1 className="text-3xl mb-5">Create Account</h1>

                                <input type={"text"}
                                    id={"username"}
                                    placeholder={"Username"}
                                    style={{ textTransform: 'capitalize' }}
                                    value={user.username}
                                    onChange={(e) => setUser({ ...user, username: e.target.value })} />
                                <input type={"email"}
                                    id={"email"}
                                    placeholder={"Email"}
                                    value={user.email}
                                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                <input type={"password"}
                                    id={"password"}
                                    placeholder={"Password"}
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })} />


                                <Button type="primary" className="custom-btn btn-15 h-10  mt-5" onClick={onSubmit}
                                    disabled={false} style={{ paddingInline: "40px", height: "40px" }}>

                                    {loading ? <BeatLoader size={5} className={""} color={"white"} /> : "Sign Up"}</Button>

                                <Link className={"text-sm my-2 mt-5"} href={"/user/login"}>
                                    Already have an account? Login
                                </Link>
                            </form>
                        </div>
                        <div className="form-container sign-in-container">
                            <form className="globolform w-3/4 mx-auto" action="#">
                                <h1 className="text-3xl mb-5">Sign in</h1>
                                <div className="flex flex-col w-full  pb-6 text-center bg-white">
                                    <a className="flex items-center justify-center w-full py-4 mb-1 text-sm font-medium transition duration-300 text-grey-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300">
                                        <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt />
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
                                <div className="overlay-panel overlay-left space-y-4">
                                    <h1 className="text-white text-3xl">Welcome Back!</h1>
                                    <p className="text-white">To keep connected with us please login with your personal info</p>

                                    <Link href='/user/login' className='md:block hidden'>
      <Button  className='border-mainColor' style={{borderColor:"#d5af80", color:'var(--mainColor)' ,paddingInline: "40px", height: "40px" }}  >Sign In</Button>
      
      </Link>

                                </div>
                                <div className="overlay-panel overlay-right">
                                    {/* <h1 className="text-3xl">Hello, Friend!</h1> */}
                                    {/* <p>Enter your personal details and start journey with us</p> */}
                                    <button className="ghost custom-btn btn-15" id="signUp">Sign Up</button>
                                </div>
                            </div>
                        </div>
                        <Toaster />
                    </div>
                </div>
            </ConfigProvider>
        </>
    );
};
export default Page