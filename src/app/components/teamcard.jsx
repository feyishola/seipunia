import Image from "next/image";
import dragon1 from "../assets/dragon1.png"

export default function TeamCard({image = dragon1,name = "Seiviour",position = "Dev."}){
    return(
        <div className="w-[327px] h-[596px] rounded-md border border-red-600 mx-auto">
            <div className="w-full h-[417px] px-[10px] pb-[24px] pt-[10px]">
                <Image src={image} alt={"team member"} className="w-full h-full"/>
            </div>
            <div className="w-[307px] h-auto p-5 rounded-md bg-[rgb(32,34,39)] mx-auto">
                <p className="font-semibold text-[40px] text-white text-center">{name}</p>
                <p className="font-normal text-[32px] text-white text-center">{position}</p>
            </div>
        </div>
    )
}