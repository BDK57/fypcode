'use client';
import React, { useState , useEffect} from 'react'
import BookingSection from '../../components/bookingSection/BookingSection'
import { GET_SINGLEHALL } from '@/app/apiFetch/getApi';
const page = ({params}) => {

  
  const[halldata,setHalldata] = useState('')
  useEffect(() => {
    getall();
  },[])
  
  const getall = async () => {
    const data = await GET_SINGLEHALL(`/api/Vendor/Hall/${params.id}`)
    console.log("single hall data is",data)
    setHalldata(data)
  }

  return (
    <>
    <BookingSection data = {halldata}/>

    </>
  )
}

export default page