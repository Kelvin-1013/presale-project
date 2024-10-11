import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function App() {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex-1 w-full flex justify-center'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    slidesPerView={1}
                    spaceBetween={10}
                    style={{ width: '375px', height: '200px' }} // Set the width of the Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg p-2 my-5">
                            <div className="relative w-full h-36"> {/* Reduced height for images (70% of h-52) */}
                                <Image
                                    src="/monkey/anouncement_panel.png"
                                    alt="Panel Background"
                                    width={238} // 70% of 340
                                    height={210} // 70% of 300
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-3 flex flex-col justify-center items-center z-10 text-white">
                                <h1 className="text-lg xl:text-md lg:text-sm md:text-xs font-bold text-center text-[#2c6317]">Meme Creation Contest Announcement</h1>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs text-center text-[#2c6317]">Participate in the #TMONKMemeChallenge and win $TMONK tokens.</p>
                                <button className="mt-2 bg-blue-500 text-white md:py-1 px-2 rounded-lg xl:text-lg lg:text-sm md:text-xs sm:text-xs">
                                    Participate
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg p-2 my-5">
                            <div className="relative w-full h-36"> {/* Reduced height for images (70% of h-52) */}
                                <Image
                                    src="/monkey/anouncement_panel.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                                <h1 className="text-lg xl:text-md lg:text-sm md:text-xs font-bold text-center text-[#2c6317]">Win a Property in Alabama!</h1>
                                <div className="text-sm xl:text-xs lg:text-xs md:text-xs text-left text-[#2c6317]">🪙 100,000 TMONK = 1 ticket 🎟</div>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs text-left text-[#2c6317]">🪙 500,000 TMONK = 10 tickets 🎟</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs text-left text-[#2c6317]">🪙 1,000,000 TMONK = 25 tickets 🎟</p>
                                <button className="mt-2 bg-blue-500 text-white md:py-1 px-2 rounded-lg xl:text-lg lg:text-sm md:text-xs sm:text-xs">
                                    Participate
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='flex-1 w-full flex justify-center'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    slidesPerView={1.5}
                    spaceBetween={10}
                    style={{ width: '375px' }} // Set the width of the Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg">
                            <div className="relative w-full h-36"> {/* Reduced height for images */}
                                <Image
                                    src="/monkey/anouncement_card.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center inset-1 z-10 text-white">
                                <p className="text-lg xl:text-base md:text-sm lg:text-base  text-[#831d61]">Why should you enter?</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]"> Having fun creating memes</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]">Be part of real-world mission.</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Reduce carbon emissions</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Make positive change.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg">
                            <div className="relative w-full h-36"> {/* Reduced height for images */}
                                <Image
                                    src="/monkey/anouncement_card.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center inset-1 z-10 text-white">
                                <p className="text-lg xl:text-base md:text-sm lg:text-base  text-[#831d61]">Why should you enter?</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]"> Having fun creating memes</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]">Be part of real-world mission.</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Reduce carbon emissions</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Make positive change.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg">
                            <div className="relative w-full h-36"> {/* Reduced height for images */}
                                <Image
                                    src="/monkey/anouncement_card.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center inset-1 z-10 text-white">
                                <p className="text-lg xl:text-base md:text-sm lg:text-base  text-[#831d61]">Why should you enter?</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]"> Having fun creating memes</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]">Be part of real-world mission.</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Reduce carbon emissions</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Make positive change.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg">
                            <div className="relative w-full h-36"> {/* Reduced height for images */}
                                <Image
                                    src="/monkey/anouncement_card.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center inset-1 z-10 text-white">
                                <p className="text-lg xl:text-base md:text-sm lg:text-base  text-[#831d61]">Why should you enter?</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]"> Having fun creating memes</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]">Be part of real-world mission.</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Reduce carbon emissions</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Make positive change.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg">
                            <div className="relative w-full h-36"> {/* Reduced height for images */}
                                <Image
                                    src="/monkey/anouncement_card.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center inset-1 z-10 text-white">
                                <p className="text-lg xl:text-base md:text-sm lg:text-base  text-[#831d61]">Why should you enter?</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]"> Having fun creating memes</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]">Be part of real-world mission.</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Reduce carbon emissions</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Make positive change.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg">
                            <div className="relative w-full h-36"> {/* Reduced height for images */}
                                <Image
                                    src="/monkey/anouncement_card.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center inset-1 z-10 text-white">
                                <p className="text-lg xl:text-base md:text-sm lg:text-base  text-[#831d61]">Why should you enter?</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]"> Having fun creating memes</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]">Be part of real-world mission.</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Reduce carbon emissions</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Make positive change.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg">
                            <div className="relative w-full h-36"> {/* Reduced height for images */}
                                <Image
                                    src="/monkey/anouncement_card.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center inset-1 z-10 text-white">
                                <p className="text-lg xl:text-base md:text-sm lg:text-base  text-[#831d61]">Why should you enter?</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]"> Having fun creating memes</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]">Be part of real-world mission.</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Reduce carbon emissions</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Make positive change.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg">
                            <div className="relative w-full h-36"> {/* Reduced height for images */}
                                <Image
                                    src="/monkey/anouncement_card.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center inset-1 z-10 text-white">
                                <p className="text-lg xl:text-base md:text-sm lg:text-base  text-[#831d61]">Why should you enter?</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]"> Having fun creating memes</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]">Be part of real-world mission.</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Reduce carbon emissions</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Make positive change.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg">
                            <div className="relative w-full h-36"> {/* Reduced height for images */}
                                <Image
                                    src="/monkey/anouncement_card.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center inset-1 z-10 text-white">
                                <p className="text-lg xl:text-base md:text-sm lg:text-base  text-[#831d61]">Why should you enter?</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]"> Having fun creating memes</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]">Be part of real-world mission.</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Reduce carbon emissions</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Make positive change.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full rounded-lg">
                            <div className="relative w-full h-36"> {/* Reduced height for images */}
                                <Image
                                    src="/monkey/anouncement_card.png"
                                    alt="Panel Background"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-center items-center inset-1 z-10 text-white">
                                <p className="text-lg xl:text-base md:text-sm lg:text-base  text-[#831d61]">Why should you enter?</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]"> Having fun creating memes</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-[#2c6317]">Be part of real-world mission.</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Reduce carbon emissions</p>
                                <p className="text-sm xl:text-xs lg:text-xs md:text-xs  text-black">Make positive change.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
