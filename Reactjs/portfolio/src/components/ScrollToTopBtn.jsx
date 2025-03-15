import React from 'react';
import { AiOutlineArrowUp} from "react-icons/ai";

const ScrollToTopBtn = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className='w-[50px] h-[50px] rounded-[50%] bg-cyan-50 fixed z-10 overflow-hidden bottom-[40px] right-[40px] hover:bottom-[43px] hover:bg-red-400 hover:text-white hover:transition-all'>
            <button className='block w-full h-full flex items-center justify-center' onClick={handleScrollToTop}>
                <AiOutlineArrowUp fontSize={26}/>
            </button>
        </div>
    );
};

export default ScrollToTopBtn;