
import React from 'react'
const InputGroup = ({ onChangeFunc, itemLabel, placeholder, type }) => {
    return (
        <div className= ''>
            <div className='flex flex-col items-center px-1 my-2 align-middle py-auto lg:flex-row sm:px-3 md:px-5 lg:justify-between '>
                <h1 className={"text-black md:text-2xl lg:w-[15vw] sm:text-xl py-auto text-lg font-medium"}>{itemLabel}</h1>
                <input onChange={onChangeFunc} type={type} className={"h-10 lg:w-[25vw] px-2 md:self-start rounded-lg bg-gray-300 focus:outline outline-green-500 ring-2 border text-black text-xl"} placeholder = {placeholder}/>
            </div>
         </div>
    )
}
export default InputGroup;
