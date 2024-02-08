import Image from "next/image";
import dragonboy from "../../assets/Male_dragon.png";
import property from "../../assets/property.png";
import LogoImg from "../../assets/Rectangle.png";

import NavComponent from "@/app/components/navbar";
import TextBox from "@/app/components/textbox";



export default function HeroPage() {
    return (
      <div className="min-h-[70vh] bg-[#36373b]">
        <div>
            <div className="flex mx-auto" style={{paddingTop:"64px", maxWidth:"1124px"}}>
              <NavComponent/>
            </div>
            <div className="text-center mx-auto mt-10 w-full md:min-w-[20%] md:max-w-[40%] p-2" >
              <TextBox message={"Participate in Projects"} style={{color:"white", maxHeight:"100%", maxWidth:"100%", fontFamily: "Cabinet Grotesk",fontSize: "64px", fontWeight: 800,lineHeight: "64px", }}/>
            </div>
            <div className="text-center mx-auto -mt-1 w-full md:min-w-[20%] md:max-w-[40%] p-2">
              <TextBox message={"We bring the most innovative projects with cutting edge technology to our community."} style={{color:"white", maxHeight:"100%", maxWidth:"100%", fontFamily: "Poppins",fontSize: "32px", fontWeight: 400,lineHeight: "48px", }}/>
            </div>
        </div>
   
      </div>
    );
  }



  