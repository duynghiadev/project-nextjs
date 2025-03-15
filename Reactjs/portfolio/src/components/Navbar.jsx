import React from 'react';
import LogoImg from '../assets/logo.png'
const Navbar = () => {

    const handleNavigate = (position) => {
        window.scrollTo(0 , position)
    }
    
    const renderList = () => {
        return (
            <ul className='flex items-center justify-around text-white py-2 mr-4 min-w-[50%]'>
                <li className='relative font-bold text-xl' onClick={() => handleNavigate(0)}>
                       
                        <span className='nav-link'>HOME</span>
                </li>
                <li className='relative font-bold text-xl' onClick={() => handleNavigate(720)}>
                       <span className='nav-link'>PROJECT</span>
                </li>
                <li className='relative font-bold text-xl' onClick={() => handleNavigate(2300)}>
                       <span className='nav-link'>CONTACT</span>
                </li>
            </ul>
        );
    }

  

    return (
        <div className='w-full h-[100px] sticky'>
            <div className='container mx-auto px-8 h-full flex justify-between items-center'>
                {/* LOGO */}
                <div className='py-2 px-3'>
                   <img src={LogoImg} alt="logo" className='w-full h-full object-cover'/>
                </div>
                {/* render list */}
                    {renderList()}
            </div>
        </div>
    );
};

export default Navbar;