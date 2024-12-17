import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (

        <footer className=" relative mt-[69.66px] w-full desktop:bg-darkblue tablet:bg-darkblue mobile:bg-darkblue">
            <div className="w-full relative z-30 pt-[210.34px] flex flex-col container">
                <div className="flex justify-center">
                    <div className="mr-[155px] mb-[154px]">
                        <Image className='mb-[34px] mt-4' src="/FooterLogo.png" alt="logo" width={258} height={63} />
                        <p className="font-normal leading-[24px] tracking-[1.6px] text-[16px] text-[#D7DBFF] ml-[31px] mb-[22px]">
                            <span className="text-base font-bold leading-6 tracking-[0.1em] text-left">Beautice</span>
                            <span className="text-[#D7DBFF] text-base font-normal leading-6 tracking-[1.6px] text-left">is a Beauty Clinic WordPress
                                Theme.</span>
                        </p>
                        <p className="text-[#D7DBFF] text-sm italic font-medium leading-[21px] tracking-[1.4px] text-left ml-[31px] mb-[4px]">Baker Steet 101, NY, United States.</p>
                        <div className="flex gap-x-2">
                            <p className="ml-[31px] text-[#D7DBFF] text-sm italic font-medium leading-[21px] tracking-[1.6px] text-left ">+521 569 8966.</p>
                            <p className="text-[#D7DBFF] text-sm italic font-medium leading-[21px] tracking-[1.4px] text-left ">mail@company.com.</p>
                        </div>
                    </div>
                    <div className="mr-[203.5px] flex flex-col gap-y-2">
                        <span className="text-[#FFFFFF] text-lg font-semibold leading-[27px] tracking-[1.8px] text-left mb-3">Pages</span>
                        <div className='flex flex-col gap-y-[11px] items-start '>
                            <div className='flex gap-x-1 '> <Image src="/Vector.svg" alt="Vector" width={4.28} height={7.55} /><span className='text-[#D7DBFF] text-base font-normal leading-6 tracking-[0.1em] text-left'>Home</span></div>
                            <div className='flex gap-x-1 '> <Image src="/Vector.svg" alt="Vector" width={4.28} height={7.55} /><span className='text-[#D7DBFF] text-base font-normal leading-6 tracking-[0.1em] text-left  '>About</span></div>
                            <div className='flex gap-x-1 '> <Image src="/Vector.svg" alt="Vector" width={4.28} height={7.55} /><span className='text-[#D7DBFF] text-base font-normal leading-6 tracking-[0.1em] text-left  '>Services</span></div >
                            <div className='flex gap-x-1 '> <Image src="/Vector.svg" alt="Vector" width={4.28} height={7.55} /><span className='text-[#D7DBFF] text-base font-normal leading-6 tracking-[0.1em] text-left  '>Gallery</span></div>
                            <div className='flex gap-x-1 '> <Image src="/Vector.svg" alt="Vector" width={4.28} height={7.55} /><span className='text-[#D7DBFF] text-base font-normal leading-6 tracking-[0.1em] text-left '>Team</span></div >
                        </div>
                    </div>
                    <div className=" flex flex-col gap-y-2">
                        <span className="text-[#FFFFFF] text-lg font-semibold leading-[27px] tracking-[1.8px] text-left mb-3"> Informations</span>
                        <div className='flex flex-col gap-y-[11px] items-start '>
                            <div className='flex gap-x-1'><Image src="/Vector.svg" alt="Vector" width={4.28} height={7.55} /><span className='text-[#D7DBFF] text-base font-normal leading-6 tracking-[0.1em] text-left  '>Terms & conditions</span></div >
                            <div className='flex gap-x-1'> <Image src="/Vector.svg" alt="Vector" width={4.28} height={7.55} /><span className='text-[#D7DBFF] text-base font-normal leading-6 tracking-[0.1em] text-left  '>Privacy policy</span></div >
                            <div className='flex gap-x-1'> <Image src="/Vector.svg" alt="Vector" width={4.28} height={7.55} /><span className='text-[#D7DBFF] text-base font-normal leading-6 tracking-[0.1em] text-left  '>Blog</span></div >
                            <div className='flex gap-x-1'> <Image src="/Vector.svg" alt="Vector" width={4.28} height={7.55} /><span className='text-[#D7DBFF] text-base font-normal leading-6 tracking-[0.1em] text-left  '>Contact</span></div >

                        </div>
                    </div>
                </div>
                <div className="flex  gap-x-[100px] desktop:mb-10 ">
                    <div className="flex flex-row ml-[30px] gap-x-[41px] desktop:mr-[160px]">
                        <Image src="/facebook-f.svg" alt="Facebook" width={25} height={27.84} />
                        <Image src="/Twitter.svg" alt="Twitter" width={25} height={27.84} />
                        <Image src="/linkedin-in.svg" alt="linkedin-in" width={25} height={27.84} />
                        <Image src="/youtube.svg" alt="youtube" width={25} height={27.84} />
                        <Image src="/Instagram.svg" alt="Instagram" width={25} height={27.84} />
                    </div>
                    <div className="text-[#D7DBFF] text-base font-normal leading-6 tracking-[1.6px] text-right mr-[149px]">
                        <p>© AltDesain Studio 2021 - All right reserved.</p>
                    </div>
                </div>
                <div className="absolute right-[175.6px] top-[500.34px]">
                    <Image src="/ToTopButton.svg" alt="ToTopButton" width={36} height={36} />
                </div>
            </div>
            <div className="absolute z-2 top-0 w-full bottom-5 desktop:hidden tablet:hidden mobile:hidden">
                <Image src="/FooterBG.png" alt="FooterBG" width={1440} height={705.34} />
            </div>
            <div className="absolute z-[-2] w-full desktop:hidden tablet:hidden mobile:hidden">
                <Image src="/BottomBG.png" alt="BottomBG" width={1440} height={125} />
            </div>
        </footer>

    )
}

export default Footer
