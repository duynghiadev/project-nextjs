import { type } from "@testing-library/user-event/dist/type";
import { motion } from "framer-motion";
import React from 'react';
import bussiness from '../../assets/bussiness.png';
import cssLogo from '../../assets/css.png';
import ecommerce from '../../assets/ecommerce.png';
import expressLogo from '../../assets/expressjs.png';
import htmlLogo from '../../assets/html.png';
import jsLogo from '../../assets/js.png';
import mernstackImg from '../../assets/mernstack.png';
import mongoLogo from '../../assets/mongo.png';
import muiLogo from '../../assets/MUI.png';
import nextflix from '../../assets/nextflix.png';
import nextjsLogo from '../../assets/nextjs.png';
import reactLogo from '../../assets/react.png';
import sassLogo from '../../assets/sass.png';
import vpn from '../../assets/vpn.png';
import ProjectItem from './ProjectItem';


const listCard = [
    {
        img: mernstackImg,
        title: "NEXTJS E-COMMERCE",
        date: "March 1 , 2022",
        "desc": "This project use NextJS to build fullstack application. Authentication , authorization base on JWT , Simple CRUD ,  Upload Image , integrated Paypal. Frontend , i use RHK to control the form , MUI V5 to build-in web , RTK to manage global state...",
        listTechIcon: [nextjsLogo , mongoLogo , expressLogo , muiLogo],
        link: "https://next-ecommerce-kappa-two.vercel.app/"
    },
    {
        img: ecommerce,
        title: "E-COMMERCE SHOP USING PUBLIC API",
        date: "January 14 , 2022",
        "desc": "This project only about frontend. I build-in application UI base on React , Css by SASS , MUI. Control form/field by RHK , manage global state by RTK. Product in this project using by public API.",
        listTechIcon: [reactLogo , sassLogo , muiLogo],
        link: "https://fakeshop-woad.vercel.app/"
    },
    {
        img: nextflix,
        title: "CLONE NEXTFLIX",
        date: "Nov 27 , 2021",
        desc: "Mini-nextflix use React to build UI. You can watch trailer movie.",
        listTechIcon: [reactLogo , sassLogo],
        link: "https://nextflixclone-eight.vercel.app/"
    },
    {
        img: vpn,
        title: "LASLES VPN (CUT FIGMA TO HTML)",
        date: "Sep 22 , 2021",
        desc: "This is my 2nd-project cut Figma file to html.Using css to style , Javascript to make application dynamic.",
        listTechIcon: [htmlLogo , cssLogo , jsLogo],
        link: "https://ldp-github.vercel.app/"
    },
    {
        img: bussiness,
        title: "BUSSINESS (CUT FIGMA TO HTML)",
        date: "Oct 29 , 2021",
        desc: "This is my 1nd-project cut Figma file to html.Using css to style , Javascript to make application dynamic.",
        listTechIcon: [htmlLogo , cssLogo , jsLogo],
        link: "https://hwangsoon14.github.io/"
    },
]

const Project = () => {


    return (
        <div className='text-white container mx-auto px-8 w-screen h-screen bg-transparent absolute z-10 mt-[90vh]'>
            <div className='flex items-center justify-center'>
                <h1 className='mt-5 text-[46px] font-bold text-center relative before:content-[""] before:absolute before:bg-red-400 before:w-full before:h-1 before:bottom-0 before:left-0'>My Project</h1>
            </div>
            {/* cart list */}
            <div className='flex flex-col items-center mt-20'>
                {listCard.map((item , idx) => (
                    <ProjectItem key={idx} link={item.link} img={item.img} title={item.title} desc={item.desc} date={item.date} listTechIcon={item.listTechIcon}/>
                ))}
            </div>
        </div>
    );
};

export default Project; 