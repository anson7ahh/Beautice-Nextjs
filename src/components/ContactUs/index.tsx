import { Form } from './components'
import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className="container relative mt-[150px] flex flex-row z-30 mb-[69.66px] gap-[100px] ">
                <div className="mt-[160px]">
                    <Image src="/ContactAnimations.png" alt="contactUs" width={520} height={614} />
                </div>
                <div className="mx-auto flex flex-col">
                    <p className="text-[#FF64AE] leading-[20px] text-lg font-semibold mb-3">Contact Us</p>
                    <p className="text-[#091156] text-4xl leading-[45px] max-w-[404px] font-semibold mb-5">Send your inquiry to our expert team</p>
                    <p className="text-[#8B8B8B] text-base leading-[24px] tracking-[1.6px] font-normal mb-10">Lorem ipsum dolor sit amet nulla turapis tellus.</p>
                    <Form />
                </div>
            </div>
            <div className="absolute top-[3238px] z-0">
                <div className="">
                    <Image src="/BackgroundBubbleContactUs.png" alt="BackgroundBubbleContactUs" width={1175.73}
                        height={929} />
                </div>
            </div>
        </>
    )
}

export default ContactUs
