import Card3 from "./card3";
import TeamCard from "./teamcard";
import dragon3 from "../assets/dragon3.png";
import dragon2 from "../assets/dragon2.png";

export default function ReadyTeamComponent(){
    return(
        <div className="w-full h-auto  mx-auto mb-[178px]">
            <h1 className="pt-40 text-center font-semibold text-[50px] md:text-[64px]">WE ARE READY TO TAKE OVER!</h1>
            <div className="h-auto max-w-[1288px] flex overflow-y-auto gap-[98px] mt-24  mx-auto pt-[38px] pb-[58px]">
                <Card3/>
                <Card3/>
                <Card3/>
                <Card3/>
            </div>
            <div>
                <h1 className="pt-20 md:pt-40 text-center font-semibold text-[50px] md:text-[64px]">THE TEAM</h1>
                <div className="mt-[72px] mx-auto flex flex-wrap md:flex-row justify-center gap-[50px] md:gap-[100px]">
                    <TeamCard image={dragon3} name="Kira" position="Co-founder"/>
                    <TeamCard image={dragon2} name="Ed" position="Co-founder"/>
                    <TeamCard/>
                </div>
            </div>
        </div>
    )
}