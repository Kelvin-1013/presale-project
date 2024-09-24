"use client"
import Image from "next/image"
const Card = ({ url, title, carouselWidth }) => {
    return (

        // <div className={`w-[${carouselWidth}px] flex justify-around border-[#0D6EFD] border-[3px] border-opacity-30 rounded-[16px]`}>
        //     <div className="mt-[10px] flex items-center justify-center gap-2 sm:gap-8 w-[80%] flex-col sm:flex-row ">
        //         <div className="flex-col justify-center items-center">
        //             <div className="xl:w-[140px] w-[100px]">
        //                 <Image src={`/${avatar}`} width={200} height={200} alt="" className="rounded-full" />
        //             </div>
        //             <div className="text-[20px] font-bold mt-[10px]">{author}</div>

        //         </div>
        //         <div className="w-full flex flex-col items-center gap-4 py-5">
        //             <h3 className="text-[22px] sm:text-[24px] md:text-[28px] xl:text-[30px] font-bold">{title}</h3>
        //             <p className="text-[14px] md:text-[16px] xl:text-[18px]">{content}</p>
        //             {/* <p className={`text-[20px] text-start font-bold text-color2 ${parseInt(carouselWidth.split("p")[0]) <= 1024 && parseInt(carouselWidth.split("p")[0]) > 875 && "hidden"}`}>{author}</p> */}
        //         </div>
        //     </div>
        // </div>
        <div className=" relative w-full h-[800px]">
            {/* <div className=" absolute insert-0 bg-black bg-opacity-30 rounded-lg">{title}</div> */}
            <Image src={`/${url}`} width={1500} height={1500} alt="" className="rounded-lg bg-opacity-30" />
        </div>

    );
};

export default Card;