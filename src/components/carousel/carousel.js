"use client"
import React,{useRef,useState,useEffect} from "react";
import Card from "./card"
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
        {
            url: "monkey/1.png",
            title: "Transforming Our Trading",
        },
        {
            url: "monkey/2.png",
            title: "Transforming Our Trading",
        },
        {
            url: "monkey/3.png",
            title: "Transforming Our Trading",
        },
    ];



    return (
        <>
            <div className="w-full overflow-hidden pt-1">
                <Carousel
                    axis="horizontal"
                    width="100%"
                    interval={3000}
                    autoPlay={true}
                    showStatus={true}
                    showArrows={true}
                    ref={carousel}
                    showIndicators={false}
                    showThumbs={false}
                    onChange={handleChange}
                >
                    {data.map((item,index) => {
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                url={item.url}
                                carouselWidth={carouselWidth}
                            />
                        );
                    })
                    }
                </Carousel>
            </div >
            <div className="mt-10 flex w-full justify-center">
                <div className="flex gap-3 flex-row justify-center items-center">
                    {[0,1,2].map((item) => {
                        return (
                            <div
                                key={item}
                                className={`h-[14px] w-[14px] cursor-pointer rounded-full ${currentIndex === item ? "bg-[#40ff00]" : "bg-[#0D6EFD]"
                                    }`}
                                onClick={() => handleIndicatorClick(item)}
                            ></div>
                        );
                    })}
                </div>
            </div>

        </>
    );
};
export default CarouselImage