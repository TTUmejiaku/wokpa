import Image from "next/image";
import { arrowRight, x } from "@/public/svgs";
import Link from "next/link";
import { signUpOptionsData } from "@/mock-data";
import { signUpImg } from "@/public/pngs";

export default function Home() {
  const signUpOptionList = signUpOptionsData.map((item) => {
    const { icon, id, link, name } = item;

    return (
      <div
        className='min-w-[351px] bg-white rounded-[32px] py-3 pl-3 pr-[23px] '
        key={id}
      >
        <Link href={link} className=' flex items-center justify-between'>
          <div className='flex items-center gap-[15px]'>
            <div className='flex items-center justify-center bg-[#EDE6E5] w-[38px] h-[38px] rounded-full'>
              <Image src={icon} alt='' />
            </div>
            <p>{name}</p>
          </div>

          <Image src={arrowRight} alt='' />
        </Link>
      </div>
    );
  });

  return (
    <main className='relative min-h-screen flex items-center justify-center gap-[104px] bg-[#050505]'>
      <section className='flex flex-col items-center justify-center'>
        <h2 className='text-white text-[24px] leading-[28px] font-bold'>
          Create an account
        </h2>
        <div className='space-y-[15px] mt-5'>{signUpOptionList}</div>
        <p className='text-[#CDCDCD] font-semibold mt-5'>
          Already have an account?{" "}
          <span className='font-bold cursor-pointer'>Log in</span>
        </p>
      </section>
      <section className='flex flex-col items-center justify-center'>
        <Image src={signUpImg} alt='' />
        <p className='max-w-[371px] text-[#7B61FF] text-[26px] font-bold leading-[30px] text-center'>
          Join a community of podcast lovers and creators
        </p>
      </section>
      <div className='absolute top-2 right-2 rounded-full w-[18px] h-[18px] bg-gray-500 cursor-pointer'>
        <Image src={x} alt='' />
      </div>
    </main>
  );
}
