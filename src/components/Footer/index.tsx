import BottomBG from "./BottomBG";
import FooterBG from "./FooterBG";
import Icon from "./components/Icon";
import Image from "next/image";
import Item from "./components/Item";
import React from "react";

interface Icons {
  id: number;
  Src: string;
  Alt: string;
}
interface Item extends Icons {
  Name: string;
}
interface GroupedItems {
  pages: Item[];
  Infomation: Item[];
}
const Items: GroupedItems[] = [
  {
    pages: [
      {
        id: 0,
        Src: "/Vector.svg",
        Name: "Home",
        Alt: "Vector",
      },
      {
        id: 1,
        Src: "/Vector.svg",
        Name: "About",
        Alt: "Vector",
      },
      {
        id: 2,
        Src: "/Vector.svg",
        Name: "Services",
        Alt: "Vector",
      },
      {
        id: 3,
        Src: "/Vector.svg",
        Name: "Gallery",
        Alt: "Vector",
      },
      {
        id: 4,
        Src: "/Vector.svg",
        Name: "Team",
        Alt: "Vector",
      },
    ],
    Infomation: [
      {
        id: 5,
        Src: "/Vector.svg",
        Name: "Terms & conditions",
        Alt: "Vector",
      },
      {
        id: 6,
        Src: "/Vector.svg",
        Name: "Privacy policy",
        Alt: "Vector",
      },
      {
        id: 7,
        Src: "/Vector.svg",
        Name: "Blog",
        Alt: "Vector",
      },
      {
        id: 8,
        Src: "/Vector.svg",
        Name: "Contact",
        Alt: "Vector",
      },
    ],
  },
];
const Icons: Icons[] = [
  { id: 0, Src: "/facebook-f.svg", Alt: "facebook" },
  { id: 1, Src: "/twitter.svg", Alt: "twitter" },
  { id: 2, Src: "/linkedin-in.svg", Alt: "linkedin-in" },
  { id: 4, Src: "/youtube.svg", Alt: "youtube" },
  { id: 5, Src: "/Instagram.svg", Alt: "Instagram" },
];
const Footer = () => {
  return (
    <footer className=" relative mt-[100.66px] tablet:bg-darkblue tablet:w-full w-full ">
      <div className="container w-full relative z-30  flex flex-col tablet:px-10 ">
        <div className="flex justify-center mb-10 pt-20  tablet:gap-x-[150px] tablet:mb-[150px] desktop:gap-x-0 mobile:mb-10 ">
          <div className="desktop:mr-[155px] mobile:mx-auto tablet:mx-0 mobile:pt-20 tablet:pt-0">
            <Image
              className="mb-[34px] mt-4 mobile:mx-auto tablet:mx-0 mx-auto"
              src="/FooterLogo.png"
              alt="logo"
              width={258}
              height={63}
            />
            <p className="font-normal tracking-[1.6px] text-[16px] text-white ml-[31px] mb-[22px] text-center tablet:text-left">
              <span className="mobile:text-base font-bold  tracking-[0.1em] text-left text-sm">
                Beautice
              </span>
              <span className="text-white mobile:text-base font-normal  tracking-[1.6px] text-left text-sm">
                is a Beauty Clinic WordPress Theme.
              </span>
            </p>
            <p className="text-white text-sm italic font-medium tracking-[1.4px] ipadMini:text-left ml-[31px] mb-[4px] mobile:text-center tablet:text-left text-center">
              Baker Steet 101, NY, United States.
            </p>
            <div className="flex gap-y-2 tablet:gap-x-2 tablet:flex-row flex-col mobile:mx-auto tablet:mx-0 ipadMini:ml-[31px] tablet:ml-[31px] text-center ">
              <p className="  text-white text-sm italic font-medium tracking-[1.6px] ipadMini:text-left mobile:mx-auto tablet:mx-0  ">
                +521 569 8966.
              </p>
              <p className="text-white text-center text-sm italic font-medium tracking-[1.4px] ipadMini:text-left mobile:mx-auto tablet:mx-0">
                mail@company.com.
              </p>
            </div>
          </div>
          <div className="desktop:mr-[203.5px]  flex-col gap-y-2   hidden tablet:flex">
            <span className="text-white text-lg font-semibold tracking-[1.8px] text-left mb-3 ">
              Pages
            </span>
            <div className="flex flex-col gap-y-[11px] items-start ">
              {Items[0].pages.map((item) => (
                <Item
                  key={item.id}
                  Src={item.Src}
                  Alt={item.Alt}
                  Name={item.Name}
                />
              ))}
            </div>
          </div>
          <div className="  flex-col gap-y-2 hidden tablet:flex  ">
            <span className="text-white text-lg font-semibold  tracking-[1.8px] text-left mb-3">
              {" "}
              Informations
            </span>
            <div className="flex flex-col gap-y-[11px] items-start">
              {Items[0].Infomation.map((item) => (
                <Item
                  key={item.id}
                  Src={item.Src}
                  Alt={item.Alt}
                  Name={item.Name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-x-[30px] ipadMini:mb-10 tablet:mb-10  flex-col tablet:flex-row mobile:mx-auto tablet:mx-0 tablet:gap-x-[200px]  ">
          <div className="flex mx-auto flex-row ipadMini:ml-[30px] ipadMini:justify-between gap-x-[41px] desktop:mr-[160px] mobile:mx-auto tablet:mx-0 mobile:mb-5">
            {Icons.map((icon) => (
              <Icon key={icon.id} Src={icon.Src} Alt={icon.Alt} />
            ))}
          </div>
          <div className="text-white text-base font-normal  tracking-[1.6px] text-left max-w-full mx-auto ">
            <p className="whitespace-nowrap w-full ">
              © AltDesain Studio 2021 - All right reserved.
            </p>
          </div>
        </div>
        <div
          className="absolute top-[287px] right-[50px] ipadMini:right-[175.6px] ipadMini:top-[366.34px] desktop:top-[347.34px]
                 desktop:right-0 mobile:top-[360px] mobile:right-[0px] tablet:top-[333px] tablet:right-[39px] "
        >
          <Image
            src="/ToTopButton.svg"
            alt="ToTopButton"
            width={36}
            height={36}
          />
        </div>
      </div>
      <FooterBG />
      <BottomBG />
    </footer>
  );
};

export default Footer;
