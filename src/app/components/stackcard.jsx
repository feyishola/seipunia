import Image from "next/image";
import Arrow from "../assets/Arrow.png";
import LogoImg from "../assets/Rectangle.png";

export default function StackCard({worthNature,worthCash,Gstyle="#A9ADAF",backgroundColor, inTake, color}){
    return(
        <div className="max-w-[1165px] min-h-[136px] mx-auto flex flex-col md:flex-row justify-between py-5 px-[10px]  border border-red-600 rounded-md my-5" style={{backgroundColor}}>
                <div className="w-full md:min-w-[63%]  h-[96px] flex flex-row justify-between py-5 px-[10px] align-middle content-center  ">
                    <div className="max-h-[56px] w-auto"><h1 className="text-[16px] md:text-[40px] font-semibold" style={{color}}>{worthNature}</h1></div>
                    <div className="max-h-[56px] w-auto"><p className="text-sm md:text-3xl font-normal pt-2" style={{color}}>VESEI</p></div>
                    {/* <div className="w-auto h-auto  md:min-h-[56px]  md:w-auto" ></div> */}
                        <p className="text-sm md:text-xl font-light p-[10px] text-wrap text-center w-[45%] md:w-auto" style={{backgroundColor:Gstyle}}>GUARANTEED ALLOCATION</p>
                </div>
                <div className="md:min-w-[37%] w-full h-[88px] flex flex-row justify-between p-[10px] align-middle content-center">
                    <div className="min-h-[68px] w-auto border border-red-600 rounded-md">
                        <p className="text-3xl font-normal p-[10px]" style={{color}}>{inTake}</p>
                    </div>
                    <div className="h-6 w-6  flex self-center">
                        <Image src={Arrow} alt="Arrow right" className="h-full w-full"/>
                    </div>
                    <div className="min-h-[68px] w-auto border border-red-600 rounded-md">
                        <p className="text-3xl font-normal p-[10px]" style={{color}}>{worthCash}</p>
                    </div>
                    <div className='w-[64px] h-[64px] rounded-full flex justify-center align-middle'>
                        <Image src={LogoImg}  alt='logo' className='w-full h-full' />
                    </div> 
                </div>
        </div>
    )
}

