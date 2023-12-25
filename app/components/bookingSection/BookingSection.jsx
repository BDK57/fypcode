'use client'
import React, { useEffect, useState } from 'react'
import { ConfigProvider, message } from "antd";
import theme from "@/theme/themeConfig";
import Image from 'next/image';
import { InfoCircleOutlined, UserOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Input, Tooltip, TimePicker, Space } from 'antd';
import {
    Button,
    Form,
    Select,
} from 'antd';
import axios from "axios";
import { DatePicker, Radio } from 'antd';
import Link from 'next/link';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
import { useSelector } from 'react-redux';

const BookingSection = ({data}) => {
    const [placement, SetPlacement] = useState('bottomLeft');

    const placementChange = (e) => {
        SetPlacement(e.target.value);
    };

    const userdata = useSelector((state) => state.user);
    const [form] = Form.useForm();
    const { Option } = Select;
    const [bookinghistory, setBookingHistory] = useState([])
    const[phoneNumber,setPhoneNumber] = useState('')
    const[bookingname,setbookingname] = useState('')
    const[bookingDetails,setBookingDetails] = useState('');
   




    const disabledDate = (current) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return current && current < today;
    };




    useEffect(() => {
        getbooking();
    }, [])





    const getbooking = async () => {
        const response = await axios.get(`/api/booking/${data._id}`)
        console.log("all booking data is", response)
        if(response.data.status == 200){
            setBookingHistory(response.data.dates)

        }
        else{
            setBookingHistory([])
        }
    }


    const handleDateChange = (date, dateString) => {
        let count = 0;
        console.log("booking",bookinghistory)
        if(bookinghistory.length > 0){
            const checkdate = bookinghistory.map((item) => {
                const exactdate = item.date.split('T')[0];
                if (exactdate === dateString) {
                    count = count + 1;
                }
            })
        }
       
        if (count != 0) {
            message.open({
                type:'error',
                content:"This Hall has been Already booked for the Selected date"
            })
            count = 0;
        }
        else{
            setfinaldate(dateString)
        }

    };

    const hanldeformDetails = async (id) => {
          if(id == 1) {
            if(!finaldate){
                message.open({
                    type:'error',
                    content:'Please Select An Event Date'
                })
                return false;
            }
            if(!bookingname){
                message.open({
                    type:'error',
                    content:'Please Select Booking name'
                })
                return false;
            }
            if(!phoneNumber){
                message.open({
                    type:'error',
                    content:'Please Enter Your PhonNUmber'
                })
                return false;
            }
            SetStep({ step1: false, step2: true, step3: false,step4:false,step5:false})
          }
          
          if(id==2){
            SetStep({ step1: false, step2: false, step3: true,})
          }
          if(id == 3){
            if(userdata.isAuthenticated == true){
                const newdate = new Date(finaldate)
                console.log(newdate.toISOString())
                const datatosend = {
                    hallId:data._id,
                    userId:userdata.userdata._id,
                    date:newdate.toISOString(),
                    eventType:bookingname,
                    capacity: 800,
                    description: bookinghistory,
                  }
                const response = await axios.post(`/api/booking/${data._id}`,datatosend)
                console.log("response is",response.data)
                if(response.data.status == 200){
                    message.open({
                        type:'success',
                        content:response.data.message,
                    })
                    SetStep({step1:false,step2:false,step3:false,step4:true})
                }
                else{
                    message.open({
                        type:'error',
                        content:response.data.error
                    })
                }
            }
            else{
                message.open({
                    type:'error',
                    content:"You must Logged in in order to authenticate"
                })
            }
            
            }
           
    }

    const [finaldate, setfinaldate] = useState('')



    const [Step, SetStep] = useState({
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        step5:false,
    })

    return (

        <ConfigProvider theme={theme}>
            <div className="container w-full relative">
                <div className="flex h-full justify-between ">
                    <div className="flex  mt-5 w-7/12 flex-col justify-end items-center">

                        {/* <Image src="/assets/images/Footer_Logo.svg" alt='bg-pic' width={240} height={200} style={{
                            textAlign: "center"
                        }}
                        ></Image> */}
                        <Image src="/assets/images/booking_page_1.avif" alt='bg-pic' width={740} height={740} style={{
                            width: " 100%",
                            height: "auto"
                        }}></Image>
                    </div>
                    <div className="flex  w-2/3 p-16 flex-col relative">
                        <div className={`absolute top-5 flex flex-col w-5/6  ${Step.step1 === true ? "absolute" : "hidden"}`}>
                            <h1 className="text-lg font-extrabold text-textColor capitalize">Booking Details</h1>
                            <div className="w-2/3 flex justify-between flex-col gap-10 mt-5">
                                <div className="inputs h-7">
                                    <Input
                                        placeholder="Booking Name"
                                        value={bookingname}
                                        onChange={(e) => setbookingname(e.target.value)}
                                        required={true}
                                        style={{ height: "50px" }}
                                        suffix={
                                            <Tooltip title="Extra information">
                                                <InfoCircleOutlined
                                                    style={{
                                                        color: 'rgba(0,0,0,.45)',
                                                    }}
                                                />
                                            </Tooltip>
                                        }
                                    />
                                </div>
                                <div className="inputs h-7">
                                    <Input
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        placeholder="Phone number"
                                        type='number'
                                        style={{ height: "50px" }}
                                        suffix={
                                            <Tooltip title="Extra information">
                                                <InfoCircleOutlined
                                                    style={{
                                                        color: 'rgba(0,0,0,.45)',
                                                    }}
                                                />
                                            </Tooltip>
                                        }
                                    />
                                </div>




                                <DatePicker disabledDate={disabledDate} placement={placement} onChange={handleDateChange} />




                            </div>
                          
                            <div className="w-11/12 flex justify-end gap-4 items-center mt-8">
                                <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => hanldeformDetails(1)} >Next</Button>
                            </div>
                        </div>
                        
                        <div className={`absolute top-5 flex flex-col w-5/6  ${Step.step2 === true ? "absolute" : "hidden"}`}>
                            <h1 className="text-lg font-extrabold text-textColor capitalize">Extra Details</h1>
                            <div className="w-2/3 flex justify-between flex-col gap-10 mt-5">
                                <TextArea value={bookingDetails} onChange={(e) => setBookingDetails(e.target.value)} rows={10} placeholder="Type Your Extra Details Here" maxLength={6} />

                            </div>
                            <div className="flex w-full mt-5">


                            </div>
                            <div className="w-11/12 flex justify-end gap-4 items-center mt-8">
                                <Button className='border-mainColor' style={{ borderColor: "#d5af80", color: 'var(--mainColor)', width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                    SetStep({ step1: true, step2: false })
                                }}>Back</Button>
                                <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                    hanldeformDetails(2)
                                }}>Next</Button>

                            </div>
                        </div>

                        <div className={`absolute top-10 flex flex-col w-5/6   ${Step.step3 === true ? "absolute" : "hidden"}`}>
                        <div className="w-full flex justify-normal flex-col gap-10 mt-5 items-center" style={{ overflowY: "scroll", height: "22vw" }}>
                                <div className="w-full  grid grid-cols-2 gap-4 border-2 border-dashed border-secColor-800 py-5 px-6 rounded-xl" style={{ boxShadow: "rgba(60, 70, 85, 0.2) 0px 0px 6px 6px inset" }} >
                                    <div className="txt-bx space-y-1">
                                        <h2 className='font-semibold text-lg'>Booked  2 Vendor</h2>
                                        <p className='text-base'>{data.name}</p>
                                    </div>
                                    <div className="txt-bx space-y-1">
                                        <h2 className='font-semibold text-lg'>Contact Number</h2>
                                        <p className='text-base'>{phoneNumber}</p>
                                    </div>
                                    <div className="txt-bx space-y-1">
                                        <h2 className='font-semibold text-lg'>Booking Name</h2>
                                        <p className='text-base'>{bookingname}</p>
                                    </div>
                                    <div className="txt-bx space-y-1">
                                        <h2 className='font-semibold text-lg'>Selected Event Slot</h2>
                                        <p className='text-base'>{'Evening'}</p>

                                    </div>
                                    <div className="txt-bx space-y-1">
                                        <h2 className='font-semibold text-lg'>Selected Event Date</h2>

                                        <p className='text-base'>{finaldate}</p>
                                    </div>

                                </div>
                              
                            </div>

                            <div className="w-11/12 flex justify-end gap-4 items-center mt-8">
                                <Button className='border-mainColor' style={{ borderColor: "#d5af80", color: 'var(--mainColor)', width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                   SetStep({step1:false,step2:true,step3:false})
                                }}>Back</Button>
                                <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                   hanldeformDetails(3)
                                }}>Next</Button>

                            </div>

                        </div>

                        <div className={`absolute top-10 flex flex-col w-5/6  ${Step.step4 === true ? "absolute" : "hidden"}`}>
                            <div className="w-full flex justify-between flex-col gap-10 mt-5 items-center">
                                <CheckCircleOutlined style={{ fontSize: "10rem", color: "var(--mainColor)" }} />
                                <h1 className='text-4xl text-center'>Booking Request Received</h1>
                                <p className='text-2xl text-center'>Your Request Send to the Vendor he will Contact you as soon as possible</p>
                                <Link href={'/'}>
                                    <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }}>Home</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </ConfigProvider >
    )
}

export default BookingSection