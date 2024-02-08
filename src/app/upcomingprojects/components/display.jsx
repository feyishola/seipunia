"use client"
import Card2 from "@/app/components/card2";
import TextBox from "@/app/components/textbox";
import Link from "next/link";
import { useState } from "react";

export default function DisplayScreen(){
    const [display, setDisplay] = useState(<DefaultPage/>)
    const [active, setActive] = useState("Upcoming")

    const handleSubmit = (content,buttonName)=>{
        setDisplay(content)
        setActive(buttonName)
    }

    return(
        <div className="bg-[#36373b] h-auto mx-auto">
            <div className="w-[100%] pb-1">
                <nav className="flex flex-row  items-center  max-w-[1150px] mx-auto mb-[0.5px]">
                    <button onClick={()=>handleSubmit(<DefaultPage/>,"Upcoming")} className={`mr-5 md:mr-20 text-2xl font-semibold text-[#6F757F] pb-5 ${active === "Upcoming" ? "border-[#E5335E] border-b-4 text-white":""}`}>Upcoming</button>
                    <button onClick={()=>handleSubmit(<LivePage/>,"Live")} className={`mr-5 md:mr-20 text-2xl font-semibold text-[#6F757F] pb-5 ${active === "Live" ? "border-[#E5335E] border-b-4 text-white":""}`}>Live</button>
                    <button onClick={()=>handleSubmit(<EndPage/>,"Ended")} className={`mr-5 md:mr-20 text-2xl font-semibold text-[#6F757F] pb-5 ${active === "Ended" ? "border-[#E5335E] border-b-4 text-white":""}`}>Ended</button>
                </nav>
            </div>
            <div className="flex flex-wrap md:flex-row max-w-[1350px] mx-auto sm:justify-center justify-between gap-7 p-5 border-t pb-40 pt-20">
                {display}
            </div>
        </div>
    )
}

function DefaultPage(){
    return(
        <>
            <Card2/>
                <Card2 style={{filter:"blur(4px)"}}/>
                <Card2 style={{filter:"blur(4px)"}}/>
                <Card2 style={{filter:"blur(4px)"}}/>
                <Card2 style={{filter:"blur(4px)"}}/>
                <Card2 style={{filter:"blur(4px)"}}/>
        </>
    )
}

function EndPage(){
    return(
        <>
            <Card2/>
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
                <Card2 />
        </>
    )
}

function LivePage(){
    return(
        <div className="text-center mx-auto -mt-1 w-full md:min-w-[20%] md:max-w-[40%] p-2">
              <TextBox message={"No live page available. Contact Shams Khalil."} style={{color:"#E5335E", maxHeight:"100%", maxWidth:"100%", fontFamily: "Poppins",fontSize: "32px", fontWeight: 400,lineHeight: "48px", }}/>
        </div>
    )
}