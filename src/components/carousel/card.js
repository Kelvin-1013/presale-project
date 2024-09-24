"use client"
import Image from "next/image"
const Card = ({url,title,carouselWidth}) => {
    return (
        <div className="absolute relative w-full h-auto brightness-50">
            {/* <div className=" brightness-50 opacity-20 bg-opacity-30 rounded-lg">{title}</div> */}
            <Image src={`/${url}`} width={1500} height={1500} alt="" className="rounded-lg bg-opacity-30" />
        </div>

    );
};

export default Card;