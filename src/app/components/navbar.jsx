
'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import LogoImg from "../assets/Rectangle.png"
import Image from 'next/image';
import { useState } from 'react';

export default function NavComponent() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = ()=>{
        setIsNavOpen(!isNavOpen)
    }

  return (
    <div className='text-white w-[100%]'>

        {/* Render the navigation items based on the state */}
        {isNavOpen && (
                    <div className="flex flex-col bg-black p-5 justify-center align-middle text-center gap-2 -mt-14">
                    <a href="#ido" className="hover:opacity-90">IDO</a>
                    <a href="#apply" className="hover:opacity-90">Apply</a>
                    {/* <a href="#stake" className="hover:opacity-90">Multisender</a> */}
                    <Link href={"/seimainnet"} >
                        <button className='hover:opacity-90 w-[111px] h-[32px] rounded-md p-2 bg-[#f79230] flex items-center justify-center mx-auto'>Multisender</button>
                    </Link>
                    <Link href={"/upcomingprojects"} >
                        <button className='hover:opacity-90 w-[111px] h-[32px] rounded-md p-2 bg-[#FF3969] flex items-center justify-center mx-auto'>Products</button>
                    </Link>
                    <Link href={"/claimpage"} >
                        <button className='hover:opacity-90 w-[156px] h-[32px] rounded-md p-2 border border-white bg-white text-black flex items-center justify-center mx-auto'>Connect wallet</button>
                    </Link>
                    </div>
                )}

    <section className="flex flex-row justify-between items-center">
        <div className="flex flex-row-reverse gap-[11.4px]">
            <Link href={"/"}>
                <h1 className="text-3xl font-medium">Seipunia</h1>
            </Link>
            <Image src={LogoImg} width={42.734} height={42.734} alt='logo'/>
        </div>
        <div className="w-[50%] relative">
            <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none absolute right-2 bottom-[-18px]" onClick={toggleNav}>
                &#9776;
            </button>

            <div className="hidden md:flex md:flex-row md:justify-between">
                <a href="#ido" className="hover:opacity-90">IDO</a>
                <a href="#apply" className="hover:opacity-90">Apply</a>
                <a href="#stake" className="hover:opacity-90">Stake</a>
                <Link href={"/seimainnet"} >
                        <button className='hover:opacity-90 w-[111px] h-[32px] rounded-md p-2 bg-[#f79230] flex items-center justify-center mx-auto'>Multisender</button>
                    </Link>
                <Link href={"/upcomingprojects"} >
                    <button className='hover:opacity-90 w-[111px] h-[32px] rounded-md p-2 bg-[#FF3969] flex items-center justify-center'>Products</button>
                </Link>
                <Link href={"/claimpage"} >
                    <button className='hover:opacity-90 w-[156px] h-[32px] rounded-md p-2 border border-white bg-white text-black flex items-center justify-center'>Connect wallet</button>
                </Link>
                
            </div>
        </div>
    </section>
</div>
  );
}




