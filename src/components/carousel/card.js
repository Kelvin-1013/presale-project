"use client"
import Image from "next/image"
const Card = ({url,title,carouselWidth}) => {
    return (
        <div className=" relative w-full h-auto">
            {/* <div className=" absolute insert-0 bg-black bg-opacity-30 rounded-lg">{title}</div> */}
            <Image src={`/${url}`} width={1500} height={1500} alt="" className="rounded-lg bg-opacity-30" />
        </div>

    );
};

export default Card;