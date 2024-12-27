import React from 'react';
import { AiFillFacebook , AiFillGithub   , AiFillInstagram , AiOutlineHeart} from "react-icons/ai";


const Footer = () => {
    return (
        <div className='container mx-auto px-8 absolute mt-[2900px] h-[250px] pt-10 z-10 bg-[#111111]'>
            <div className='w-full py-4 flex items-center justify-center '>
                <div className='w-[40px] h-[40px] rounded-[50%]'>
                    <img src="https://caldera-portfolio.vercel.app/assets/img/logo/logo-white.svg" alt="logo" className='w-full h-full object-cover'/>
                </div>
                <span className='inline-block font-bold text-white text-xl ml-4 text'>Hwang Soon</span>
            </div>
            <div className='w-full py-4 flex items-center justify-center '>
                <a className='inline-block p-2 text-white mx-2' href="https://www.facebook.com/hoafngsown/">
                    <AiFillFacebook fontSize={22} />
                </a>
                <a className='inline-block p-2 text-white mx-2' href="https://github.com/HwangSoon14">
                    <AiFillGithub fontSize={22} />
                </a>
                <a className='inline-block p-2 text-white mx-2' href="https://www.instagram.com/hoafng.sown/">
                    <AiFillInstagram fontSize={22} />
                </a>
            </div>
            <span className='block text-center font-bold text-gray-500 flex items-center justify-center'>Thank u for visit my website <AiOutlineHeart fontSize={20} className="ml-2"/> </span>
        </div>
    );
};

export default Footer;