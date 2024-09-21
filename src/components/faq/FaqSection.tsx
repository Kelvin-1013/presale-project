import React, {useState} from "react";
import { motion, LayoutGroup } from "framer-motion";
import FaqData from "./FaqData";
import AnimatedOnViewTitle from "../animated/AnimatedOnViewTitleLg";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";


const Faqs = (props) => {

    const [answerIsShown, setAnswerIsShown] = useState(false);
    
    function toggleAnswerIsShown(){
        setAnswerIsShown(prevAnswerIsShow => !prevAnswerIsShow);
    }

    return (
                <motion.div key={props.id} onClick={toggleAnswerIsShown} layout
                className='w-[80vw]  sm:w-[500px] md:w-[600px] lg:w-[900px] flex flex-row flex-wrap bg-cA text-left p-4 my-2 rounded-2xl cursor-pointer hover:text-cB transition-colors duration-300'
                >
                    <motion.h2  layout className={`text-2xl w-[93%] pr-2 sm:w-[95%] ${answerIsShown && ' text-cB'}`} >{props.question} </motion.h2>
                    <motion.h2 layout className=" text-3xl w-[7%] sm:w-[5%]   ">{answerIsShown ? <BiCaretDown /> : <BiCaretUp />}</motion.h2>
                    { answerIsShown &&<motion.div layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: {
                    duration: 1.6
                    }}}
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
        <div className='w-full bg-cA text-cC text-center'>
            <div className='max-w-[1240px] mx-auto px-4 py-16 items-center flex flex-col'>
                <AnimatedOnViewTitle className=" mb-8" text='Frequently Asked Questions' />
                <LayoutGroup>
                <motion.div className=' py-2 px-3 md:p-3 md:px-5  items-center flex flex-col rounded-3xl bg-cB' layout >
                    <LayoutGroup> {faqElements} </LayoutGroup>
                </motion.div>
                </LayoutGroup>
               
            </div>
        </div>
    );
}

export default FaqSection;



