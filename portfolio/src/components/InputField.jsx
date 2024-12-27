import React from 'react';

const InputField = (props) => {

    const {name , placeholder} = props;
    return (
        <label className="relative block mx-2">
        <span className="sr-only">{name}</span>
        {/* <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
        </span> */}
        <input className="placeholder:italic placeholder:font-bold placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-5 pr-3 shadow-sm focus:outline-none focus:border-1 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder={placeholder} type="text" name={name}/>
        </label>
    );
};

export default InputField;