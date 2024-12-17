import Image from 'next/image'
import React from 'react'

// import { ProfessionalItems } from './components'


// interface Item {
//     id: number;
//     imgSrc: string;
//     title: string;
//     description: string;
//     name: string;
// }
// const Items: Item[] = [
//     {
//         id: 1, imgSrc: "/professionalSurgeon.png", title: "Briyan Nevalli", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
//         , name: "Surgeon"

//     },
//     {
//         id: 2, imgSrc: "/professionalBella.png", title: "Bella sebastian", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
//         , name: "Dermatologist"
//     },
//     {
//         id: 3, imgSrc: "/professionalLilly.png", title: "Lilly Adams", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
//         , name: "Stylist expert"
//     },

// ];
const Professional = () => {
    return (
        <div>
            <div className="text-center max-w-[1085px] mx-auto mt-[90.2px]">
                <div className="flex text-center items-center flex-col">
                    <p className="text-[#FF64AE] text-base font-semibold leading-5 mb-4">Professional Teams</p>
                    <p className="text-[#091156] text-4xl font-semibold leading-[45px] mb-5">The Professional expert</p>
                    <p className="h-[51px] font-normal text-base leading-6 tracking-[1.6px] text-[#8B8B8B]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                    </p>
                </div>
                <div className="relative z-30 mt-[87px] gap-x-14 justify-center mb-[134.4px] flex ">
                    {/* {Items.map(item =>
                        <ProfessionalItems key={item.id} name={item.name} description={item.description}
                            title={item.title} imgSrc={item.imgSrc} />)} */}
                    <div className="mx-auto flex flex-col min-w-[270px] text-center py-[91px] pb-[96px]">
                        <Image className="mx-auto  mb-[53px]" src="/professionalSurgeon.png" alt="feature1" width={146} height={146} />
                        <p className="text-[#FF64AE] leading-5 text-base font-semibold mb-[15px]">Stylist expert</p>
                        <p className="text-[#091156] font-semibold text-lg leading-[22.5px] mb-[19px]">Lilly Adams</p>
                        <p className="text-[#8B8B8B] font-normal text-sm leading-5 tracking-wide max-w-[270px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                            aliquam, purus sit.</p>
                        <div className="mt-[42px] flex flex-row justify-center">
                            <Image src="/TwitterProfessional.svg" alt="Twitter" width={49} height={49} />
                            <Image src="/FacebookProfessional.svg" alt="Facebook" width={49} height={49} />
                            <Image src="/InstagramProfessional.svg" alt="Instagram" width={49} height={49} />
                        </div>
                    </div>
                    <div className="mx-auto flex flex-col   text-center py-[91px] pb-[96px] w-full 
                              rounded-[42px] shadow-[0px_25px_50px_25px_rgba(246,247,255,1)]">
                        <Image className="mx-auto  mb-[53px]" src="/professionalBella.png" alt="feature1" width={146} height={146} />
                        <p className="text-[#FF64AE] leading-5 text-base font-semibold mb-[15px]">Dermatologist</p>
                        <p className="text-[#091156] font-semibold text-lg leading-[22.5px] mb-[19px] ">Bella sebastian</p>
                        <p className="text-[#8B8B8B] font-normal mx-auto text-sm leading-5 tracking-wide max-w-[270px]">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit ut aliquam, purus sit.</p>
                        <div className="mt-[42px] flex flex-row justify-center ">
                            <Image src="/TwitterProfessional.svg" alt="Twitter" width={49} height={49} />
                            <Image src="/FacebookProfessional.svg" alt="Facebook" width={49} height={49} />
                            <Image src="/InstagramProfessional.svg" alt="Instagram" width={49} height={49} />
                        </div>
                    </div>
                    <div className="mx-auto flex flex-col min-w-[270px] text-center py-[91px] pb-[96px]">
                        <Image className="mx-auto  mb-[53px]" src="/professionalLilly.png" alt="feature1" width={146} height={146} />
                        <p className="text-[#FF64AE] leading-5 text-base font-semibold mb-[15px]">Stylist expert</p>
                        <p className="text-[#091156] font-semibold text-lg leading-[22.5px] mb-[19px]">Lilly Adams</p>
                        <p className="text-[#8B8B8B] font-normal text-sm leading-5 tracking-wide max-w-[270px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                            aliquam, purus sit.</p>
                        <div className="mt-[42px] flex flex-row justify-center">
                            <Image src="/TwitterProfessional.svg" alt="Twitter" width={49} height={49} />
                            <Image src="/FacebookProfessional.svg" alt="Facebook" width={49} height={49} />
                            <Image src="/InstagramProfessional.svg" alt="Instagram" width={49} height={49} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professional;
