'use client'
import React, { useState , useEffect } from "react";
// import {heroStyle} from "@/app/hero.module.css";
// import {heroStyle} from '../hero.module.css'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingScreen from './loading/LoadingScreen';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { GetHalls } from "../apiFetch/getApi";
import { useDispatch , useSelector } from "react-redux";
const Hero = () => {
    const [accordian, setaccordian] = useState(false);


    useEffect(() => {
        GetAllHalls();
    },[])

    
    const [halls, sethalls] = useState([])
    const [loading, setloading] = useState(false)
    const userdata = useSelector((state) => state.user);

    let dispatch = useDispatch();

    const GetAllHalls = async () => {
        
        const data = await GetHalls('/api/Vendor/Hall');
        sethalls(data)

        // sethalls({GetHalls('/api/Vendor/Hall')})
        // setloading(true)

        // const res = await axios.get('/api/Vendor/Hall');
        // setloading(false)
        // console.log(res.data.data)
        // sethalls(res.data.data)
        // if (userdata.isAuthenticated === true) {
        //     if (userdata.userdata.usertype === 'vendor') {
        //         const id = await localStorage.getItem('vendorid');
        //         console.log("id", id)
        //         const newdata = res.data.data.filter((item) => item.vendorid !== id);
        //         console.log("new data", newdata);
        //         sethalls(newdata)
        //     }
        //     else {
        //         console.log("res data",res.data.data)
        //         sethalls(res.data.data)
        //         dispatch(addbanquetdata(res.data.data))
        //     }
        // } else {
        //     console.log("res data",res.data.data)
        //     sethalls(res.data.data)
        //     dispatch(addbanquetdata(res.data.data))
        // }
    }
    
    return (
        <>
            <section className={`hero__section relative h-full`}>
            <img
                    src={"/assets/hero/homepage_hero_1920.jpg"}
                    alt="Home section image"
                    className=" sm:hidden max-w-[100%]  h-auto hero__image"
                    style={{
                        filter: "brightness(0.7)",
                    }}
                    layout='responsive'
                />
                <img
                     alt="Home section image"
                    src={"/assets/hero/homepage_hero_768.jpg"}
                    className="xl:hidden sm:block hidden rounded-xl  max-w-[100%]  h-auto  hero__image"
                    style={{ filter: "brightness(0.7)" }}
                    layout='responsive'
                />
                <img
                      alt="Home section image"
                     src={"/assets/hero/homepage_hero_1280.jpg"}
                    className="xl:block 2xl:hidden hidden rounded-xl  max-w-[100%]  h-auto  hero__image"
                    style={{ filter: "brightness(0.7)" }}
                    layout='responsive'
                />
                <img
                    alt="Home section image"
                    src={"/assets/hero/homepage_hero_1920.jpg"}
                    className="2xl:block hidden rounded-xl  max-w-[100%]  h-auto  hero__image"
                    layout='fill'
                    style={{ filter: "brightness(0.7)" }}
                    
                   />
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " style={{ width: "calc(100% - 32px)" }}>
                    <div className="relative flex flex-col justify-center container mx-auto">
                        <img src="/logos/Hero_Standard_AuroraLogo.svg" alt="Logo" className={`${'backBlue'} ${'hero_logo'}`} />
                        <h2 className={'hero__subtitle'}>welcome to</h2>
                        <h1 className={'hero__title'}>Banquet</h1>
                        <h3 className={'hero__desk'}>Bazar</h3>
                        <div className={'hero__since_wrapper'}>
                            <h4 className={'hero__since'}>since 2023</h4>
                            <div className={'hero__since_stars'}>
                                <img src="assets/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                                <img src="assets/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                                <img src="assets/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                                <img src="assets/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                                <img src="assets/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                            </div>
                        </div>
                    </div>
                </div>

               
            </section>

            <section className={`${"bannerContainer"} py-10 ${"outlineContent"} container`}>
                <h2
                    className={`text-xl font-semibold sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel] 
                    before:content-[url(https://aurorabanquethall.com/_next/static/media/Diamond.9ed26887ed10ae24d374b45f5b347613.svg)]  before:text-[#d5af80] 
                    before:w-[18px] 
                    before:mb-3  
                    before:block 
                    before:leading-[1] 
                    before:2xl:w-[18px] 
                    
                    // before:transform: rotate(0turn); // before:transition: transform 1.9s ease;]
                    
                    // After

                    // after:transition: width 1.9s ease
                    after:content-[" "]
                    after:h-[1px]
                    after:bg-[#d5af80]
                    after:w-4/5
                    after:mt-3
                    
                    
                    `}
                >
                    welcome to Banquet Bazar 
                </h2>
                <p className={`text-lg font-light my-5 text-center mx-auto leading-relaxed md:w-4/5 `}>
                    Aurora is one of the most contemporary and technologically advanced banquet halls in Los Angeles. We offer specialized, all inclusive
                    amenities and services which set us apart from the competition. Whether it's lounging at our custom bridal suite after a photoshoot or our
                    one of a kind speaker system designed to project sound only at the dance floor, we have considered every detail and perfected your
                    experience at Aurora. We take pride in the versatility and quality of our venue and services. Our management and staff work tirelessly to
                    ensure that all events go above and beyond your expectations. Whether it’s a corporate event or your wedding day, let’s make it a one of a
                    kind experience
                </p>
            </section>
            {/* events */}
            <section className={`${'bannerContainer'} py-10 ${'outlineContent'} container lg:relative lg:pt-10 lg:pb-16    lg:after:content-['']
    lg:after:block
    lg:after:w-2/5
    lg:after:h-full
    lg:after:absolute
    lg:after:bg-[#faf7f2]
    lg:after:top-0
    lg:after:left-[50%]
    lg:after:translate-x-[-50%]
    lg:after:z-[-1]`}>
                <h2
                    className={`text-xl font-normal sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel] 
                    before:content-[url(https://aurorabanquethall.com/_next/static/media/Diamond.9ed26887ed10ae24d374b45f5b347613.svg)]  before:text-[#d5af80] 
                    before:w-[18px] 
                    before:mb-3  
                    before:block 
                    before:leading-[1] 
                    before:2xl:w-[18px] 
                    
                    // before:transform: rotate(0turn); // before:transition: transform 1.9s ease;]
                    
                    // After

                    // after:transition: width 1.9s ease
                    after:content-[" "]
                    after:h-[1px]
                    after:bg-[#d5af80]
                    after:w-1/5
                    after:mt-3
                    after:mb-5
                    md:after:mb-8
                    
                    
                    `}
                >
                    Events
                </h2>
                {/* <p className={`text-lg font-light my-5 text-center mx-auto leading-relaxed `}>
                        Aurora is one of the most contemporary and technologically advanced banquet halls in Los Angeles. We offer specialized, all inclusive
                        amenities and services which set us apart from the competition. Whether it's lounging at our custom bridal suite after a photoshoot or our
                        one of a kind speaker system designed to project sound only at the dance floor, we have considered every detail and perfected your
                        experience at Aurora. We take pride in the versatility and quality of our venue and services. Our management and staff work tirelessly to
                        ensure that all events go above and beyond your expectations. Whether it’s a corporate event or your wedding day, let’s make it a one of a
                        kind experience
                    </p> */}
                <Swiper
                    spaceBetween={20}
                    // slidesPerView={3}
                    loop={true}
                    // autoplay={{
                    //     "delay": 2500,
                    //     "disableOnInteraction": false
                    // }}
                    // watchSlidesVisibility={true}
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => {}}
                    modules={[Navigation, Autoplay]}
                    navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            centeredSlides: true,
                            // centeredSlides: true
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                   {
                    halls.length > 0 ? (
                        halls.map((item) => {
                            return (
                                <SwiperSlide key={item}>
                                <div>
                                    <Link  className="event_item__wrapper" draggable="false" href={`/banquet/${item._id}`}>
                                        <Image
                                            src={item.galleryImage[0].url}
                                            className=" block object-cover rounded-xl"
                                            alt="Halls image"
                                            style={{
                                                filter: "brightness(0.45)",
                                                height:"450px",
                                                width:"450px"
                                            }}  width={425}
                                            height={369}
                                        />
                                        
                                        <div
                                            className="absolute left-0 z-[5] w-full text-white padding-box h-full bottom-0"
        
                                        >
                                            <div
                                                className={`event_item__name_wrapper flex
                                                    flex-col
                                                    justify-end
                                                    items-center
                                                    w-max-content;
                                                    absolute
                                                    bottom-[50%]
                                                    left-[50%]
                                                    translate-x-[-50%]
                                                    translate-y-[50%]
                                                
                                                    before:content-[" "]
                                                    before:block
                                                    before:w-full
                                                    before:h-[1px]
                                                    before:bg-white
                                                    before:origin-left
                                                    before:scale-0
                                                    hover:before:scale-[1]
                                                    before:transition-transform
                                                    before:duration-[0.9s]
                                                    before:ease-in
                                                    
                                                    after:content-[" "]
                                                    after:block
                                                    after:w-full
                                                    after:h-[1px]
                                                    after:bg-white
                                                    after:origin-left
                                                    after:scale-0
                                                    hover:after:scale-[1]
                                                    after:transition-transform
                                                    after:duration-[0.9s]
                                                    after:ease-in
                                                    
                                                    `}
                                                style={{
                                                    transitionTimingFunction: "ease",
                                                    transitionDuration: ".8s",
                                                    transitionProperty: "bottom,transform",
                                                    width: "-moz-max-content",
                                                }}
                                            >
                                                <span className="tracking-[3.6px] leading-6 text-white text-lg font-[Cinzel] font-extralight">{item.name}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            )
                        })
                    ):(
                          <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 w-full">
              <div className="animate-pulse shrink">
                <span className="w-[73vw] md:w-[44.3vw] lg:w-[30.09vw] h-[450px] block bg-gray-300 rounded-xl" />
              </div>
              <div className="animate-pulse shrink">
                <span className="ml-36 md:ml-auto w-[73vw] md:w-[44.3vw]  lg:w-[30.09vw] h-[450px] block bg-gray-300 rounded-xl" />
              </div>
              <div className="animate-pulse shrink">
                <span className="w-[30.09vw] h-[450px] hidden lg:block bg-gray-300 rounded-xl" />
              </div>
            </div>
                    )
                    
                   }
                   
                </Swiper>
                <div>
                    <div className="carucel_arrow arrow-right hidden lg:block  lg:absolute lg:bottom-[75%] lg:right-0 lg:left-[unset]  lg:translate-x-[-20px] lg:translate-y-[-80px] lg:z-10 text-[#2f4d4b] lg:w-max-content lg:text-sm lg:leading-5 lg:font-[Cinzel] lg:align-middle">
                        <div className="carucel_prev_arrow lg:flex lg:items-center lg:mr-[128px]">
                            <span className="name">previous</span>
                            <div
                                className="arrow_wrapper lg:ml-2 lg:w-[40px]
                   lg:h-[40px] lg:border-2 lg:border-[#2f4d4b] lg:relative lg:overflow-hidden
                      lg:after:content-['']
                      lg:after:block
                      lg:after:absolute
                      lg:after:w-full
                      lg:after:h-full
                      lg:after:right-[-100%]
                      lg:after:top-0
                      lg:after:bg-[#2f4d4b]
                  "
                                style={{ transition: "color .6s ease" }}
                            >
                                <svg
                                    className="lg:absolute
    lg:top-[50%]
    lg:left-[50%]
    
    lg:translate-x-[-50%]
    lg:translate-y-[-50%]
    text-2xl"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="xMinYMin meet"
                                    viewBox="0 0 18 9.873"

                                >
                                    <path d="M4.937 9.873l.8-.8-3.568-3.568H18V4.373H2.171L5.739.805l-.8-.8L0 4.936z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="carucel_arrow hidden lg:block arrow-left lg:absolute lg:bottom-[75%] lg:right-0 lg:left-[unset] lg:bottom-[unset] lg:translate-x-[-20px] lg:translate-y-[-80px] lg:z-10 text-[#2f4d4b] lg:w-max-content lg:text-sm lg:leading-5 lg:font-[Cinzel] lg:align-middle ">
                        <div className="carucel_next_arrow lg:flex lg:flex-row-reverse lg:items-center lg:mr-[28px]">
                            <span className="name">next</span>
                            <div
                                className="arrow_wrapper lg:mr-2 lg:w-[40px]
                   lg:h-[40px] lg:border-2 lg:border-[#2f4d4b] lg:relative lg:overflow-hidden
                      lg:after:content-['']
                      lg:after:block
                      lg:after:absolute
                      lg:after:w-full
                      lg:after:h-full
                      lg:after:right-[-100%]
                      lg:after:top-0
                      lg:after:bg-[#2f4d4b]"
                            >
                                <svg
                                    className=' lg:absolute
                      lg:top-[50%]
                      lg:left-[50%]
                      
                      lg:translate-x-[-50%]
                      lg:translate-y-[-50%]
                      text-2xl"'
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 9.873"
                                    preserveAspectRatio="xMinYMin meet"

                                >
                                    <path d="M13.063 0l-.8.8 3.568 3.568H0V5.5h15.829l-3.568 3.568.8.8L18 4.937z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="button max-w-xs mt-5" style={{ marginTop: "20px" }} href="/catalog">
                    explore more
                </Link>
            </section>

            {/* Venue */}
            <section className={`${'bannerContainer'} py-10 ${'outlineContent'} container`}>
                <div className="outline-content relative">
                    <h2
                        className={`text-xl font-normal sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel] 
                    before:content-[url(https://aurorabanquethall.com/_next/static/media/Diamond.9ed26887ed10ae24d374b45f5b347613.svg)]  before:text-[#d5af80] 
                    before:w-[18px] 
                    before:mb-3  
                    before:block 
                    before:leading-[1] 
                    before:2xl:w-[18px] 
                    
                    // before:transform: rotate(0turn); // before:transition: transform 1.9s ease;]
                    
                    // After

                    // after:transition: width 1.9s ease
                    after:content-[" "]
                    after:h-[1px]
                    after:bg-[#d5af80]
                    after:w-1/5
                    after:mt-3
                    after:mb-5
                    
                    
                    `}
                    >
                        Venue
                    </h2>
                    <div
                        className="_image_wrapper_down venue_image show
                            absolute
                            w-full
                            top-24
                            left-0
                            object-cover
                            z-0 

                         md:relative
                        md:top-[unset]
                        md:m-t-[2.5rem]
                        }
                        
                        "
                    >
                        <Image
                            src={"/assets/homepage/venue/Venue_375.jpg"}
                            width={425}
                            alt="Venue Image"
                            height={369}
                            className=" sm:hidden max-w-[100%]  h-auto"
                            // style={{ width1: "100%", height: "100%" }}
                            style={{
                                filter: "brightness(0.9)",
                                width: "100% !important",
                                height: "100% !important",
                            }}
                        />
                        <Image 
                           alt="Venue Image"
                            width={768}
                            height={600}
                            src={"/assets/homepage/venue/Venue_768.jpg"}
                            className="xl:hidden sm:block hidden rounded-xl  max-w-[100%]      w-full
h-full
       relative
                                object-cover"
                            layout="responsive"
                            style={{
                                filter: "brightness(0.9)",

                                // width: "100% !important", height: "100% !important"
                            }}
                        />
                        <Image 
                            alt="Venue Image"
                            width={1280}
                            height={1044}
                            layout="responsive"
                            src={"/assets/homepage/venue/Venue_1280.jpg"}
                            className="xl:block 2xl:hidden hidden rounded-xl  max-w-[100%]  h-auto"
                            style={{ filter: "brightness(0.9)", width: "100% !important", height: "100% !important" }}
                        />
                        <Image
                            alt="Venue Image"
                            width={1920}
                            height={1500}
                            layout="responsive"
                            src={"/assets/homepage/venue/Venue_1920.jpg"}
                            className="2xl:block hidden rounded-xl  max-w-[100%]  h-auto"
                            style={{ filter: "brightness(0.9)" }}
                        />
                        
                    </div>
                    <div
                        className="venue_summary     
                        mt-[20vw]
                        mx-0 mb-0
                         z-[1]
                         relative
                         bg-[#faf7f2]
                         py-[1.875rem]
                         px-[1.25rem]
                         
                         md:mt-[-1.5rem]
                         md:mx-auto
                         md:mb-0

                         md:max-w-[74.5%]
                         md:py-[2.5rem]
                         md:px-[1.875rem]
                         "
                    >
                        <div className="text_appear down show">
                            <p
                                className="venue_text     text-center
    // font: normal normal 300 12px/30px Roboto;
    text-xs
    tracking-normal
    font-light
    leading-8
    text-black
    
    md:text-sm
    md:leading-8"
                            >
                                Our venue is newly renovated and designed to serve events from 250-300 people. The venue is about 9,400 square feet and boasts a
                                luxurious grand foyer, bridal suite, and main hall which is about 4,800 square feet. The large dance floor, where the speakers and
                                projects are focused on can be changed with custom themes to fit your event or personality. Our kitchen has a safe working environment
                                and contains the latest in cooking appliances to ensure your food arrives on time and perfectly prepped.
                            </p>
                        </div>
                        <a className="button venue-btn md:w-4/5 md:mt-10" href="/venue">
                            explore venue
                        </a>
                    </div>
                </div>
            </section>
            {/* Menu */}
            <section className={`${'bannerContainer'} py-10 ${'outlineContent'} container`}>
                <div className="outline-content">
                    <h2
                        className={`text-xl font-normal sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel] 
                    before:content-[url(https://aurorabanquethall.com/_next/static/media/Diamond.9ed26887ed10ae24d374b45f5b347613.svg)]  before:text-[#d5af80] 
                    before:w-[18px] 
                    before:mb-3  
                    before:block 
                    before:leading-[1] 
                    before:2xl:w-[18px] 
                    
                    // before:transform: rotate(0turn); // before:transition: transform 1.9s ease;]
                    
                    // After

                    // after:transition: width 1.9s ease
                    after:content-[" "]
                    after:h-[1px]
                    after:bg-[#d5af80]
                    after:w-1/5
                    after:mt-3
                    after:mb-5
                    
                    
                    `}
                    >
                        Menu
                    </h2>
                    <div className="homeWappper lg:flex lg:mt-5">
                        <div
                            className="_image_wrapper_down venue_image show
                            relative
                            w-full
                          
                            object-cover
                            z-0 
                        
                        "
                        >
                            {/* <source srcSet="/assets/homepage/venue/Venue_375.webp" type="image/webp" /> */}
                            <Image
                                src={"/assets/homepage/menu/Menu_375.jpg"}
                                width={425}
                                height={369}
                                alt="Venue Image"
                                layout="responsive"
                                className=" sm:hidden max-w-[100%]  h-auto"
                                // style={{ width1: "100%", height: "100%" }}
                                style={{
                                    filter: "brightness(0.9)",
                                    width: "100% !important",
                                    height: "100% !important",
                                }}
                            />
                            <Image
                                alt="Venue Image"
                                width={768}
                                height={600}
                                src={"/assets/homepage/menu/Menu_768.jpg"}
                                className="xl:hidden sm:block hidden   max-w-[100%]      w-full
h-full
       relative
                                object-cover"

                                style={{
                                    filter: "brightness(0.9)",

                                    // width: "100% !important", height: "100% !important"
                                }}
                            />
                            <Image
                                width={1280}
                                height={1044}
                                alt="Venue Image"
                                layout="responsive"
                                src={"/assets/homepage/menu/Menu_1280.jpg"}
                                className="xl:block 2xl:hidden hidden max-w-[100%]  h-auto"
                                style={{ filter: "brightness(0.9)", width: "100% !important", height: "100% !important" }}
                            />
                            <Image
                                width={1920}
                                height={1500}
                                alt="Venue Image"
                                layout="responsive"
                                src={"/assets/homepage/menu/Menu_1920.jpg"}
                                className="2xl:block hidden   max-w-[100%]  h-auto"
                                style={{ filter: "brightness(0.9)" }}
                            />
                           
                        </div>
                        <div
                            className="venue_summary     
                            lg:w-11/12
                         z-[1]
                         relative
                         bg-[#faf7f2]
                         py-[1.875rem]
                         px-[1.25rem]"
                        >
                            <div className="text_appear down show">
                                <p
                                    className="venue_text     text-center
    // font: normal normal 300 12px/30px Roboto;
    text-xs
    tracking-normal
    font-light
    leading-8
    text-black
    
    md:text-sm
    md:leading-8 
    md:text-left"
                                >
                                    Our venue is newly renovated and designed to serve events from 250-300 people. The venue is about 9,400 square feet and boasts a
                                    luxurious grand foyer, bridal suite, and main hall which is about 4,800 square feet. The large dance floor, where the speakers and
                                    projects are focused on can be changed with custom themes to fit your event or personality. Our kitchen has a safe working environment
                                    and contains the latest in cooking appliances to ensure your food arrives on time and perfectly prepped.
                                </p>
                            </div>
                            <a className="button venue-btn md:w-3/5" href="/venue">
                                explore venue
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials Section */}
            <section className={`${'bannerContainer'} py-10 ${'outlineContent'} container`}>
                <div className="outline-content">
                    <h2
                        className={`text-xl font-normal sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel] 
                    before:content-[url(https://aurorabanquethall.com/_next/static/media/Diamond.9ed26887ed10ae24d374b45f5b347613.svg)]  before:text-[#d5af80] 
                    before:w-[18px] 
                    before:mb-3  
                    before:block 
                    before:leading-[1] 
                    before:2xl:w-[18px] 
                    
                    // before:transform: rotate(0turn); // before:transition: transform 1.9s ease;]
                    
                    // After

                    // after:transition: width 1.9s ease
                    after:content-[" "]
                    after:h-[1px]
                    after:bg-[#d5af80]
                    after:w-1/5
                    after:mt-3
                    after:mb-5

                    md:after:w-2/5
                    
                    
                    `}
                    >
                        Testimonials
                    </h2>

                    <div className="flex flex-col lg:flex-row lg:overflow-x-hidden lg:flex-wrap">
                        <div
                            className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
                        relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
                        >
                            <div
                                className=" text-white stars flex
    justify-center
    mb-5"
                            >
                                <Image alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image alt="stars"  src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                {/* <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span> */}
                            </div>
                            <div
                                className="body tracking-[0.16px] text-sm
    text-center"
                            >
                                "We had our Baby Welcome Event at Aurora, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                                service that was provided to us by the Venue. The management an ...
                            </div>
                            <div
                                className="read-more-wrapper  mb-[-29.5px]
    text-center"
                            >
                                <span
                                    className="read-more 
                                    font-[Cinzel]
                                    text-xs
                                    leading-8
                                    tracking-normal
                                    text-[#d5af80]
                                    decoration-transparent
                                    cursor-pointer
                                    transtion-[.2s]
                                "
                                >
                                    Read more
                                </span>
                            </div>
                            <hr
                                className="w-52
    mt-9
    mb-5 sm:mb-[unset]
    mx-auto
    margin-bottom: 20px
    border-[#d5af80]
    border-0
    border-t-[1px]  
    border-solid
    md:mb-4
    "
                            />
                            <div
                                className="author
    font-[Cinzel]
    text-center
    text-base
    leading-8
    tracking-normal
    text-[#000]"
                            >
                                Ramella H.
                            </div>
                        </div>

                        <div
                            className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
                        relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
                        >
                            <div
                                className=" text-white stars flex
    justify-center
    mb-5"
                            >
                                <Image alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image   alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                {/* <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span> */}
                            </div>
                            <div
                                className="body tracking-[0.16px] text-sm
    text-center"
                            >
                                "We had our Baby Welcome Event at Aurora, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                                service that was provided to us by the Venue. The management an ...
                            </div>
                            <div
                                className="read-more-wrapper  mb-[-29.5px]
    text-center"
                            >
                                <span
                                    className="read-more 
                                    font-[Cinzel]
                                    text-xs
                                    leading-8
                                    tracking-normal
                                    text-[#d5af80]
                                    decoration-transparent
                                    cursor-pointer
                                    transtion-[.2s]
                                "
                                >
                                    Read more
                                </span>
                            </div>
                            <hr
                                className="w-52
    mt-9
    mb-5 sm:mb-[unset]
    mx-auto
    margin-bottom: 20px
    border-[#d5af80]
    border-0
    border-t-[1px]  
    border-solid
    md:mb-4
    "
                            />
                            <div
                                className="author
    font-[Cinzel]
    text-center
    text-base
    leading-8
    tracking-normal
    text-[#000]"
                            >
                                Ramella H.
                            </div>
                        </div>

                        <div
                            className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
                        relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
                        >
                            <div
                                className=" text-white stars flex
    justify-center
    mb-5"
                            >
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image   alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                {/* <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span> */}
                            </div>
                            <div
                                className="body tracking-[0.16px] text-sm
    text-center"
                            >
                                "We had our Baby Welcome Event at Aurora, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                                service that was provided to us by the Venue. The management an ...
                            </div>
                            <div
                                className="read-more-wrapper  mb-[-29.5px]
    text-center"
                            >
                                <span
                                    className="read-more 
                                    font-[Cinzel]
                                    text-xs
                                    leading-8
                                    tracking-normal
                                    text-[#d5af80]
                                    decoration-transparent
                                    cursor-pointer
                                    transtion-[.2s]
                                "
                                >
                                    Read more
                                </span>
                            </div>
                            <hr
                                className="w-52
    mt-9
    mb-5 sm:mb-[unset]
    mx-auto
    margin-bottom: 20px
    border-[#d5af80]
    border-0
    border-t-[1px]  
    border-solid
    md:mb-4
    "
                            />
                            <div
                                className="author
    font-[Cinzel]
    text-center
    text-base
    leading-8
    tracking-normal
    text-[#000]"
                            >
                                Ramella H.
                            </div>
                        </div>

                        <div
                            className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
                        relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
                        >
                            <div
                                className=" text-white stars flex
    justify-center
    mb-5"
                            >
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image   alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                {/* <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span> */}
                            </div>
                            <div
                                className="body tracking-[0.16px] text-sm
    text-center"
                            >
                                "We had our Baby Welcome Event at Aurora, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                                service that was provided to us by the Venue. The management an ...
                            </div>
                            <div
                                className="read-more-wrapper  mb-[-29.5px]
    text-center"
                            >
                                <span
                                    className="read-more 
                                    font-[Cinzel]
                                    text-xs
                                    leading-8
                                    tracking-normal
                                    text-[#d5af80]
                                    decoration-transparent
                                    cursor-pointer
                                    transtion-[.2s]
                                "
                                >
                                    Read more
                                </span>
                            </div>
                            <hr
                                className="w-52
    mt-9
    mb-5 sm:mb-[unset]
    mx-auto
    margin-bottom: 20px
    border-[#d5af80]
    border-0
    border-t-[1px]  
    border-solid
    md:mb-4
    "
                            />
                            <div
                                className="author
    font-[Cinzel]
    text-center
    text-base
    leading-8
    tracking-normal
    text-[#000]"
                            >
                                Ramella H.
                            </div>
                        </div>

                        <div
                            className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
                        relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
                        >
                            <div
                                className=" text-white stars flex
    justify-center
    mb-5"
                            >
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                {/* <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span> */}
                            </div>
                            <div
                                className="body tracking-[0.16px] text-sm
    text-center"
                            >
                                "We had our Baby Welcome Event at Aurora, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                                service that was provided to us by the Venue. The management an ...
                            </div>
                            <div
                                className="read-more-wrapper  mb-[-29.5px]
    text-center"
                            >
                                <span
                                    className="read-more 
                                    font-[Cinzel]
                                    text-xs
                                    leading-8
                                    tracking-normal
                                    text-[#d5af80]
                                    decoration-transparent
                                    cursor-pointer
                                    transtion-[.2s]
                                "
                                >
                                    Read more
                                </span>
                            </div>
                            <hr
                                className="w-52
    mt-9
    mb-5 sm:mb-[unset]
    mx-auto
    margin-bottom: 20px
    border-[#d5af80]
    border-0
    border-t-[1px]  
    border-solid
    md:mb-4
    "
                            />
                            <div
                                className="author
    font-[Cinzel]
    text-center
    text-base
    leading-8
    tracking-normal
    text-[#000]"
                            >
                                Ramella H.
                            </div>
                        </div>

                        <div
                            className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
                        relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
                        >
                            <div
                                className=" text-white stars flex
    justify-center
    mb-5"
                            >
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image   alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                <Image  alt="stars" src={"/assets/icons/star-1.svg"} width={20} height={20}></Image>
                                {/* <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span>
                                <span className="material-icons gold900-text">star</span> */}
                            </div>
                            <div
                                className="body tracking-[0.16px] text-sm
    text-center"
                            >
                                "We had our Baby Welcome Event at Aurora, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                                service that was provided to us by the Venue. The management an ...
                            </div>
                            <div
                                className="read-more-wrapper  mb-[-29.5px]
    text-center"
                            >
                                <span
                                    className="read-more 
                                    font-[Cinzel]
                                    text-xs
                                    leading-8
                                    tracking-normal
                                    text-[#d5af80]
                                    decoration-transparent
                                    cursor-pointer
                                    transtion-[.2s]
                                "
                                >
                                    Read more
                                </span>
                            </div>
                            <hr
                                className="w-52
    mt-9
    mb-5 sm:mb-[unset]
    mx-auto
    margin-bottom: 20px
    border-[#d5af80]
    border-0
    border-t-[1px]  
    border-solid
    md:mb-4
    "
                            />
                            <div
                                className="author
    font-[Cinzel]
    text-center
    text-base
    leading-8
    tracking-normal
    text-[#000]"
                            >
                                Ramella H.
                            </div>
                        </div>

                    </div>
                </div>
                <a className="button venue-btn md:w-3/5" href="/venue">
                    View More
                </a>
            </section>

            {/* Step to Book Section */}
            <section className={`${"bannerContainer"} py-10 ${"outlineContent"} container`}>
                <div className="outline-content">
                    <h2
                        className={`text-xl font-normal sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel] 
                    before:content-[url(https://aurorabanquethall.com/_next/static/media/Diamond.9ed26887ed10ae24d374b45f5b347613.svg)]  before:text-[#d5af80] 
                    before:w-[18px] 
                    before:mb-3  
                    before:block 
                    before:leading-[1] 
                    before:2xl:w-[18px] 
                    
                    // before:transform: rotate(0turn); // before:transition: transform 1.9s ease;]
                    
                    // After

                    // after:transition: width 1.9s ease
                    after:content-[" "]
                    after:h-[1px]
                    after:bg-[#d5af80]
                    after:w-1/5
                    after:mt-3
                    after:mb-5

                    // medium Size Res
                    md:after:w-[70%]
                    md:text-4xl
                    md:leading-[54px]
                    tracking-normal
                    
                    `}
                    >
                        Steps To Book An Event
                    </h2>

                    {/* Inner Section */}
                    <div className="StepsToBookAnEvent-wrapper  flex justify-center flex-wrap lg:flex-row lg:gap-8">
                        <div className="StepsToBookAnEvent-item col-lg-4 col-md-12 col-12 flex flex-col w-full md:w-[70%] lg:w-[30%]">
                            <h2
                                className="StepsToBookAnEvent_header     bg-white
    block
    w-[120px]
    h-[120px]
    text-center
    relative
    rounded-[60px]
    text-7xl
    leading-[108px]
    font-[Cinzel]
    z-[1000]
    text-[#2f4d4b]
    mt-14
    -mb-16
    mx-auto
    "
                            >
                                1
                            </h2>
                            <div className="StepsToBookAnEvent-show">
                                <div
                                    className="StepsToBookAnEvent_description     w-full
                                    md:min-h-[180px]
                                
                                    lg:min-h-[220px]
                                    min-h-[0px]
    block
    mx-auto
    my-0
    text-center
    bg-[#faf7f2]
    z-[10]
    text-[#2f4d4b]
    pt-20
    px-10
    pb-5
    
    font-[Cinzel]
    text-lg
    leading-6
    md:text-3xl
    md:leading-10
    tracking-normal
"
                                >
                                    schedule an appointment for a tour
                                </div>
                                <div
                                    className="StepsToBookAnEvent_content
                                    my-5
                                    mx-auto
                                    text-left
                                    w-full
                                    text-xs
                                    leading-6
                                    md:text-base
                                    md:leading-8
                                    tracking-normal
                                    text-[#000]
                                    }
                                    "
                                >
                                    Take a tour and receive an introduction to packages and menu options with assigned manager.
                                </div>
                            </div>
                        </div>
                        <div className="StepsToBookAnEvent-item col-lg-4 col-md-12 col-12 flex flex-col w-full md:w-[70%] lg:w-[30%]">
                            <h2
                                className="StepsToBookAnEvent_header     bg-white
    block
    w-[120px]
    h-[120px]
    text-center
    relative
    rounded-[60px]
    text-7xl
    leading-[108px]
    font-[Cinzel]
    z-[1000]
    text-[#2f4d4b]
    mt-14
    -mb-16
    mx-auto
    "
                            >
                                2
                            </h2>
                            <div className="StepsToBookAnEvent-show">
                                <div
                                    className="StepsToBookAnEvent_description     w-full
                                    md:min-h-[180px]
                                    min-h-[0px]
                                    lg:min-h-[220px]
    block
    mx-auto
    my-0
    text-center
    bg-[#faf7f2]
    z-[10]
    text-[#2f4d4b]
    pt-20
    px-9
    pb-5
    font-[Cinzel]
    text-lg
    leading-6
    md:text-3xl
    md:leading-10
    tracking-normal
"
                                >
                                    contract signing
                                </div>
                                <div
                                    className="StepsToBookAnEvent_content
                                    my-5
                                    mx-auto
                                    text-left
                                    w-full
                                    text-xs
                                    leading-6
                                    md:text-base
                                    md:leading-8
                                    tracking-normal
                                    text-[#000]
                                    }
                                    "
                                >
                                    Meet our production managers to go over the entertainment packages and lighting options. Reserve date with 25%
                                </div>
                            </div>
                        </div>
                        <div className="StepsToBookAnEvent-item col-lg-4 col-md-12 col-12 flex flex-col w-full md:w-[70%] lg:w-[30%]">
                            <h2
                                className="StepsToBookAnEvent_header     bg-white
    block
    w-[120px]
    h-[120px]
    text-center
    relative
    rounded-[60px]
    text-7xl
    leading-[108px]
    font-[Cinzel]
    z-[1000]
    text-[#2f4d4b]
    mt-14
    -mb-16
    mx-auto
    "
                            >
                                3
                            </h2>
                            <div className="StepsToBookAnEvent-show">
                                <div
                                    className="StepsToBookAnEvent_description     w-full
                                    md:min-h-[180px]
                                    min-h-[0px]
                                    
                                    lg:min-h-[220px]
    block
    mx-auto
    my-0
    text-center
    bg-[#faf7f2]
    z-[10]
    text-[#2f4d4b]
    pt-20
    px-9
    pb-5
    font-[Cinzel]
    text-lg
    leading-6
    md:text-3xl
    md:leading-10
    tracking-normal
"
                                >
                                    discuss finishing touches
                                </div>
                                <div
                                    className="StepsToBookAnEvent_content
                                    my-5
                                    mx-auto
                                    text-left
                                    w-full
                                    text-xs
                                    leading-6
                                    md:text-base
                                    md:leading-8
                                    tracking-normal
                                    text-[#000]
                                    }
                                    "
                                >
                                    Finalize the menu one month before the event and confirm the final count of the guests and floor plan two weeks before the event.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="button venue-btn md:w-3/5" href="/venue">
                    View More
                </a>
            </section>

            {/* Highlights */}
            <section className={`${'bannerContainer'} py-10 ${'outlineContent'} container`}>
                <div className="outline-content relative overflow-y-hidden">
                    <div className="relative">
                        <Image
                            alt="highlight"
                            src={"/assets/homepage/highLights/Highlights_375.webp"}
                            width={425}
                            height={369}
                            layout="responsive"
                            className=" sm:hidden max-w-[100%]    w-full  h-full  absolute  top-0  left-0  z-[-1]  object-contain "
                            // style={{ width1: "100%", height: "100%" }}
                            style={{
                                filter: "brightness(1)",
                                width: "100% !important",
                                height: "100% !important",
                            }}
                        />
                        <Image
                           alt="highlight"
                            width={768}
                            height={600}
                            src={"/assets/homepage/highLights/Highlights_768.jpg"}
                            className="xl:hidden sm:block hidden rounded-xl  max-w-[100%] w-full h-full absolute top-0 left-0 z-[-1] object-contain "
                            layout="responsive"
                        />
                        <Image
                            alt="highlight"
                            width={1280}
                            height={1044}
                            layout="responsive"
                            src={"/assets/homepage/highLights/Highlights_1280.jpg"}
                            className="xl:block 2xl:hidden hidden rounded-xl  max-w-[100%] w-full h-full  absolute top-0 left-0 z-[-1] object-contain"
                            style={{ width: "100% !important", height: "100% !important" }}
                        />
                        <Image
                        alt="highlight"
                            width={1920}
                            height={1500}
                            layout="responsive"
                            src={"/assets/homepage/highLights/Highlights_1920.jpg"}
                            className="2xl:block hidden rounded-xl  max-w-[100%]  w-full h-full absolute top-0 left-0 z-[-1] object-contain "
                        />
                        {/* <picture>
                            <source media="(min-width: 1920px)" srcSet="/assets/homepage/highLights/Highlights_1920.webp" type="image/webp" />
                            <source media="(min-width: 1920px)" srcSet="/assets/homepage/highLights/Highlights_1920.jpg" />
                            <source media="(min-width: 1280px)" srcSet="/assets/homepage/highLights/Highlights_1280.webp" type="image/webp" />
                            <source media="(min-width: 1280px)" srcSet="/assets/homepage/highLights/Highlights_1280.jpg" />
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_768.webp" type="image/webp" />
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_768.jpg" />
                            <source srcSet="/assets/homepage/highLights/Highlights_375.webp" type="image/webp" />
                            <img className="highlights_image ls-is-cached lazyloaded" src="/assets/homepage/highLights/Highlights_375.jpg" alt title />
                        </picture> */}
                    </div>

                    <div className="highlights_section_wrapper  pl-4 pr-4 pt-16 md:pt-40 lg:w-3/5 lg:pt-16">
                        <h2
                            className={`text-xl font-normal sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel]  before:content-[url(https://aurorabanquethall.com/_next/static/media/Diamond.9ed26887ed10ae24d374b45f5b347613.svg)]  before:text-[#d5af80]  before:w-[18px]  before:mb-3   before:block  before:leading-[1]  before:2xl:w-[18px]  after:content-[" "] after:h-[1px] after:bg-[#d5af80] after:w-1/5 after:mt-3 after:mb-5
                    
                    // before:transform: rotate(0turn); // before:transition: transform 1.9s ease;]
                
                    // after:transition: width 1.9s ease
                    `}
                        >
                            Highlights
                        </h2>
                        <div className="text_appear down show overflow-hidden">
                            <p className="highlights_description mb-0 mx-0 text-left text-xs leading-8 font-normal tracking-normal  text-[#7d7d7d] md:text-sm md:leading-8">
                                With state of the art technologies and first class service, Aurora was designed from the ground up to make your event the most
                                memorable. We have spent countless hours thinking about all the details and enhancing this beautiful venue with features so you can
                                concentrate on what is more important: having an amazing time with your guests. Some of Aurora’s most popular highlights include the
                                following
                            </p>
                        </div>


                    </div>

                    {/* Accordian */}
                    <div className="highlights_list show  mt-8 pl-1  pr-4 pb-12 md:mt-24 md:pl-3  md:pr-7 md:pb-24 lg:mt-24 lg:pl-6 lg:pr-6 lg:flex lg:flex-wrap md:space-y-8 lg:space-y-0 lg:gap-2">
                        <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                            <div className="hl_card  flex flex-row items-start">
                                <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_LaserLightShow.svg" />
                                        <img src="/assets/homepage/highLights/Highlights_LaserLightShow.svg" className=" ls-is-cached lazyloaded" />
                                    </picture>
                                </div>
                                <div className="hl_content ml-3 mr-3 flex-auto md:ml-6">
                                    <div
                                        className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center lg:hidden md:text-2xl ${accordian ? "min-h-[10px" : ""
                                            }`}
                                        style={{
                                            transition: "min-height .6s ease 0s",
                                        }}
                                    >
                                        laser light show
                                    </div>
                                    <div
                                        className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                                        style={{ transition: "padding-top .6s ease 0s" }}
                                    >
                                        <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                            Grand Venue by day. Club at night. Create amazing atmospheres and visuals for your event.
                                        </p>
                                    </div>
                                    <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">laser light show</div>
                                    <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                                        Grand Venue by day. Club at night. Create amazing atmospheres and visuals for your event.
                                    </p>
                                </div>
                                <div
                                    className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                                        }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                                    onClick={() => {
                                        setaccordian(!accordian);
                                    }}
                                // style={{ transition: "transform .6s ease 0s" }}
                                />
                            </div>
                        </div>
                        <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                            <div className="hl_card  flex flex-row items-start">
                                <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_LiveCam.svg" />
                                        <img src="/assets/homepage/highLights/Highlights_LiveCam.svg" className=" ls-is-cached lazyloaded" />
                                    </picture>
                                </div>
                                <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                                    <div
                                        className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                            }`}
                                        style={{
                                            transition: "min-height .6s ease 0s",
                                        }}
                                    >
                                        Live Cam
                                    </div>
                                    <div
                                        className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden  ${accordian ? "pt-12" : ""}`}
                                        style={{ transition: "padding-top .6s ease 0s" }}
                                    >
                                        <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                            Never miss another moment.{" "}
                                        </p>
                                    </div>
                                    <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black ">Live Cam</div>
                                    <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                                        Grand Venue by day. Club at night. Create amazing atmospheres and visuals for your event.
                                    </p>
                                </div>
                                <div
                                    className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                                        }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                                    onClick={() => {
                                        setaccordian(!accordian);
                                    }}
                                // style={{ transition: "transform .6s ease 0s" }}
                                />
                            </div>
                        </div>
                        <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                            <div className="hl_card  flex flex-row items-start">
                                <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_CurvedLEDStageScreen.svg" />
                                        <img src="/assets/homepage/highLights/Highlights_Standard_CurvedLEDStageScreen.svg" className=" ls-is-cached lazyloaded" />
                                    </picture>
                                </div>
                                <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                                    <div
                                        className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                            }`}
                                        style={{
                                            transition: "min-height .6s ease 0s",
                                        }}
                                    >
                                        curved led stage screen
                                    </div>
                                    <div
                                        className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                                        style={{ transition: "padding-top .6s ease 0s" }}
                                    >
                                        <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                            curved led stage screen{" "}
                                        </p>
                                    </div>
                                    <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">
                                        curved led stage screen
                                    </div>
                                    <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                                        Display anything you'd like across our giant curved LED screen.
                                    </p>
                                </div>
                                <div
                                    className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                                        }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                                    onClick={() => {
                                        setaccordian(!accordian);
                                    }}
                                // style={{ transition: "transform .6s ease 0s" }}
                                />
                            </div>
                        </div>
                        <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                            <div className="hl_card  flex flex-row items-start">
                                <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_TailoredAudioSystem.svg" />
                                        <img src="/assets/homepage/highLights/Highlights_Standard_TailoredAudioSystem.svg" className=" ls-is-cached lazyloaded" />
                                    </picture>
                                </div>
                                <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                                    <div
                                        className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                            }`}
                                        style={{
                                            transition: "min-height .6s ease 0s",
                                        }}
                                    >
                                        tailored audio system
                                    </div>
                                    <div
                                        className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                                        style={{ transition: "padding-top .6s ease 0s" }}
                                    >
                                        <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                            Our sound system is specially designed to project music only where you want it to go.{" "}
                                        </p>
                                    </div>
                                    <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">
                                        tailored audio system
                                    </div>
                                    <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                                        Our sound system is specially designed to project music only where you want it to go.
                                    </p>
                                </div>
                                <div
                                    className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                                        }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                                    onClick={() => {
                                        setaccordian(!accordian);
                                    }}
                                // style={{ transition: "transform .6s ease 0s" }}
                                />
                            </div>
                        </div>
                        <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                            <div className="hl_card  flex flex-row items-start">
                                <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_FogMachine.svg" />
                                        <img src="/assets/homepage/highLights/Highlights_FogMachine.svg" className=" ls-is-cached lazyloaded" />
                                    </picture>
                                </div>
                                <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                                    <div
                                        className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                            }`}
                                        style={{
                                            transition: "min-height .6s ease 0s",
                                        }}
                                    >
                                        fog machine
                                    </div>
                                    <div
                                        className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                                        style={{ transition: "padding-top .6s ease 0s" }}
                                    >
                                        <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                            Walk on clouds with our massive fog machine.{" "}
                                        </p>
                                    </div>
                                    <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">fog machine</div>
                                    <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                                        Walk on clouds with our massive fog machine.{" "}
                                    </p>
                                </div>
                                <div
                                    className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                                        }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                                    onClick={() => {
                                        setaccordian(!accordian);
                                    }}
                                // style={{ transition: "transform .6s ease 0s" }}
                                />
                            </div>
                        </div>
                        <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                            <div className="hl_card  flex flex-row items-start">
                                <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_ThemeSpecificLighting.svg" />
                                        <img src="/assets/homepage/highLights/Highlights_Standard_ThemeSpecificLighting.svg" className=" ls-is-cached lazyloaded" />
                                    </picture>
                                </div>
                                <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                                    <div
                                        className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                            }`}
                                        style={{
                                            transition: "min-height .6s ease 0s",
                                        }}
                                    >
                                        theme specific lighting
                                    </div>
                                    <div
                                        className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden  ${accordian ? "pt-12" : ""}`}
                                        style={{ transition: "padding-top .6s ease 0s" }}
                                    >
                                        <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                            We provide custom lighting schemes to compliment your event theme.
                                        </p>
                                    </div>
                                    <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">
                                        theme specific lighting
                                    </div>
                                    <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                                        We provide custom lighting schemes to compliment your event theme.{" "}
                                    </p>
                                </div>
                                <div
                                    className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                                        }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                                    onClick={() => {
                                        setaccordian(!accordian);
                                    }}
                                // style={{ transition: "transform .6s ease 0s" }}
                                />
                            </div>
                        </div>
                        <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                            <div className="hl_card  flex flex-row items-start">
                                <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_InteractiveProjector.svg" />
                                        <img src="/assets/homepage/highLights/Highlights_Standard_InteractiveProjector.svg" className=" ls-is-cached lazyloaded" />
                                    </picture>
                                </div>
                                <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                                    <div
                                        className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                            }`}
                                        style={{
                                            transition: "min-height .6s ease 0s",
                                        }}
                                    >
                                        interactive projector
                                    </div>
                                    <div
                                        className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                                        style={{ transition: "padding-top .6s ease 0s" }}
                                    >
                                        <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                            Enhance your experience with custom graphics and animations to project all across the dance floor.
                                        </p>
                                    </div>
                                    <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">
                                        interactive projector
                                    </div>
                                    <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                                        Enhance your experience with custom graphics and animations to project all across the dance floor.{" "}
                                    </p>
                                </div>
                                <div
                                    className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                                        }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                                    onClick={() => {
                                        setaccordian(!accordian);
                                    }}
                                // style={{ transition: "transform .6s ease 0s" }}
                                />
                            </div>
                        </div>
                        <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                            <div className="hl_card  flex flex-row items-start">
                                <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_HazeMachine.svg" />
                                        <img src="/assets/homepage/highLights/Highlights_Standard_HazeMachine.svg" className=" ls-is-cached lazyloaded" />
                                    </picture>
                                </div>
                                <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                                    <div
                                        className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                            }`}
                                        style={{
                                            transition: "min-height .6s ease 0s",
                                        }}
                                    >
                                        haze machine
                                    </div>
                                    <div
                                        className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                                        style={{ transition: "padding-top .6s ease 0s" }}
                                    >
                                        <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                            Create artificial clouds and atmospheric effects with our hazer.
                                        </p>
                                    </div>
                                    <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">haze machine</div>
                                    <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                                        Create artificial clouds and atmospheric effects with our hazer.
                                    </p>
                                </div>
                                <div
                                    className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                                        }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                                    onClick={() => {
                                        setaccordian(!accordian);
                                    }}
                                // style={{ transition: "transform .6s ease 0s" }}
                                />
                            </div>
                        </div>
                        <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                            <div className="hl_card  flex flex-row items-start">
                                <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                                    <picture>
                                        <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_Streaming.svg" />
                                        <img src="/assets/homepage/highLights/Highlights_Standard_Streaming.svg" className=" ls-is-cached lazyloaded" />
                                    </picture>
                                </div>
                                <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                                    <div
                                        className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                            }`}
                                        style={{
                                            transition: "min-height .6s ease 0s",
                                        }}
                                    >
                                        streaming
                                    </div>
                                    <div
                                        className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                                        style={{ transition: "padding-top .6s ease 0s" }}
                                    >
                                        <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                            Who said guests are only those in the hall? Stream your event live and have your guests tune in on Facebook, YouTube, and
                                            Skype.
                                        </p>
                                    </div>
                                    <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">streaming</div>
                                    <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                                        Who said guests are only those in the hall? Stream your event live and have your guests tune in on Facebook, YouTube, and Skype.
                                    </p>
                                </div>
                                <div
                                    className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                                        }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                                    onClick={() => {
                                        setaccordian(!accordian);
                                    }}
                                // style={{ transition: "transform .6s ease 0s" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub News Section */}
            <div
                className="outline-content subs_news__section mt-16 relative px-4 py-8 before:content-[''] before:block before:bg-[#2f4d4b] before:translate-y-[-30px] before:h-[1px] before:w-full after:content-[''] after:absolute after:block after:bg-[#2f4d4b] after:left-0 after:bottom-0 after:h-[50%] after:w-full after:z-0
            md:px-12
            "
            >
                <div className="subs_news__content relative z-[1] py-8 px-5 md:px-8 bg-[#faf7f2]">
                    <h4 className="subs_news__title m-0 font-[Cinzel] text-lg leading-6 text-[#2f4d4b] text-center md:text-4xl">subscribe to our newsletter</h4>
                    <div className="text_appear down show overflow-hidden">
                        <p className="subs_news__text mt-5 mx-0 mb-0 text-center text-xs leading-5 tracking-normal text-[#2f4d4b] md:text-sm md:leading-6">
                            Stay up to date on our latest event and new additions to Aurora. We promise not to spam you with emails, but provide valuable
                            information to you and fill you in on any updates we may have for our current and future clients. Sign up for our newsletter below!
                        </p>
                    </div>
                    <form className="subs_news__form">
                        <div className="MuiFormControl-root MuiTextField-root subs_news__input mt-1 w-full border-0 m-0 inline-flex relative p-0 flex-col align-top">
                            <label
                                className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated Mui-required Mui-required top-0 left-0 absolute translate-x-0 translate-y-6 scale-100 block origin-top-left text-[#0000008a] p-0 text-base font-normal leading-normal tracking-[0.0098]"
                                data-shrink="false"
                            >
                                Enter your email
                                <span
                                    aria-hidden="true"
                                    className="MuiFormLabel-asterisk MuiInputLabel-asterisk text-[#0000008a] p-0 text-base font-normal leading-normal tracking-[0.0098]"
                                >
                                    {/* */}*
                                </span>
                            </label>
                            <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl mt-4 relative text-[#0000008a] p-0  font-normal leading-normal tracking-[0.0098] items-center cursor-text inline-flex text-base before:content-['\00a0'] before:absolute before:left-0 before:right-0 before:bottom-0 before:border-b before:border-[#0000006b] before:pointer-events-none after:absolute after:left-0 after:right-0 after:bottom-0 after:border-b after:border-[#0000006b] after:pointer-events-none after:scale-x-0">
                                <input
                                    type="email"
                                    aria-invalid="false"
                                    required
                                    className="MuiInputBase-input MuiInput-input  width-full border-0 h-[1.1876em] m-0 block pt-2 px-0 pb-2 min-w-0 bg-none box-content tracking-normal"
                                    style={{ background: "none" }}
                                />
                            </div>
                        </div>
                        <button type="submit" className="button subs_news__btn max-w-[21.5rem] " style={{ marginTop: "20px" }}>
                            subscribe
                        </button>
                    </form>
                    <div className="subs_news__form mt-4 block" />
                </div>
            </div>

            {/* Footer */}

        </>
    );
};

export default Hero;
