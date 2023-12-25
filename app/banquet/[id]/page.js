'use client';
import React, { useEffect, useState } from 'react'
import TabSection from '../../components/category/TabSection'
import { GET_SINGLEHALL } from '../../apiFetch/getApi';
const page = ({params}) => {
  
  const[date,setdate] = useState('')
  useEffect(() => {
    getall();
  },[])
  
  const getall = async () => {
    const data = await GET_SINGLEHALL(`/api/Vendor/Hall/${params.id}`)
    console.log("single hall data is",data)
    setdate(data)
  }


  return (
    <>
     {
      date !== '' > 0 ?  <TabSection data={date}/> : (null)
     }
     
    </>
  )
}

export default page