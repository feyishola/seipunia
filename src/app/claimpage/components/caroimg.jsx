'use client';

import Image from 'next/image';
import frame from '../../assets/Frame.png';
import caropic from "../../assets/caroselpic.jpeg";
import LogoImg from '../../assets/Rectangle.png';
import Twitter from '../../assets/TwitterX.png';
import Discord from '../../assets/Discord.png';
import Globe from '../../assets/Globe.png';
import Telegram from '../../assets/Telegram.png';
import Link from 'next/link';


export default function CaroImg({img,style}){
    const additionalStyle = {...style}
    return(

    <div className="max-w-[1250px] h-auto " style={additionalStyle}>
        <div className='p-5'>
            <div className="max-w-[1210px] max-h-[396px] overflow-hidden ">
                <Image src={img} className="w-full h-full object-fill" alt='img'/>
            </div>
            <div className='flex flex-row relative'>
                <div className='w-[84px] h-[84px] rounded-md   ml-5 -mt-8 bg-white relative z-10'>
                    <div className='p-3 w-[84px] h-[84px] rounded-full flex justify-center align-middle'>
                        <Image src={LogoImg}  alt='logo' className='w-full h-full' />
                    </div> 
                </div>
                <div className='max-w-[263px] h-auto absolute right-0 flex flex-row gap gap-[20px] mt-0 bg-white px-5 py-[10px]'>
                    <Link href='#'><Image src={Twitter}  alt='logo' className='max-w-[34px] max-h-[34px]' /></Link>
                    <Link href='#'><Image src={Discord}  alt='logo' className='max-w-[34px] max-h-[34px]' /></Link>
                    <Link href='#'><Image src={Telegram}  alt='logo' className='max-w-[34px] max-h-[34px]' /></Link>
                    <Link href='#'><Image src={Globe}  alt='logo' className='max-w-[34px] max-h-[34px]' /></Link>
                </div>
            </div>
            
        </div>
    </div>
    )
  }

 