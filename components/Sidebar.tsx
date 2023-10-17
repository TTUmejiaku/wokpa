import React from "react";
import Image from "next/image";
import {
  wokpaLogo,
  arrowDown,
  heart,
  listTimeline,
  plusSmall,
} from "@/public/svgs/index";
import { sidebarData1, sidebarData2, sidebarData3 } from "@/mock-data";
import Link from "next/link";

export default function Sidebar() {
  const sideLinks1 = sidebarData1.map((item) => {
    const { icon, id, name, link } = item;

    return (
      <Link
        href={link}
        key={id}
        className='flex items-center gap-3 px-[18px] py-4 hover:bg-gray-400'
        // className='flex items-center gap-4 hover:bg-gradient-to-r hover:from-gradColor1 hover:to-gradColor2'
      >
        <div className=''>
          <Image src={icon} alt={name} />
        </div>
        <p className='text-priText'>{name}</p>
      </Link>
    );
  });
  const sideLinks2 = sidebarData2.map((item) => {
    const { icon, id, name, link } = item;

    return (
      <Link
        href={link}
        key={id}
        className='flex items-center gap-3 px-[18px] py-4 hover:bg-gray-400'
        // className='flex items-center gap-4 hover:bg-gradient-to-r hover:from-gradColor1 hover:to-gradColor2'
      >
        <div className=''>
          <Image src={icon} alt={name} />
        </div>
        <p className='text-priText'>{name}</p>
      </Link>
    );
  });
  const sideLinks3 = sidebarData3.map((item) => {
    const { icon, id, name, link } = item;

    return (
      <Link
        href={link}
        key={id}
        className='flex items-center gap-2 px-[18px] py-4 hover:bg-gray-400'
        // className='flex items-center gap-4 hover:bg-gradient-to-r hover:from-gradColor1 hover:to-gradColor2'
      >
        <div className=''>
          <Image src={icon} alt={name} />
        </div>
        <p className='text-priText text-sm'>{name}</p>
      </Link>
    );
  });

  return (
    <section className='flex-none bg-accentBlack h-screen w-[88px] pt-3 pb-[29px] md:w-[230px]'>
      <div className='px-[18px]'>
        <Image src={wokpaLogo} alt='Wokpa logo' />
      </div>

      <section className='pt-[27px] pb-[33px]'>{sideLinks1}</section>
      <section className=''>
        <div className='flex items-center px-[18px] gap-4'>
          <h3 className='text-white font-bold text-[18px]'>Your Library</h3>
          <Image src={arrowDown} alt='' />
        </div>
        <div className='flex items-center gap-[38px] mt-[15px] px-[18px]'>
          <Image src={heart} alt='' />
          <Image src={listTimeline} alt='' />
          <Image src={plusSmall} alt='' />
        </div>
        <div className='py-[27px] border-b border-b-gradColor1/50'>
          {sideLinks2}
        </div>
        <div className='pt-3 pb-[27px] '>{sideLinks3}</div>
      </section>
    </section>
  );
}
