import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <div>
            <header className="container font-medium w-full relative  ">
                <div className="pt-[50px] flex justify-between items-center h-[63px] gap-x-[190px] relative z-10">
                    <div className="w-full">
                        <Image className='object-contain' src="/MainLogo.png" alt="logo" width={258} height={63} />
                    </div>

                    <nav className="flex gap-x-10 items-center">
                        <div className="flex gap-x-1 items-center">
                            <span className="text-xs text-darkslateblue" >Home</span>
                            <Image className="object-contain" src="/PlusIcon.png" alt="icon" width={8} height={10} />
                        </div>
                        <Link className="text-xs text-darkgray" href="#">About</Link>
                        <Link className="text-xs text-darkgray" href="#">Service</Link>
                        <Link className="text-xs text-darkgray" href="#">Gallery</Link>
                        <Link className="text-xs text-darkgray" href="#">Blog</Link>
                        <Link className="bg-vividpink text-white text-center leading-[54px] h-[54px] 
                        cursor-pointer no-underline rounded-full w-[158px] tracking-[2px]" href="#">Contact</Link>
                    </nav>
                    <div className='hidden'>
                        <Image src="/hamburger-menu.svg" alt="hamburger" width={30} height={30} />
                    </div>

                </div>
                <div className="flex mt-[159px] ml-[39px] ">
                    <div className="flex flex-col mt-[59px]">
                        <p className=" font-semibold text-[48px] leading-[60px] max-w-[430px]">Clinic & beauty consultant</p>
                        <p className="max-w-[474px] py-[4px] leading-[24px] font-medium text-[16px] tracking-[1.6px] text-darkblue">It is a long established fact that a reader will be by the
                            readable content of a page.</p>
                        <p className="bg-vividpink text-[16px] rounded-full font-medium w-[200px] h-[58.36px] text-center text-white tracking-[2px] leading-[58.36px] mt-[28px]">More Details</p>
                    </div>
                    <div className="">
                        <Image src="/banner.png" alt="banner" width={601.5} height={397.5} />
                    </div>
                </div>
            </header>

            <div className="hidden" ></div>
            <div className="hidden" id="drawer">
                <div className="imgClose" >
                    <Image src="/close.svg" alt="close" width={30} height={30} />

                </div>
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Service</Link></li>
                    <li><Link href="#">Gallery</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
            </div>
            <div className="absolute top-0 left-0 z-[-1] ">
                <div className="">
                    <Image src="/SlideBackground.svg" alt="" width={1266.42} height={743} />
                </div>
            </div>
        </div>
    )
}


