import Image from "next/image";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";


export default function PartnersComponent(){
    return(
        <div className="min-h-[712px] bg-[#202227] w-full">
            <h1 className="font-extrabold text-5xl md:text-[64px] text-white pt-[149px] text-center">PARTNERS</h1>
            <div className="max-w-[1240px] h-auto mt-[50px] md:mt-[178.5px] pb-[100px] mb-[272.5px] md:mb-[0px] mx-auto flex-wrap md:flex gap-[56px] md:gap-[20px] justify-center align-middle content-center  ">
                <Image src={partner1} alt="partner" className="w-[233px] h-[67px] mx-auto "/>
                <div className="flex flex-col md:flex-row justify-center align-middle content-center ">
                    <div className="flex  w-auto mx-auto">
                        <Image src={partner2} alt="partner" className="w-[163px] h-[102px]"/>
                        <p className="text-[40px] font-semibold text-white">Astroport</p>
                    </div>
                    <Image src={partner3} alt="partner" className="w-[247px] h-[67px] mx-auto"/>
                </div>
                <div className="flex justify-center align-middle content-center ">
                    <Image src={partner4} alt="partner" className="w-[99px] h-[78px]"/>
                    <p className="text-white text-[40px] font-semibold">dexscreener</p>
                </div>
            </div>
        </div>
    )
}