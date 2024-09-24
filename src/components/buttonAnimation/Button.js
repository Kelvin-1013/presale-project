import Image from "next/image";
import React from "react";

const ButtonAnimation = () => {
    return (
        <>
            <button className="fixed bottom-[140px] right-[30px] z-50 ">
                <Image
                    src="/monkey/buy.png"
                    width={60}
                    height={60}
                    alt="buy"
                />
            </button>

            <div className="fixed bottom-[140px] right-[30px] z-40 animate-ping">
                <Image
                    src="/monkey/buy.png"
                    width={60}
                    height={60}
                    alt="buy"
                />
            </div>
            <button className="fixed bottom-[250px] right-[30px] z-20 animate-bounce" >
                <Image
                    src="/monkey/airdrop.png"
                    width={60}
                    height={60}
                    alt="buy"
                />
            </button>
        </>

    )
}
export default ButtonAnimation