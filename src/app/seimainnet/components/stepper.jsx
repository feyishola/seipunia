import React from 'react';

function StepIndicator({style="prepare"}) {
    return (
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ">
                <span className={`flex items-center  font-bold text-[14px] ${style === "prepare" ? "text-white":"text-[#ACAFB8]"}`}>
                     <span className={`me-2 rounded-full w-[24px] h-24px  ${style === "prepare" ? "bg-focuss":"bg-[#6F757F] text-[#ACAFB8]"}`}>1</span>
                     Prepare 
                </span>
            </li>
            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                <span className={`flex items-center  font-bold text-[14px] ${style === "approve" ? "text-white":"text-[#ACAFB8]"}`}>
                <span className={`me-2 rounded-full w-[24px] h-[24px]  ${style === "approve" ? "bg-focuss":"bg-[#6F757F] text-[#ACAFB8]"}`}>2</span>
                    Approve 
                </span>
            </li>
            <li className="flex items-center">
                <span className="me-2 rounded-full w-[24px] h-[24px] bg-[#6F757F] text-[#ACAFB8]">3</span>
                Send
            </li>
        </ol>
    );
}

export default StepIndicator;
