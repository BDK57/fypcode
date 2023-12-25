import Breadcrumb from "../breadcrumb/Breadcrumb"
// import Image from "next/image"
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Skeleton, Switch, Drawer, Image, Col, Statistic, Space, Select, Modal, message, Upload, Progress } from "antd";
import { ConfigProvider } from "antd";
import { Slider } from 'antd';
import theme from "@/theme/themeConfig";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const { Meta } = Card;
const { Option } = Select;
const { confirm } = Modal;
import "swiper/css";
import axios from "axios";
import TablePagination from '../../microCompoments/TablePagination'
import { GetHalls } from "../../../apiFetch/getApi";
import { ExclamationCircleFilled, CloseOutlined, CheckOutlined } from "@ant-design/icons";

const AddHalls = () => {

    const [imgLoading, setimgLoading] = useState(false);
    const [userhalls, setuserHalls] = useState([])
    const [sendGalleryimages, setsendGalleryimages] = useState([]);
    const [hall, setHall] = useState({
        name: "",
        description: "",
        location: "",
        vendorid: "",
        capacity: "",
        price: "",
        type: "",
        city: "",
        ParkingSpaceAvailiable: false,
        wheelchairAccessible: false,
        parkingSpace: 0,
        Catering: '',
        staffMembers: [],
        Amenities: [],
        additonalDescription: '',
    })




    useEffect(() => {
        GetHallsData();
    }, [])

    const GetHallsData = async () => {

        const data = await GetHalls('/api/Vendor/Hall');
        if (data) {
            const id = await localStorage.getItem('vendorid');
            console.log("vendor id", id);
            const newdata = data.filter((item) => item.vendorid === id);
            console.log("new data is", newdata);
            if (newdata.length !== 0) {
                setuserHalls(newdata)
                setLoading(false)
            }
            else {
                setuserHalls([])
                setLoading(false)
            }
        }
    }




    const [title, settitle] = useState('');



    const submithandle = async (e) => {
        e.preventDefault();
        console.log("file list", fileList)
        const id = await localStorage.getItem('vendorid');
        console.log("id", id)
        const data = {
            name: hall.name,
            Description: hall.description,
            additonalDescription: hall.additonalDescription,
            vendorid: id,
            capacity: hall.capacity,
            Price: hall.price,
            galleryImage: fileList,
            location: hall.location,
            Catering: hall.Catering,
            VenueType: hall.type,
            StaffMembers: hall.staffMembers,
            ParkingSpace: hall.parkingSpace,
            Amenities: hall.Amenities,
            ParkingSpaceAvailiable: hall.ParkingSpaceAvailiable,
            wheelchairAccessible: hall.wheelchairAccessible,
        }

        console.log("data is", data)

        const res = await axios.post('/api/Vendor/Hall/Add', data)

        if (res.data.status == 200) {
            confirm({
                title: 'Hall has been Added',
                icon: <CheckOutlined />,
                onOk() {
                    GetHallsData();
                    onCloseAddHalls();

                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        }
        else {
            message.open({
                type: 'error',
                content: 'hall has not been added'
            })
        }
    }


    const [open, setOpen] = useState(false);
    const [openAddHalls, setOpenAddHalls] = useState(false);

    const editModal = async (item) => {
        console.log("item is", item)
        settitle('Edit')
        setFileList([])
        setHall({
            name: item.name,
            Description: item.Description,
            additonalDescription: item.additonalDescription,
            vendorid: item.vendorid,
            capacity: item.capacity,
            Price: item.Price,
            galleryImage: item.galleryImage,
            location: item.location,
            Catering: item.Catering,
            type: item.VenueType,
            StaffMembers: item.StaffMembers,
            ParkingSpace: item.ParkingSpace,
            Amenities: item.Amenities,
            ParkingSpaceAvailiable: item.ParkingSpaceAvailiable,
            wheelchairAccessible: item.wheelchairAccessible,
        })
        item.galleryImage.map((item) => {
            setFileList(prevFileList => [...prevFileList, item])
        })
        setOpenAddHalls(true)
        const hallid = await localStorage.setItem("hallid", item._id);
    };


    const EditChanges = async (e) => {
        e.preventDefault();
        confirm({
            title: 'Confirm You Want to Save Changes',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            onOk() {
                const updatehall = async () => {
                    const data = {
                        name: hall.name,
                        Description: hall.description,
                        additonalDescription: hall.additonalDescription,
                        vendorid: hall.vendorid,
                        capacity: hall.capacity,
                        Price: hall.price,
                        galleryImage: fileList,
                        location: hall.location,
                        Catering: hall.Catering,
                        VenueType: hall.type,
                        StaffMembers: hall.staffMembers,
                        ParkingSpace: hall.parkingSpace,
                        Amenities: hall.Amenities,
                        ParkingSpaceAvailiable: hall.ParkingSpaceAvailiable,
                        wheelchairAccessible: hall.wheelchairAccessible,
                    }
                    const _id = await localStorage.getItem('hallid');
                    console.log("hall", _id)

                    const response = await axios.patch(`/api/Vendor/Hall/${_id}`, data)
                    console.log("reponse id", response)
                    if (response.data.status == 200) {
                        message.open({
                            type:'success',
                            content:'hall Has been Upated'
                        })
                        setOpenAddHalls(false)
                        GetHallsData();
                    }
                }
                updatehall();
            },
            onCancel() {


            },
        });
        e.preventDefault();
    }

    

    const showDrawerAddHalls = () => {
        settitle('Add Hall')
        setHall({
            name: "",
            description: "",
            location: "",
            vendorid: "",
            capacity: "",
            price: "",
            type: "",
            city: "",
            ParkingSpaceAvailiable: false,
            wheelchairAccessible: false,
            parkingSpace: 0,
            Catering: '',
            staffMembers: [],
            Amenities: [],
            additonalDescription: '',
        })

        setFileList([])
        setOpenAddHalls(true);
    };

    const onCloseAddHalls = () => {

        setHall({
            name: "",
            description: "",
            location: "",
            vendorid: "",
            capacity: "",
            price: "",
            type: "",
            city: "",
            ParkingSpaceAvailiable: false,
            wheelchairAccessible: false,
            parkingSpace: 0,
            Catering: '',
            staffMembers: [],
            Amenities: [],
        })




        setOpenAddHalls(false);
    };


    const [loading, setLoading] = useState(false);




    const showDeleteConfirm = async (item) => {
        console.log("item", item)
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            className: "custom_confirm_delete",
            onOk() {
                const handledelete = async () => {
                    console.log("item", item)
                    const res = await axios.delete(`/api/Vendor/Hall/${item._id}`)
                    console.log("res", res.data)
                    if (res.data.status == 200) {
                        GetHallsData();
                        message.open({
                            type: 'success',
                            content: 'Hall has been deleted'
                        })
                    }
                }
                handledelete();
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };




    const { Dragger } = Upload;
    const [fileList, setFileList] = useState([]);
    const [thumbnailIndex, setThumbnailIndex] = useState(-1);

    const maxImages = 15;
    const uploadProps = {
        multiple: true,
        fileList,
        beforeUpload: (file) => {

            if (fileList.length + 1 <= maxImages) {
                uploadImage(file)
            } else {
                message.warning(`You can only upload up to ${maxImages} images.`);
            }
            return false;
        },


    };

    const uploadImage = async (photo) => {
        console.log(photo)
        const data = new FormData()
        data.append('file', photo)
        data.append('upload_preset', 'wpquplfl')
        data.append("cloud_name", "dvfpc6w7x")
        await fetch("https://api.cloudinary.com/v1_1/dvfpc6w7x/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).
            then(data => {
                console.log("data iss", data)
                // setsendGalleryimages(prevFileList => [...prevFileList,data?.url])
                setFileList(prevFileList => [...prevFileList, data]);

            }).catch(err => {
                console.log("An Error Occured While Uploading")
            })
    }



    const handleRemove = (file) => {
        const updatedFileList = fileList.filter(item => item !== file);
        setFileList(updatedFileList);

        if (thumbnailIndex === fileList.indexOf(file)) {
            setThumbnailIndex(-1);
        }
    };


    const handleThumbnailClick = (index) => {
        if (thumbnailIndex === index) {
            setThumbnailIndex(-1);
        } else {
            setThumbnailIndex(index);
        }
    };

    const getTotalSize = () => {
        const totalBytes = fileList.reduce((total, file) => total + file.bytes, 0);
        const totalKB = totalBytes / 1024;
        return totalKB.toFixed(2);
    };

    return (
        <>
            <ConfigProvider theme={theme}>
                <Breadcrumb pageName="Add Halls" />

                <div className="overflow-hidden mx-5 rounded-xl   bg-white shadow-default  ">
                    <Button style={{ marginLeft: 20 }} type="primary" onClick={showDrawerAddHalls}>Add Halls</Button>
                    <TablePagination editModal={editModal} showDeleteConfirm={showDeleteConfirm} isdashboard={true} banquetdata={userhalls} pageSize={2} />


                </div>
                <Drawer
                    title={title}
                    width={720}
                    onClose={onCloseAddHalls}
                    open={openAddHalls}
                    styles={{
                        fontFamily: "'__Poppins_8c1529', '__Poppins_Fallback_8c1529'",
                        body: {
                            paddingBottom: 80,
                            fontFamily: "'__Poppins_8c1529', '__Poppins_Fallback_8c1529'"
                        },
                    }}
                >
                    <div className="flex items-center justify-center ">
                        <div className="mx-auto w-full max-w-[550px]">
                            <form action="#" method="POST" className="addHallForm text-start" onSubmit={title === 'Edit' ? EditChanges : submithandle} style={{ width: "100%" }}>
                                <div className="-mx-3 flex flex-wrap w-full">
                                    <div className="w-full px-3 sm:w-1/2 ">
                                        <div className="mb-5">
                                            <label htmlFor="hallname" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Hall Name
                                            </label>
                                            <input value={hall.name} onChange={(e) => setHall({ ...hall, name: e.target.value })} type="text" name="name" id="hallname" placeholder="Hallname" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">

                                            <label htmlFor="type" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Type
                                            </label>
                                            <Select
                                                value={hall.type}
                                                className="py-3 px-3 antSelector"
                                                placeholder="Select Type"
                                                style={{
                                                    width: '100%',
                                                    height: 50,
                                                    marginBlock: '7px',
                                                    borderRadius: '0.375rem'
                                                }}
                                                onChange={(item) => {
                                                    console.log("item", item)
                                                    setHall({ ...hall, type: item })
                                                }}
                                                options={[
                                                    {
                                                        value: 'hall',
                                                        label: 'Hall',
                                                    },
                                                    {
                                                        value: 'banquet',
                                                        label: 'Banquet',
                                                    },
                                                ]}
                                            />
                                            {/* <input onChange={handleChange} value={hall.location} type="text" name="location" id="Location" placeholder="Location" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" /> */}
                                        </div>
                                    </div>
                                </div>
                               

                                <div className="-mx-3 flex flex-wrap w-full">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">

                                            <label htmlFor="price" className="mb-3 block text-base font-medium text-[#07074D]">
                                                price
                                            </label>

                                            <input onChange={(e) => setHall({ ...hall, price: e.target.value })} value={hall.price} type="number" name="price" id="price" placeholder="price" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">

                                            <label htmlFor="Location" className="mb-3 block text-base font-medium text-[#07074D]">
                                                City
                                            </label>
                                            <Select
                                                value={hall.city}
                                                className="py-3 px-3 antSelector"
                                                placeholder="Select Type"
                                                style={{
                                                    width: '100%',
                                                    height: 50,
                                                    marginBlock: '7px',
                                                    borderRadius: '0.375rem'
                                                }}
                                                onChange={(item) => {
                                                    console.log("item", item)
                                                    setHall({ ...hall, city: item })
                                                }}
                                                options={[
                                                    {
                                                        value: 'karachi',
                                                        label: 'karachi',
                                                    },
                                                    {
                                                        value: 'lahore',
                                                        label: 'lahore',
                                                    },
                                                    {
                                                        value: 'islamabad',
                                                        label: 'islamabad',
                                                    },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 
                                    <div className="-mx-3 flex flex-wrap w-full">
                                        <div className="w-full px-3 sm:w-[90%]">
                                            <div className="mb-5">
                                                <label htmlFor="price" className="mb-3 block text-base font-medium text-[#07074D]">
                                                    Price
                                                </label>
                                                <Slider
                                                    className="sliderCustom"
                                                    range
                                                    step={10}
                                                    defaultValue={[20, 50]}
                                                    onChange={(value) => {
                                                        console.log('onChange Slider: ', value);
                                                    }
                                                    }
                                                    onChangeComplete={(value) => {
                                                        console.log('onChangeComplete Slider: ', value);
                                                    }}
                                                    trackStyle={{ backgroundColor: "var(--mainColor)", height: '10px' }}
                                                    railStyle={{ backgroundColor: "rgb(0 0 0 / 15%)", height: "10px" }}
                                                    handleStyle={{ height: "10px" }}
                                                />
                                            </div>
                                        </div>

                                    </div> */}


                                <div className="-mx-3 flex flex-wrap w-full mt-5">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <div className="flex gap-2">

                                                <label htmlFor="parking" className="mb-3 block text-base font-medium text-[#07074D]">
                                                    Parking
                                                </label>

                                                <Switch checked={hall.ParkingSpaceAvailiable} onChange={(checked) => {
                                                    console.log("check isss", checked)
                                                    setHall({ ...hall, ParkingSpaceAvailiable: checked })

                                                }} />
                                            </div>
                                            {
                                                hall.ParkingSpaceAvailiable === true ? (
                                                    <input onChange={(e) => setHall({ ...hall, parkingSpace: e.target.value })} value={hall.parkingSpace} type="number" name="parking" id="parking" placeholder="Parking Space" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                                ) : (null)
                                            }
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">

                                            <label htmlFor="Location" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Catering
                                            </label>
                                            <Select
                                                value={hall.Catering}
                                                className="py-3 px-3 antSelector"
                                                placeholder="Select Type"
                                                style={{
                                                    width: '100%',
                                                    height: 50,
                                                    marginBlock: '7px',
                                                    borderRadius: '0.375rem'
                                                }}
                                                onChange={(item) => {
                                                    console.log("item", item)
                                                    setHall({ ...hall, Catering: item })
                                                }}
                                                options={[
                                                    {
                                                        value: 'internal',
                                                        label: 'internal',
                                                    },
                                                    {
                                                        value: 'external',
                                                        label: 'external',
                                                    },

                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="-mx-3 flex flex-wrap w-full mt-5">
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">
                                            <div className="flex gap-2 flex-col">

                                                <label htmlFor="Wheelchair Accessible" className="mb-3 block text-base font-medium text-[#07074D]">
                                                    Wheelchair Accessible
                                                </label>

                                                <Switch checked={hall.wheelchairAccessible} style={{ width: "20px" }} onChange={(checked) => {
                                                    setHall({ ...hall, wheelchairAccessible: checked })
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2">
                                        <div className="mb-5">

                                            <label htmlFor="Location" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Staff
                                            </label>
                                            <Select
                                                mode="multiple"
                                                className="antSelector"
                                                value={hall.staffMembers}
                                                style={{
                                                    width: '100%',
                                                    height: 50,
                                                    marginBlock: '7px',
                                                    borderRadius: '0.375rem'
                                                }}
                                                placeholder="Select Gender"
                                                onChange={(value) => {
                                                    console.log(`selected ${value}`);
                                                    setHall({ ...hall, staffMembers: value });
                                                }}
                                                optionLabelProp="label"
                                                options={[
                                                    {
                                                        label: 'Male',
                                                        value: 'male',
                                                        //   emoji: '🇨🇳',
                                                        desc: 'Male',
                                                    },
                                                    {
                                                        label: 'Female',
                                                        value: 'female',
                                                        //   emoji: '🇺🇸',
                                                        desc: 'Female',
                                                    },
                                                    {
                                                        label: 'TransGender',
                                                        value: 'TransGender',
                                                        //   emoji: '🇯🇵',
                                                        desc: 'TransGender',
                                                    },

                                                ]}
                                                optionRender={(option) => (
                                                    <Space>
                                                        <span role="img" aria-label={option.data.label}>
                                                            {option.data.emoji}
                                                        </span>
                                                        {option.data.desc}
                                                    </Space>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>




                                <div className="-mx-3 flex flex-wrap w-full">

                                    <div className="w-full px-3">
                                        <div className="mb-5">
                                            <label htmlFor="Location" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Amenities
                                            </label>
                                            <Select
                                                mode="multiple"
                                                className="antSelector"
                                                value={hall.Amenities}
                                                style={{
                                                    width: '100%',
                                                    height: 50,
                                                    marginBlock: '7px',
                                                    borderRadius: '0.375rem'
                                                }}
                                                placeholder="Select Amenities"
                                                // defaultValue={['china']}
                                                onChange={(value) => {
                                                    console.log(`selected Amenities ${value}`);
                                                    setHall({ ...hall, Amenities: value })
                                                }}
                                                optionLabelProp="label"
                                                options={[
                                                    {
                                                        label: 'Bridal Room',
                                                        value: 'bridal-room',
                                                        //   emoji: '🇨🇳',
                                                        desc: 'Bridal Room',
                                                    },
                                                    {
                                                        label: 'Groom Room',
                                                        value: 'groomroom',
                                                        //   emoji: '🇺🇸',
                                                        desc: 'Groom Room',
                                                    },
                                                    {
                                                        label: 'Washroom Valet',
                                                        value: 'washroom',
                                                        //   emoji: '🇯🇵',
                                                        desc: 'Washroom Valet',
                                                    },
                                                    {
                                                        label: 'Security Guards',
                                                        value: 'securityguards',
                                                        //   emoji: '🇰🇷',
                                                        desc: 'Security Guards',
                                                    },
                                                ]}
                                                optionRender={(option) => (
                                                    <Space>
                                                        <span role="img" aria-label={option.data.label}>
                                                            {option.data.emoji}
                                                        </span>
                                                        {option.data.desc}
                                                    </Space>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="-mx-3 flex flex-wrap w-full">

                                    <div className="w-full px-3">
                                        <div className="mb-5">

                                            <label htmlFor="Location" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Location
                                            </label>

                                            <input onChange={(e) => setHall({ ...hall, location: e.target.value })} value={hall.location} type="text" name="location" id="Location" placeholder="Location" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                        </div>
                                    </div>
                                </div>

                                <div className="-mx-3 flex flex-wrap w-full">

                                    <div className="w-full px-3">
                                        <div className="mb-5">

                                            <label htmlFor="capacity" className="mb-3 block text-base font-medium text-[#07074D]">
                                                capacity
                                            </label>

                                            <input onChange={(e) => setHall({ ...hall, capacity: e.target.value })} value={hall.capacity} type="number" name="location" id="number" placeholder="number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                        </div>
                                    </div>
                                </div>



                                <div className="-mx-3 flex flex-wrap w-full">

                                    <div className="w-full px-3 sm:w-full">
                                        <div className="mb-5">
                                            <label htmlFor="description" className="block mb-2 mt-5 text-start text-base font-medium text-[#07074D]">Description</label>
                                            <textarea name="description" onChange={(e) => setHall({ ...hall, description: e.target.value })} value={hall.description} id="description" rows="4" className="block mb-5 p-2.5 w-full border border-[#e0e0e0]  bg-gray-50 rounded-lg px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" placeholder="Write your thoughts here..."></textarea>
                                        </div>
                                    </div>
                                </div>



                                <div className="w-full">



                                    <Dragger {...uploadProps} style={{ width: '100%' }}>

                                        <p className="ant-upload-drag-icon flex justify-center">
                                            <img className='bg-[#F2F4F7] p-2 rounded-full' src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVwbG9hZC1jbG91ZCI+PHBhdGggZD0iTTQgMTQuODk5QTcgNyAwIDEgMSAxNS43MSA4aDEuNzlhNC41IDQuNSAwIDAgMSAyLjUgOC4yNDIiLz48cGF0aCBkPSJNMTIgMTJ2OSIvPjxwYXRoIGQ9Im0xNiAxNi00LTQtNCA0Ii8+PC9zdmc+'} alt="upload Profile" />
                                        </p>
                                        <p style={{ color: '#0068B3' }} className="ant-upload-text text-SkyColor font-medium">
                                            Click to upload <span className='text-textLight'>drag and drop</span>
                                        </p>
                                        <p className="ant-upload-hint text-textLight font-medium">
                                            PNG, JPG or JPEG (max {maxImages} photos)
                                        </p>
                                    </Dragger>



                                    <div className="mt-4 border rounded-md py-2 px-2 w-full">
                                        <p className='text-textGrey text-sm font-medium'>Hall Pic: {fileList.length}</p>
                                        <p className='text-textGrey text-sm'>Total Size: {getTotalSize()}KB</p> {/* Add "KB" directly after the size */}
                                        <Progress percent={((fileList.length / maxImages) * 100).toFixed(0)} />
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        {fileList.map((file, index) => (
                                            <div key={file.public_id} className="image-item" style={{ width: 126, height: 126, display: 'inline-block', position: 'relative', marginRight: '10px' }}>
                                                <img key={file.public_id} onClick={() => handleThumbnailClick(index)} src={file.url} alt={`Uploaded ${index + 1}`} className="shadow-xl border border-mainColor rounded-xl hover-brightness" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: "brightness(0.65)" }} />
                                                <Button className='bg-[#FFA09B] text-dangerColor flex justify-center items-center' type="danger" size="small" shape="circle" icon={<CloseOutlined style={{ color: 'white' }} />} onClick={() => handleRemove(file)} style={{ position: 'absolute', top: '5px', right: '5px' }} />

                                                {thumbnailIndex === index && <span className="thumbnail-label">Thumbnail</span>}

                                            </div>
                                        ))}
                                    </div>



                                </div>
                                <div>
                                    <h1 className={`${imgLoading ? 'block' : "hidden"}`}>Loading</h1>
                                    <button type="submit" className="mt-5 mb-5 hover:shadow-form rounded-md bg-mainColor py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-transparent border  hover:border-mainColor hover:text-mainColor transition-all">
                                        {title == 'Edit' ? <p>Edit Hall</p> : <p>Add New Hall</p>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </Drawer>
            </ConfigProvider>
        </>
    )
}

export default AddHalls
