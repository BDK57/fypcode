import React from 'react'
import { Image } from 'antd';

const ImageCollage = ({dataimage=[]}) => {
  console.log("image ",dataimage)
  return (
    <>
    {/* { */}
      {/* // galleryImage.length > 0 ?  ( */}
        <Image.PreviewGroup>
      <div className='flex flex-col justify-center items-center p-2  bg-[#f5f5f5f5] rounded-md border border-[#a9a9a9] box-border cursor-pointer' >
        <div className='overflow-hidden imageViewPortionOne w-full'>
          <Image
            style={{ height: "320px", objectFit: "cover", width: "100%" }}
            alt='single image'
            src={dataimage[0].url}
            preview={
              false
            }
          />

        </div>

        <div className='h-36  flex md:justify-between  gap-1'>
          
          {
          
          dataimage.map((e, i) => {
            if (i <= 6) {
              return (
                i == 6 ? <Image key={Math.random() * i + "ImageCollage"}
                  style={{ height: "100%" }}
                  className='h-full w-full object-cover overflow-hidden customPreveiwImage'
                  src={e.url}
                  alt='single image'
                  preview={{
                    maskClassName: "customMask",
                    visible: true,
                    mask: `+${dataimage.length - 6}`,
                  }}
                /> : i > 0 ?
                  <Image key={Math.random() * i + "ImageCollage"}
                    style={{ height: "100%" }}
                    className='h-full w-full object-cover overflow-hidden'
                    src={e.url}
                    alt='single image'

                  /> : ""


              )
            }
          })}


        </div>
      </div>
    </Image.PreviewGroup>
      {/* ):(null) */}
    {/* } */}
    </>
    
  )
}

export default ImageCollage