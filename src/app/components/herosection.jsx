import Image from "next/image";
import dragonboy from "../assets/Male_dragon.png";
import property from "../assets/property.png";
import SvgComponent from "./svgcomponent";
import NavComponent from "./navbar";
import TextBox from "./textbox";
import LogoImg from "../assets/Rectangle.png"
import bgimage from "../assets/property.png";
import { Button } from 'flowbite-react';
import Link from "next/link";

export default function HeroSection() {
    return (
      <div className="min-h-screen bg-cover" style={{backgroundImage:`url(${property.src})`}}>
        <div>
            <div className="flex mx-auto" style={{paddingTop:"64px", maxWidth:"1124px"}}>
              <NavComponent/>
            </div>
            <div className="text-center mx-auto mt-10 w-full md:min-w-[20%] md:max-w-[40%] p-2" >
              <TextBox message={"Become an early investor in the Sei ecosystem"} style={{color:"white", maxHeight:"100%", maxWidth:"100%", fontFamily: "Cabinet Grotesk",fontSize: "64px", fontWeight: 800,lineHeight: "64px", }}/>
            </div>
            <div className="text-center mx-auto -mt-1 w-full md:min-w-[20%] md:max-w-[40%] p-2">
              <TextBox message={"sei PUNIA evolution into a utility power house"} style={{color:"white", maxHeight:"100%", maxWidth:"100%", fontFamily: "Poppins",fontSize: "32px", fontWeight: 400,lineHeight: "48px", }}/>
            </div>
            <div className="flex justify-center mt-8">
              <button style={{width:"150px", height:"48px", backgroundColor:"#202227", padding:"12px 20px", borderRadius:"6px", color:"white", fontWeight:"700", fontSize:"16px", fontFamily:"Poppins", lineHeight:"24px"}} className="mr-4">BUY $PUNIA</button>
              <Link href={"/upcomingprojects"} >
                <button style={{width:"150px", height:"48px", backgroundColor:"white", padding:"12px 20px", borderRadius:"6px", color:"black", fontWeight:"700", fontSize:"16px", fontFamily:"Poppins", lineHeight:"24px"}}>Launch dApp</button>
              </Link>
            </div>
            <div className="flex justify-center mt-16 md:mt-28">
              <p style={{fontSize:"20px", fontWeight:"300px", color:"white"}}>Powered by</p>
              <div className="flex flex-row-reverse pl-2" style={{gap:"16px", display:"flex", alignContent:"center", alignItems:"center"}}>
                <p className="text-3xl text-white font-medium">Sei</p>
                <div style={{height:"24px", width:"24px", borderRadius:"50%", }}>
                  <Image src={LogoImg} width={"100%"} height={"100%"} alt='logo'/>
                </div>
              </div>
            </div>
         
        </div>
   
      </div>
    );
  }



  