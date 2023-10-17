import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { mobileNotch, circleMicrophone, user } from "@/public/svgs";

export default function NavHeader() {
  return (
    <div className='bg-secBlack w-full '>
      <div className='py-[18px] flex items-center justify-between w-[95%] max-w-[1580px] mx-auto'>
        <div className='relative w-[492px] '>
          <Input
            type='text'
            placeholder='Search by Podcast Name, Host name, Categories, Tags...'
            className='pl-[18px] pr-6 text-black'
          />
          <Search
            className='absolute top-0 bottom-0 my-auto right-4'
            color='black'
            size={16}
          />
        </div>
        <div className='flex items-center justify-between gap-[34px]'>
          <Button className='min-w-[197px] flex items-center gap-2 bg-black py-4 px-[17px] rounded-[18px] font-semibold ring-2 ring-priGreen/50 shadow-md shadow-priGreen/30'>
            <Image src={mobileNotch} alt='' />
            <p className='text-priGreen'>Download the app</p>
          </Button>
          <div className='flex items-center gap-3'>
            <Button className='min-w-[120px] flex items-center gap-2 bg-priGreen py-4 px-[17px] rounded-[12px] font-semibold '>
              <Image src={circleMicrophone} alt='' />
              <p className='text-white'>SIGN UP</p>
            </Button>
            <Button className='min-w-[120px] flex items-center gap-2 bg-secBlack py-4 px-[17px] rounded-[12px] font-semibold ring-2 ring-white'>
              <Image src={circleMicrophone} alt='' />
              <p className='text-white'>LOG IN</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
