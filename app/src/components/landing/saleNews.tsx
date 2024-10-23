import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function App() {
    return (
        <div className='flex flex-col items-center '>
            <div className='flex:2'>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper flex:1 "
                    slidesPerView={1} // Show 2 slides at a time
                    spaceBetween={4} // Space between slides
                >
                    <SwiperSlide>
                        <div className="relative w-30 rounded-lg p-2 my-5">
                            <Image
                                src="/monkey/anouncement_panel.webp"
                                alt="Panel Background"
                                width={600}
                                height={300}
                                className="rounded-lg"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                                <h1 className="text-4xl xl:text-3xl lg:text-2xl md:text-sm font-bold text-center text-[#2c6317]">Meme Creation Contest Announcement</h1>
                                <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 inset-20 text-center text-[#2c6317]">Participate in the #TMONKMemeChallenge and win $TMONK tokens.</p>
                                <p className="mt-4 text-xl xl:text-lg lg:text-base text-black mx-20 inset-20">You could walk away with rewards</p>
                                <button className="mt-4 bg-blue-500 text-white md:py-1  px-2 rounded-lg xl:text-xl lg:text-lg md:text-sm sm:text-xs ">
                                    Participate ( Coming soon! )
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-30 rounded-lg p-2 my-5">
                            <Image
                                src="/monkey/anouncement_panel.webp"
                                alt="Panel Background"
                                width={600}
                                height={300}
                                className="rounded-lg"
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                                <h1 className="text-4xl xl:text-3xl lg:text-2xl md:text-sm font-bold text-center text-[#2c6317]">🏡Win a Property in Alabama!🚜</h1>
                                <p className="mt-4 text-center text-2xl xl:text-xl md:text-sm lg:text-lg text-black mx-20 inset-20">Win property in Russell County, Alabama, USA.</p>
                                <div className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 inset-20 text-left text-[#2c6317]">🪙 100,000 TMONK = 1 ticket 🎟 🎟 🎟 🎟</div>
                                <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 inset-20 text-left text-[#2c6317]">🪙 500,000 TMONK = 10 tickets 🎟 🎟 🎟</p>
                                <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 inset-20 text-left text-[#2c6317]">🪙 1,000,000 TMONK = 25 tickets 🎟🎟🎟</p>
                                <button className="mt-4 bg-blue-500 text-white md:py-1  px-2 rounded-lg xl:text-xl lg:text-lg md:text-sm sm:text-xs ">
                                    Participate ( Coming soon! )
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper flex:1 "
                slidesPerView={1.5} // Show 2 slides at a time
                spaceBetween={4} // Space between slides
            >

                <SwiperSlide>
                    <div className="relative w-full rounded-lg ">
                        <Image
                            src="/monkey/anouncement_card.webp"
                            alt="Panel Background"
                            width={600}
                            height={300}
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                            <p className="text-2xl xl:text-xl md:text-sm lg:text-lg mt-4 text-[#831d61]">Why should you enter?</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-4 text-[#2c6317]">Not just having fun creating memes</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-[#2c6317]">Also be part of a real-world mission.</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-black">Reduce carbon emissions</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-black">Make positive change.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full rounded-lg ">
                        <Image
                            src="/monkey/anouncement_card.webp"
                            alt="Panel Background"
                            width={600}
                            height={300}
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                            <p className="text-2xl xl:text-xl md:text-sm lg:text-lg mt-4 text-[#831d61]">Winning Rewards?</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-4 text-[#2c6317]">Earn $TMONK Tokens</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-[#2c6317]">Boost Social Media Presence</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-black">Grow Your Network</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-black">Have Fun</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full rounded-lg ">
                        <Image
                            src="/monkey/anouncement_card.webp"
                            alt="Panel Background"
                            width={600}
                            height={300}
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                            <p className="text-2xl xl:text-xl md:text-sm lg:text-lg mt-4 text-[#831d61]">Pro Tips?</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-4 text-[#2c6317]">Resonates with people</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-[#2c6317]">Engagement boost.</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-black">Hashtags #SaveThePlanet</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-black">Join the community and have fun.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full rounded-lg ">
                        <Image
                            src="/monkey/anouncement_card.webp"
                            alt="Panel Background"
                            width={600}
                            height={300}
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                            <p className="text-2xl xl:text-xl md:text-sm lg:text-lg mt-4 text-[#831d61]">Is it Secure?</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-4 text-[#2c6317]">Liquidity Lockup</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-[#2c6317]">Smart Contract Audits</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-black">Multi-Sig Wallets</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-black">Anti-Rug Pull Measures.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full rounded-lg ">
                        <Image
                            src="/monkey/anouncement_card.webp"
                            alt="Panel Background"
                            width={600}
                            height={300}
                            className="rounded-lg"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                            <p className="text-2xl xl:text-xl md:text-sm lg:text-lg mt-4 text-[#831d61]">TOKEN USE CASES?</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-4 text-[#2c6317]">Primary currency in $TMONK marketplace</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-[#2c6317]">Governance Rights</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-black">Staking and Rewards</p>
                            <p className="text-lg xl:text-base lg:text-sm md:text-xs mt-2 text-black">Access to Premium Features.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
