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
        window.open('https://discord.com/invite/2aNj737F',"_blank");
        // window.open('https://discord.gg/2aNj737F',"_blank");
    };

    return (
        <>
            <div className="-z-50 w-full overflow-hidden pt-1 relative">
                <div className="z-10 absolute xs:left-0 left-5 top-1/2 lg:translate-y-20 xl:translate-y-10 sm:translate-y-1/4 xs:translate-y-1/4 px-10 font-bold text-white text-9xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-lg text-shadow-md flex flex-col items-start">
                    <div className="">For Clean planet!</div>
                    <div className="text-xs hidden md:flex">  <br /><br /></div>
                    <button
                        className="relative   left-5 xs:left-0 xs:py-1 bottom-full px-4 py-2 -translate-y-1/2 text-white font-semibold text-7xl xl:text-5xl lg:text-3xl md:text-xl sm:text-lg xs:text-base bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transition-transform transform hover:scale-105 mt-4 md:mt-8 lg:mt-6 xl:mt-4 hover:shadow-xl hover:shadow-blue-500/50"
                        onClick={handleJoinCommunity}
                    >
                        Join our community!
                    </button>
                    <div className="absolute inset-0  from-transparent to-gray-900 opacity-50"></div>
                </div>
                <Carousel
                    axis="horizontal"
                    width="100%"
                    interval={3000}
                    autoPlay={true}
                    infiniteLoop={true} // This property may be available in some libraries
                    showStatus={false}
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

                <div className="flex gap-3 flex-row justify-center items-start -z-30-translate-y-4">
                    {[0,1,2].map((item) => (
                        <div
                            key={item}
                            className={`h-1 w-4 cursor-pointer rounded-md ${currentIndex === item ? "bg-[#ceff5b]" : "bg-[#58780d]"}`}
                            onClick={() => handleIndicatorClick(item)}
                        ></div>
                    ))}
                </div>
            </div >
        </>
    );
};

export default CarouselImage;
