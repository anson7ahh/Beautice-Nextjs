import { BgAboutUs } from './BgAboutUs'
import { Button } from '../common'
import Image from 'next/image'
import React from 'react'

const AboutUsService = () => {
    return (
        <div>
            <div className="container relative z-10">
                <div className="relative flex w-full ml-5">
                    <div className="">
                        <p className="text-vividpink text-base leading-5 font-semibold mb-4">About Us</p>
                        <p className="text-darkblue text-3xl font-semibold leading-[45px] mb-[18px]">We are the best beauty clinic</p>
                        <p className="max-w-[483px] leading-6 tracking-[1.6px] text-base text-darkgray mb-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
                            suscipit
                            purus donec amet. Egestas volutpat facilisi
                            eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
                        </p>
                        <p className="max-w-[483px] leading-6 tracking-[1.6px] text-base text-darkgray ">
                            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                        <div className="flex mt-[50px]">
                            <Button type="button" className="bg-vividpink text-white w-[200px] rounded-[50px] text-center tracking-[1.6px] text-[16px] leading-[58.36px] font-semibold">Learn More</Button>
                            <div className="mt-[5px] flex items-center leading-6 tracking-[1.6px] text-base font-semibold text-darkgray ml-[44px]">
                                <Image className="mr-[13px]" src="/Play_button.svg" alt="IconWathVideo" width={49} height={49} />
                                <p className="videoText">Watch Video</p>
                            </div>
                        </div>
                    </div>
                    <div className="z-20 rounded-[50px] w-1/2 mt-[-33px] ml-[58px]">
                        <Image className=' w-full' src="/AboutUsImg.png" alt="aboutUs" width={526} height={380} />
                    </div>
                </div>

            </div>
            <BgAboutUs />
        </div>
    )
}

export default AboutUsService
