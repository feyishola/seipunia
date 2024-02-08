import Twitter2 from "../assets/TwitterX2.png";
import Telegram2 from "../assets/Telegram2.png";
import Discord2 from "../assets/Discord2.png";
import logo from "../assets/Rectangle.png";
import Image from "next/image";

export default function Footer({backgroundColor="#36373B"}){
    return(
        <div className="w-full min-h-[252px]" style={{backgroundColor}}>
            <div className="max-w-[1293px] h-auto flex-wrap md:flex gap-5 md:gap-[200px] py-10 md:py-[98px]  mx-auto justify-center align-middle content-center ">
                <div className="md:w-[150px] w-auto max-h-[32.05051px]  flex gap-[8px] mt-5 md:mt-0 justify-center">
                    <Image src={logo} alt="logo" className="w-[32.05051px] h-[32.05051px]"/>
                    <p className="text-white text-3xl font-black">seipunia</p>
                </div>
                <div className="flex w-auto md:w-[104px]  gap-[16px] mt-5 md:mt-0 mx-auto justify-around">
                    <a href="#"><Image src={Twitter2} alt="logo" className="w-[24px] h-[24px]"/></a>
                    <a href="#"><Image src={Discord2} alt="logo" className="w-[24px] h-[24px]"/></a>
                    <a href="#"><Image src={Telegram2} alt="logo" className="w-[24px] h-[24px]"/></a>
                </div>
                <div className="mt-10 md:mt-0">
                    <p className="text-[#ACAFB8] text-sm font-bold text-center md:text-left space-y-4">© PUNIA 2024. Not affiliated with dragon ball Z, All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

// export default function Footer() {
//     return (
//       <div className="w-full min-h-[252px] bg-[#36373B]">
//         <div className="max-w-screen-xl mx-auto py-8 px-4 md:px-0 flex flex-col md:flex-row justify-center items-center md:items-start">
//           <div className="w-[150px] max-h-[32.05051px] flex items-center gap-2">
//             <Image src={logo} alt="logo" width={32.05} height={32.05} />
//             <p className="text-white text-3xl font-black">seipunia</p>
//           </div>
//           <div className="flex mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-between items-center gap-4 md:gap-8">
//             <a href="#" className="text-white">
//               <Image src={Twitter2} alt="Twitter" width={24} height={24} />
//             </a>
//             <a href="#" className="text-white">
//               <Image src={Discord2} alt="Discord" width={24} height={24} />
//             </a>
//             <a href="#" className="text-white">
//               <Image src={Telegram2} alt="Telegram" width={24} height={24} />
//             </a>
//           </div>
//           <div className="mt-4 md:mt-0 border-t md:border-none pt-4 md:pt-0">
//             <p className="text-[#ACAFB8] text-sm font-bold text-center md:text-left">
//               © PUNIA 2024. Not affiliated with dragon ball Z, All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }