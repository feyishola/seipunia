import Card2 from "./card2";

export default function Projects(){
    return(
        <div className="h-[680px] mx-auto px-4">
            <h1 className="text-[50px] md:text-[64px] font-extrabold text-center mt-28">FEATURED PROJECTS</h1>
            <div className="max-w-[1290px] h-auto mt-[82px] flex flex-row gap gap-[70px] mx-auto justify-center align-middle overflow-y-auto mb-24 pb-10">
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
            </div>
        </div>
    )
}


