import React from 'react'
import Image from "next/image"
const Footer = () => {
    return (
        <footer
            className="outline-content footer_section pt-7 pb-5 bg-[#2f4d4b] px-10 block md:relative md:top-[-1] md:mt-16"
            id="main-footer before:scale-x-1 block absolute left-0 top-0 w-full h-[1px] bg-[#d5af8080] px-4"
        >
            <div
                className="fot__logo_wrapper show relative py-5 px-0 before:content-[''] before:block before:absolute    before:left-0    before:top-0    before:w-full    before:h-[1px]    before:bg-[rgba(213,175,128,.5019607843)]    before:scale-x-1    before:origin-left
    "
                style={{ transition: "transform 1.6s ease" }}
            >
                <img className="fot__logo ls-is-cached lazyloaded my-0 mx-auto w-[52.478134%] block md:w-auto" src="assets/images/Footer_Logo.svg" alt="footer logo" />
            </div>
            <div
                className="page_social_media_wrapper show   before:content-[''] before:block before:absolute    before:left-0    before:top-0    before:w-full    before:h-[1px]    before:bg-[rgba(213,175,128,.5019607843)]    before:scale-x-1    before:origin-left
                    after:content-[''] after:block   after:w-[1px] after:bg-[rgba(213,175,128,.5019607843)]    after:scale-y-1    after:origin-top
    after:self-stretch after:order-2  
    md:after:mx-8
     md:flex md:relative md:justify-center md:pt-14 md:pb-10
     "
            >
                <div
                    className="page_sections_wrapper show relative justify-between flex pt-8 pb-8 items-start  md:order-1 md:p-0 md:w-3/5 justify-center"
                    style={{ transition: "transform 1.6s ease" }}
                >
                    <div className="page_sections first_col order-1 flex justify-start items-start flex-col md:mr-6">
                        <a className="section_items text-[#dfaf80] md:text-lg md:leading-lg mt-2 text-xs leading-4 tracking-none" href="/">
                            HOME
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/venue">
                            VENUE
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/menu">
                            MENU
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/events">
                            EVENTS
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/upcoming-events">
                            UPCOMING EVENTS
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/gallery">
                            GALLERY
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/about-us">
                            ABOUT US
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/contact-us">
                            CONTACT
                        </a>
                    </div>
                    <div className="page_sections second_col order-3 flex justify-start items-start flex-col">
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/events#weddings">
                            WEDDINGS
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/events#birthdays">
                            BIRTHDAY
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/events#events-by-aurora">
                            EVENTS BY AURORA
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/events#off-site-events">
                            OFF SITE EVENTS
                        </a>
                        <a className="section_items text-[#dfaf80] mt-2 text-xs leading-4 tracking-none" href="/events#corporate-events">
                            CORPORATE EVENTS
                        </a>
                    </div>
                </div>
                <div
                    className="cont_soc_medias__wrapper show py-8 px-0 relative before:content-[''] before:block before:absolute    before:left-0    before:top-0    before:w-full    before:h-[1px]    before:bg-[rgba(213,175,128,.5019607843)]    before:scale-x-1    before:origin-left md:p-0 md:order-3 md:w-[50%] md:before:hidden "
                    style={{ transition: "transform 1.6s ease" }}
                >
                    <div className="cont_soc_medias__group">
                        <ul className="cont_soc_medias__list first_col m-0 p-0 space-y-2">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="tel:+18183527748"
                                className="list_item w-max block text-[#d5af80] text-xs leading-4  text-normal"
                            >
                                <li className="flex justify-center items-center">
                                    <svg
                                        className="MuiSvgIcon-root icon w-5 h-5 mr-2 align-botto text-sm text-center fill-[#d5af80]"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                    <span className="list_text">(818) 352 - 7748</span>
                                </li>
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="mailto:events@aurorabanquethall.com"
                                className="list_item w-max block text-[#d5af80] text-xs leading-4  text-normal"
                            >
                                <li className="flex justify-center items-center">
                                    <svg
                                        className="MuiSvgIcon-root icon w-5 h-5 mr-2 align-botto text-xs text-center fill-[#d5af80]"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                    <span className="list_text">events@aurorabanquethall.com</span>
                                </li>
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="http://maps.google.com/?q=7179 Foothill Blvd, Tujunga, CA 91042"
                                className="list_item w-max block text-[#d5af80] text-xs leading-4  text-normal"
                            >
                                <li className="flex justify-center items-center">
                                    <svg
                                        className="MuiSvgIcon-root icon w-5 h-5 mr-2 align-botto text-xs text-center fill-[#d5af80]"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    <span className="list_text">7179 Foothill Blvd, Tujunga, CA 91042</span>
                                </li>
                            </a>
                        </ul>
                        <ul className="cont_soc_medias__list second_col mt-8 p-0 space-y-2">
                            <a
                                className="list_item w-max block text-[#d5af80] text-xs leading-4  text-normal"
                                href="https://www.instagram.com/aurorabanquethall/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li>
                                    <Image src={"/assets/icons/youtube.svg"} width={25} height={25} className="inline mr-2" alt='insta-logo'></Image>
                                    <span className="list_text inline">INSTAGRAM</span>
                                </li>
                            </a>
                            <a
                                className="list_item w-max block text-[#d5af80] text-xs leading-4  text-normal"
                                href="https://www.facebook.com/aurorabanquethall/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li>
                                    <Image src={"/assets/icons/icons8-facebook.svg"} width={25} height={25} className="inline mr-2"  alt='facebook-logo'></Image>
                                    <span className="list_text inline">FACEBOOK</span>
                                </li>
                            </a>

                            <a
                                className="list_item w-max block text-[#d5af80] text-xs leading-4  text-normal"
                                href="https://www.youtube.com/channel/UC2n_P9O5TgQO-E-gfNQmrew"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li>
                                    <Image src={"/assets/icons/icons8-youtube.svg"} width={25} height={25} className="inline mr-2" alt='youtube-logo'></Image>
                                    <span className="inline list_text">YOUTUBE</span>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copy_right_and_terms flex flex-col-reverse md:flex-row md:justify-between">
                <h5
                    className="copy_right m-0 py-1 px-0  
                    text-[#d5af80] text-left tracking-noramal leading-4  text-[8px] md:text-sm"
                >
                    COPYRIGHT © 2020 AURORA BANQUET HALL. POWERED BY{/* */}&nbsp;
                    <a className="link" href="https://eachbase.com/" target="_blank" rel="noreferrer">
                        EACHBASE
                    </a>
                </h5>
                <div className="terms py-1 px-0 text-[8px] leading-3  mb-2 md:text-sm md:space-x-4">
                    <a className="link text-[#d5af80]" href="/terms-conditions">
                        terms &amp; conditions
                    </a>
                    <a className="link text-[#d5af80]" href="/privacy-policy">
                        privacy policy
                    </a>
                </div>
            </div>
        </footer>

    )
}

export default Footer