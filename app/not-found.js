"use client"
import Link from 'next/link'
import Image from 'next/image'

import { Button, ConfigProvider } from "antd";

import theme from "@/theme/themeConfig";
export default function NotFound() {
    return (

        <ConfigProvider theme={theme}>
        <div className='flex h-screen mx-auto'>
            <div className="flex flex-col h-full items-center justify-center w-1/2 gap-10">
                <h1 className='text-8xl font-semibold border-b-8 border-mainColor'>404</h1>
                <p className='text-3xl font-medium'>Not Found</p>
                <Link href='/' className='md:block hidden'>
                    <Button type="primary" style={{width:'100px'}}>Home</Button>

                </Link>
            </div>
            <div className="flex w-2/5">
                <Image src={'/assets/images/roboto-404.png'} width={456} height={356} alt='404-roboto' style={{ width: "100%", height: "100%", objectFit: "contain" }}></Image>

            </div>
        </div>
        </ConfigProvider>
    )
}