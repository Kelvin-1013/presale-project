import React,{useRef,useState,useEffect} from "react";
import Card from "./card";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselImage = () => {
    const carousel = useRef(null);
    const [currentIndex,setCurrentIndex] = useState(0);
    const [carouselWidth,setCarouselWidth] = useState("100%");

    const handleChange = (curIndex) => {
        setCurrentIndex(curIndex);
    };

    const handleIndicatorClick = (targetIndex) => {
        if(carousel) {
            carousel.current?.moveTo(targetIndex);
        }
    };

    const data = [
        {url: "monkey/1.png",title: "Transforming Our Trading"},
        {url: "monkey/2.png",title: "Transforming Our Trading"},
        {url: "monkey/3.png",title: "Transforming Our Trading"},
    ];

    const handleJoinCommunity = () => {
        if(typeof window !== "undefined") {
            window.open('https://discord.gg/2aNj737F',"_blank");
        }
    };

    return (
        <>
            <div className="w-full overflow-hidden pt-1">
                <div className="z-10 absolute left-5 top-3/4 -translate-y-1/2 px-10 font-bold text-5xl text-white">
                    For the clean planet! <br />
                    <button
                        className="relative z-10 left-5 bottom-full px-4 py-2 text-white font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 mt-10"
                        onClick={handleJoinCommunity}
                    >
                        Join our community!
                    </button>

                </div>
                <Carousel
                    axis="horizontal"
                    width="100%"
                    interval={1500}
                    autoPlay={true}
                    showStatus={true}
                    showArrows={true}
                    ref={carousel}
                    showIndicators={false}
                    showThumbs={false}
                    onChange={handleChange}
                >
                    {data.map((item,index) => (
                        <Card key={index} title={item.title} url={item.url} carouselWidth={carouselWidth} />
                    ))}
                </Carousel>

                <div className="flex gap-3 flex-row justify-center items-center -z-30">
                    {[0,1,2].map((item) => (
                        <div
                            key={item}
                            className={`h-[14px] w-[14px] cursor-pointer rounded-full ${currentIndex === item ? "bg-[#40ff00]" : "bg-[#0D6EFD]"}`}
                            onClick={() => handleIndicatorClick(item)}
                        ></div>
                    ))}
                </div>
            </div >
        </>
    );
};

export default CarouselImage;
