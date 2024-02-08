import Image from "next/image";
import property from "../../assets/property.png";
import Link from "next/link";
import NavComponent from "@/app/components/navbar";
import TextBox from "@/app/components/textbox";
import StepIndicator from "./stepper";
import Code_Mirror from "./codemirror";

export default function MainPageSection() {
    return (
      <div className="min-h-screen bg-cover " style={{backgroundImage:`url(${property.src})`}}>
        <div>
            <div className="flex mx-auto" style={{paddingTop:"64px", maxWidth:"1124px",}}>
              <NavComponent/>
            </div>
            <div className="flex mt-28 flex-col md:flex-row">
                <div>
                  <TextBox message={"Send tokens to multiple addresses with  Sei Mainnet"} style={{ color:"white", maxWidth:"50%", fontFamily: "Poppins", fontSize: "48px", fontWeight: 300, lineHeight: "48px", textAlign: "center", marginLeft:"100px" }}/>
                </div>
                <div className="flex-grow"> {/* This div will take up the remaining space */}
                  <Code_Mirror/>
                </div>
            </div>
                
                
        </div>
          <footer>
           
          </footer>
      </div>
    );
  }



  