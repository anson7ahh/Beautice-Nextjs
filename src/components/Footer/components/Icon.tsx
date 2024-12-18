import Image from "next/image";
import React from "react";

interface Props {
  Src: string;
  Alt: string;
}
const Icon: React.FC<Props> = ({ Src, Alt }) => {
  return <Image src={Src} alt={Alt} width={25} height={27.84} />;
};

export default Icon;
