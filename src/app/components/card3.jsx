import Image from "next/image";
import LogoImg from "../assets/Rectangle.png"

export default function Card3(){
    return(
        <div className="w-[436px] h-[200px] border border-red-600 rounded-md">
            <div className="w-[396px] h-[160px] p-5">
                <div className="w-[231px] h-[68px] flex justify-between">
                    <div className='w-[64px] h-[64px] rounded-full flex justify-center align-middle'>
                        <Image src={LogoImg}  alt='logo' className='w-full h-full' />
                    </div> 
                    <div className="w-[153px] h-[68px]">
                        <p className="text-2xl font-semibold">Jay</p>
                        <p className="text-[#6F757F] text-xl font-light">@jayendra_jog</p>
                    </div>
                </div>
                <div className="my-[14px]">
                    <p className="text-2xl font-semibold">wen $PUNA token</p>
                </div>
                <div className="w-full  border-t">
                    <p className="text-xl font-light text-[#6F757F]">8:13AM . Sep 29, 2022</p>
                </div>
            </div>
        </div>
    )
}