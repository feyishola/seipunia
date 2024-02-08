"use client"
import Card2 from "@/app/components/card2";
import Link from "next/link";
import Accordion from "./accordion";
import { useState } from "react";
import TextBox from "@/app/components/textbox";

export default function ClaimDisplayScreen(){
    const [display, setDisplay] = useState(<AboutProject/>)
    const [active, setActive] = useState("aboutProject")

    const handleSubmit = (content,buttonName)=>{
        setDisplay(content)
        setActive(buttonName)
    }
    return(
        <div className="bg-[#36373b] h-auto mx-auto pt-5 md:pt-20 ">
            <div className="w-[100%] pb-1">
                <nav className="flex flex-row  items-center  max-w-[1150px] mx-auto mb-[0.5px]">
                    <button onClick={()=>handleSubmit(<AboutProject/>,"aboutProject")} className={`mr-5 md:mr-20 text-2xl font-semibold text-[#6F757F] pb-5 ${active === "aboutProject" ? "border-[#E5335E] border-b-4 text-white":""}`}>About Project</button>
                    <button onClick={()=>handleSubmit(<Sales/>,"sales")} className={`mr-5 md:mr-20 text-2xl font-semibold text-[#6F757F] pb-5 ${active === "sales" ? "border-[#E5335E] border-b-4 text-white":""}`}>Sales</button>
                </nav>
            </div>
            <div >
                {display}
            </div>
        </div>
    )
}

function AboutProject(){
    return(
        <div className="flex flex-col-reverse md:flex-row max-w-[1170px] mx-auto p-5 border-t pb-40 gap-[20px] pt-20">
            <div className="w-[100%] md:min-[50%] md:max-w-[60%] h-auto border border-red-600 p-5">
                    <p className="text-[16px] font-[500px] mb-5 flex text-justify text-[#ACAFB8]">After Jay, one of the co-founders of SEI, brought up the $PUNIA token in a tweet, the SEI community was electrified. This mention served as a catalyst, igniting a surge of enthusiasm among our members. Motivated by this endorsement, we recognized the potential of $PUNIA and decided to fully embrace it within the SEI ecosystem. Consequently, plans were set in motion to launch $PUNIA on our platform, signaling our commitment to supporting innovative crypto projects.</p>
                    <p className="text-[16px] font-[500px] mb-5 text-justify text-[#ACAFB8]">Gain early access to Seipunia's premier crypto IDO projects by becoming part of our vibrant ecosystem. Through the strategic staking of $PUNIA tokens, participants can secure priority access to a curated selection of promising projects. This exclusive opportunity not only provides early adopters with a front-row seat to groundbreaking initiatives but also incentivizes active engagement within the SEI community. By leveraging the power of $PUNIA, investors can position themselves at the forefront of the rapidly evolving crypto landscape.</p>
                    <p className="text-[16px] font-[500px] mb-5 text-justify text-[#ACAFB8]">The launch of $PUNIA on the SEI ecosystem heralds a new era of collaboration and opportunity. As stakeholders unite around this token, a sense of camaraderie and shared purpose emerges, driving the collective pursuit of innovation and success. With $PUNIA as the cornerstone of our ecosystem, we aim to foster a dynamic environment where visionary projects thrive and participants are rewarded for their contributions. Join us on this journey as we redefine the possibilities of decentralized finance and pave the way for a more inclusive and accessible future.</p>
                </div>
                <div className="w-[100%] md:min-[40%] md:max-w-[100%] h-auto p-5">
                    <Accordion/>
                </div>
        </div>
    )
}

function Sales(){
    return(
        <div className="text-center mx-auto -mt-1 w-full md:min-w-[20%] md:max-w-[40%] p-2">
            <TextBox message={"No sales page available. Contact admin."} style={{color:"#E5335E", maxHeight:"100%", maxWidth:"100%", fontFamily: "Poppins",fontSize: "32px", fontWeight: 400,lineHeight: "48px", }}/>
        </div>
    )
}