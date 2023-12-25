import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, List, Space } from "antd";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { Button } from "antd";

const poppins = Poppins({ weight: "400", subsets: ["latin"] })


const TablePagination = ({ pageSize = 5, isdashboard = false, banquetdata, showDeleteConfirm , editModal }) => {
  // const [Sponsored, setSponsored] = useState(true)
  return (
    <List
      itemLayout="vertical"
      style={{
        fontFamily: "'_Poppins_8c1529', '_Poppins_Fallback_8c1529' !important"
      }}
      size="large"
      className="table-menu"
      pagination={{
        // onChange: (page) => {
        //   console.log(page);
        // },
        pageSize: pageSize,
      }}
      dataSource={banquetdata}
      // footer={
      //   <div>
      //     <b>ant design</b> footer part
      //   </div>
      // }
      renderItem={(item, index) => {
        return (
          <div className="flex flex-col justify-start px-5 ">
            <div className="cards overflow-hidden  relative flex flex-col  md:flex-row md:space-x-5 space-y-3 md:space-y-0 md:my-5 rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl mx-auto border border-white bg-white"

            >
              <div className="w-full  bg-white grid place-items-center md:w-2/5 max-w-2/5 object-cover overflow-hidden max-h-80 rounded-xl">
                <Link href={`/banquet/${item._id}`}>

                  <img
                    src={item.galleryImage[0].url}
                    alt="tailwind logo"
                    className="rounded-xl"
                  />
                </Link>

              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center">

                  <div className="flex justify-between gap-1 items-center">
                    <p className="text-gray-500 font-medium hidden md:block">
                      {item.type}
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                    Sponsored
                  </div>
                </div>
                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  {item.name}
                </h3>
                <div className="flex items-center">
                  <Image
                    src={"assets/images/map.svg"}
                    width={18}
                    height={18}
                    alt="map-logo"
                  ></Image>
                  <p className="text-gray-600 font-bold text-sm ml-2">
                    <span className="text-gray-500 font-normal">
                      {item.location}
                    </span>
                    {item.city}
                  </p>
                </div>
                <p style={{
                  width: '100%',
                  height: '80px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }} className="md:text-lg text-gray-500 text-base">
                  {item.Description}
                </p>
                {/* <p className="text-lg font-black text-gray-800">
                  Starting at {item.priceRange.from}
                  <span className="font-normal text-gray-600 text-base">
                    {item.priceRange.to}
                  </span>
                </p> */}
              </div>
              {
                isdashboard && <div className="absolute inset-0 overlay-card  w-full h-full top-0  cursor-pointer rounded-xl  z-[9999] flex m-0 justify-center items-center gap-4" style={{


                  backgroundColor: 'rgba(0,0,0,0.2)',
                  margin: "0"

                }}>
                <Button onClick={() => editModal(item)} className='"bg-mainColor text-white rounded-lg text-lg' style={{ paddingBlock: '0rem', paddingInline: "1rem", borderColor: "var(--secColor-800)", color: "white", backgroundColor: 'var(--secColor)', width: '100px' }} >Edit</Button>


                  <Button onClick={() => showDeleteConfirm(item)} className='"bg-mainColor text-white rounded-lg text-lg' style={{ paddingBlock: '0rem', paddingInline: "1rem", borderColor: "var(--secColor-800)", color: "white", backgroundColor: 'var(--secColor)', width: '100px' }} >Remove</Button>

                </div>
              }

            </div>
          </div>
        )

      }}
    />
  );
};

export default TablePagination;