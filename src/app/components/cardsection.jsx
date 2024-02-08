import Card1 from "./card";



export default function CardSection(){
    return(
        <div className="w-[100vw] h-auto  mx-auto p-2 bg-[#F7F8F9]">
            <div className="my-8 sm:my-16 py-28 lg:my-20 flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-10" >
                <Card1 first={"4+"} second={"projects"}/>
                <Card1 first={"4+"} second={"USD participated"}/>
                <Card1 first={"4+"} second={"Participants"}/>
                <Card1 first={"4+"} second={"Blockchain Sei"}/>
            </div> 
        </div>
    )
}



