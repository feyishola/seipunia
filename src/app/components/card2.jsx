'use client';

import { Button, Card } from 'flowbite-react';
import Image from 'next/image';
import frame from '../assets/Frame.png';
import LogoImg from '../assets/Rectangle.png';
import Twitter from '../assets/TwitterX.png';
import Discord from '../assets/Discord.png';
import Globe from '../assets/Globe.png';
import Telegram from '../assets/Telegram.png';


export default function Card2({style}){
    const additionalStyle = {...style}
    return(

    <div className="w-[347px] h-auto border border-red-600" style={additionalStyle}>
        <div className='p-5'>
            <div className="w-[307px] h-[136px] ">
                <Image src={frame} width={"100%"} height={"100%"} alt='img'/>
            </div>
            <div className='flex flex-row relative'>
                <div className='w-[84px] h-[84px] rounded-md   ml-5 -mt-8 bg-white relative z-10'>
                    <div className='p-3 w-[84px] h-[84px] rounded-full flex justify-center align-middle'>
                        <Image src={LogoImg}  alt='logo' className='w-full h-full' />
                    </div> 
                </div>
                <div className='w-[106px] h-auto absolute right-0 flex flex-row gap gap-[14px] mt-4'>
                    <a href='#'><Image src={Twitter}  alt='logo' className='w-[16px] h-[16px]' /></a>
                    <a href='#'><Image src={Discord}  alt='logo' className='w-[16px] h-[16px]' /></a>
                    <a href='#'><Image src={Telegram}  alt='logo' className='w-[16px] h-[16px]' /></a>
                    <a href='#'><Image src={Globe}  alt='logo' className='w-[16px] h-[16px]' /></a>
                </div>
            </div>
            <p className='w-[307px] h-auto text-[#ACAFB8] text-[10px] font-medium mt-8'>Releap Protocol is a decentralized social graph built on Sui and zkSync. With the Releap Protocol, creators can own their relationships with their community, establishing a completely composable, decentralized social network.</p>
            <button className='w-[307px] h-10 bg-[#D42F57] text-white font-bold text-base rounded-md mt-6'>see details</button>
        </div>
    </div>
    )
  }

 