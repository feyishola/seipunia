import Image from "next/image";
import maled from "../assets/Maled.png";
import scrollbar from "../assets/scrollbar.png";
import TextBox from "./textbox";

export default function LaunchPad(){
    return(
        <div className="z-10 overflow-hidden ">
            <div className="flex flex-row ">
                {/* <div className="grid md:flex-col grid-cols-2 gap-4 " > */}
                    <div className="h-auto mt-52 ml-14 mb-28 max-w-[90%] ">
                        {/* <TextBox message={"Become an early investor in the Sei ecosystem"} style={{color:"black", maxHeight:"100%", maxWidth:"100%", fontFamily: "Cabinet Grotesk",fontSize: "64px", fontWeight: 800,lineHeight: "64px", }}/> */}
                        <h1 className=" text-[50px] md:text-7xl font-extrabold">LAUNCHPAD</h1>
                        <div className=" mt-10 mb-10 h-auto" style={{maxWidth:"729px", }}>

                            <p className="text-3xl font-normal">Gain early access to Seipunia's premier crypto IDO projects. By staking $PUNIA tokens, secure priority access to exciting and promising projects.</p>
                        </div>
                        <button className='w-[262px] h-[48px] bg-[#D42F57] text-white font-bold text-base rounded-md mt-6'>Apply For Launch dApp</button>
                    </div>
                    <div className="mt-0 md:-mt-52 absolute right-0 ">
                        <Image src={maled} alt="dragonboy"  className="-mt-[60px] md:-mt-0 max-h-[350px] md:max-h-[2000px] max-w-[200px] md:max-w-[854px]"/> 
                    </div>
                    
                {/* </div> */}
            </div>
            <div className="flex flex-row w-full ">

                <Image src={scrollbar} alt="scrollbar" height={"100%"} className="object-cover w-[100vw]"/> 
                {/* <Image src={scrollbar} alt="scrollbar" height={"100%"} width={"100%"} />  */}
            </div>
        </div>
    )
}

// export default function LaunchPad() {
//     return (
//       <div className="z-10 overflow-hidden">
//         <div className="flex flex-col md:flex-row-reverse items-center">
//           <div className="mt-0 md:mt-52 absolute right-0 border border-green-400">
//             <Image src={maled} alt="dragonboy" className="max-h-[942px] md:max-w-[50%] object-cover" />
//           </div>
//           <div className="mt-10 md:mt-52 ml-14 mb-14 max-w-[100%] md:max-w-[50%] border border-yellow-400 bg-yellow-600">
//             <h1 className="text-7xl font-extrabold">LAUNCHPAD</h1>
//             <div className="mt-10 mb-10">
//               <p className="text-3xl font-normal">
//                 Gain early access to Seipunia's premier crypto IDO projects. By staking $PUNIA tokens, secure priority access to exciting and promising projects.
//               </p>
//             </div>
//             <button className="w-[262px] h-[48px] bg-[#D42F57] text-white font-bold text-base rounded-md mt-6">
//               Apply For Launch dApp
//             </button>
//           </div>
//         </div>
//         <div className="flex w-full">
//           <Image src={scrollbar} alt="scrollbar" height={"100%"} className="object-cover w-[100vw]" />
//         </div>
//       </div>
//     );
//   }