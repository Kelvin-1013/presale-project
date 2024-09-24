import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import FaqData from "./FaqData";
import AnimatedOnViewTitle from "../animated/AnimatedOnViewTitleLg";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";


const Faqs = (props) => {

    const [answerIsShown, setAnswerIsShown] = useState(false);

    function toggleAnswerIsShown() {
        setAnswerIsShown(prevAnswerIsShow => !prevAnswerIsShow);
    }

    return (
        <motion.div key={props.id} onClick={toggleAnswerIsShown} layout
            className='w-[80vw]  sm:w-[500px] md:w-[600px] lg:w-[900px] flex flex-row flex-wrap bg-cA text-left p-4 my-2 rounded-2xl cursor-pointer hover:text-cB transition-colors duration-300'
        >
            <motion.h2 layout className={`text-2xl w-[93%] pr-2 sm:w-[95%] ${answerIsShown && ' text-cB'}`} >{props.question} </motion.h2>
            <motion.h2 layout className=" text-3xl w-[7%] sm:w-[5%]   ">{answerIsShown ? <BiCaretDown /> : <BiCaretUp />}</motion.h2>
            {answerIsShown && <motion.div layout
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1, transition: {
                        duration: 1.6
                    }
                }}
                exit={{ opacity: 0 }}
            >
                <motion.p className="text-xl block text-cC pt-2 ">{props.answer}</motion.p>
            </motion.div>}
        </motion.div>

    );
}

const FaqSection = () => {

    const faqElements = FaqData.map(
        faq => {
            return (
                <Faqs key={faq.id} question={faq.question} answer={faq.answer} />
            )
        }
    )

    return (
        <div className="w-full  bg-white mt-[10px] 2xl:px-[145px] xl:px-[120px] lg:px-[80px] md:px-[40px] sm:px-[10px]" id="faq_id">
            <section className="container bg-[#0D6EFD] bg-opacity-5 2xl:px-[117px] rounded-[14px]">
                <div className="w-full container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 font-bold leading-none text-center text-[28px] sm:text-[36px] md:text-[48px]">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-4">
                        <details className="bg-white rounded-[18px] border-[#0D6EFD] border-[3px] border-opacity-30 py-[24px] sm:py-[34px] md:py-[42px] px-[24px] sm:px-[32px] md:px-[38px]">
                            <summary className="outline-none hover:cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#0D6EFD] ">How much money can I make with $TMONK?</summary>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] text-[#0D6EFD] mt-[10px]">
                                <p>$TMONK is not an investment vehicle, and there are no guarantees of financial returns. Please invest responsibly and never invest more than you can afford to lose.</p>
                            </div>
                        </details>
                        <details className="bg-white rounded-[18px] border-[#0D6EFD] border-[3px] border-opacity-30 py-[24px] sm:py-[34px] md:py-[42px] px-[24px] sm:px-[32px] md:px-[38px]">
                            <summary className="outline-none hover:cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#0D6EFD]">What are carbon credits?</summary>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px]  text-[#0D6EFD] mt-[10px]">
                                <p>Carbon credits, also known as carbon allowances, were devised to reduce the emission of greenhouse gases. This system requires entities to purchase credits to produce emissions above the specified limit, without penalty. Read more about carbon credits here.</p>
                            </div>
                        </details>
                        <details className="bg-white rounded-[18px] border-[#0D6EFD] border-[3px] border-opacity-30 py-[24px] sm:py-[34px] md:py-[42px] px-[24px] sm:px-[32px] md:px-[38px]">
                            <summary className="outline-none hover:cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#0D6EFD]">What are the fees?</summary>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px]  text-[#0D6EFD] mt-[10px]">
                                <p>There is a 5% fee on all transactions. 100% of the proceeds are burned!.</p>
                            </div>
                        </details>
                        <details className="bg-white rounded-[18px] border-[#0D6EFD] border-[3px] border-opacity-30 py-[24px] sm:py-[34px] md:py-[42px] px-[24px] sm:px-[32px] md:px-[38px]">
                            <summary className="outline-none hover:cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#0D6EFD]">Can I suggest a program/initiative for funding?</summary>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px]  text-[#0D6EFD] mt-[10px]">
                                <p>For the time being, $TMONK himself will be selecting programs to present to the community for potential funding. However, he knows that no monkey is an island unto himself and that’s why the community will always vote on which initiatives get funding. YOU are the decision maker. If you don’t believe in a project, it doesn’t get funded. Simple as that. But if you do, you’ll stake your coins and meme a difference.</p>
                            </div>
                        </details>
                        <details className="bg-white rounded-[18px] border-[#0D6EFD] border-[3px] border-opacity-30 py-[24px] sm:py-[34px] md:py-[42px] px-[24px] sm:px-[32px] md:px-[38px]">
                            <summary className="outline-none hover:cursor-pointer text-[18px] sm:text-[20px] md:text-[22px] font-medium text-[#0D6EFD]">Be honest, is this a scam?</summary>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px]  text-[#0D6EFD] mt-[10px]">
                                <p>No. Full stop. Honesty, Trust and Transparency are core values of the $TMONK community. And if you feel like that’s something a scammer would say, please read this, to see what measures we have taken to ensure a worry-free crypto experience for you. It’s the only thing we don’t play about around here.!</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FaqSection;



