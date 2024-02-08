import StackCard from "./stackcard";


export default function Stake(){
    return(
        <div className="h-auto mx-auto px-4 bg-[#E2E4E7] pb-[183px]">
            <div className="pt-44">
                <h1 className="text-[50px] md:text-[64px] font-extrabold text-center mb-28">$PUNIA STAKING TIER</h1>
            </div>

            <div className="w-full h-auto mx-auto ">
                <StackCard worthNature={"BRONZE"} worthCash={"10K"} inTake={"0"} Gstyle={"#A9ADAF"}/>
                <StackCard worthNature={"SILVER"} worthCash={"20K"} inTake={"10K"} Gstyle={"#f7f8f9"} backgroundColor={"#A9ADAF"}/>
                <StackCard worthNature={"GOLD"} worthCash={"50K"} inTake={"20K"} Gstyle={"#A9ADAF"}/>
                <StackCard worthNature={"PLATINUM"} worthCash={"60K"} inTake={"50K"} Gstyle={"#f7f8f9"} backgroundColor={"#A9ADAF"}/>
                <StackCard worthNature={"DIAMOND"} worthCash={"100K"} inTake={"60K"} Gstyle={"#A9ADAF"}/>
                <StackCard worthNature={"SEI"} worthCash={"and above"} inTake={"100K"} backgroundColor={"#D42F57"} color={"white"}/>
                
            </div>
        </div>
    )
}
