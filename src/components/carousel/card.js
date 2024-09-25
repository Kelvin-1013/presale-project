"use client"
import Image from "next/image"
const Card = ({url,title,carouselWidth}) => {
    return (
        <div className="relative w-full h-auto ">
            {/* brightness-50"> */}
            {/* <div className=" brightness-50 opacity-20 bg-opacity-30 rounded-lg">{title}</div> */}
            <Image src={`/${url}`} width={1500} height={1500} alt="" className="-z-50 rounded-lg" />
        </div>

    );
};

export default Card;