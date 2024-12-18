import Image from "next/image";
import React from "react";

interface Props {
  Src: string;
  Alt: string;
  Name: string;
}
const Item: React.FC<Props> = ({ Src, Alt, Name }) => {
  return (
    <div className="flex gap-x-1 ">
      {" "}
      <Image src={Src} alt={Alt} width={4.28} height={7.55} />
      <span className="text-white text-base font-normal  tracking-[0.1em] text-left  ">
        {Name}
      </span>
    </div>
  );
};

export default Item;
