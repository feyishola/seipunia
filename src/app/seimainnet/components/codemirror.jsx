"use client";
import React, { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import StepIndicator from './stepper';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Code_Mirror() {
  const [value, setValue] = useState(" ");

//   const router = useRouter()

  const [approveState, setApproveState] = useState('prepare')



  const upload = (e)=>{
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (ev)=>{
        const val = ev.target.result;
        setValue(val);
        setApproveState("approve")
    }

    reader.readAsText(file)

  }

  const walletConnet = ()=>{

    // console.log("from wallet", value);
    
    // router.push('/claimpage')
  }

  return (
        
            <div className="max-w-[578px] min-h-[480px] bg-[#36373b] rounded-md ">
                <div className="max-w-[537px] mx-auto pt-5 rounded-md">
                    <StepIndicator style={approveState}/>
                </div>
                
                <div className='max-w-[537px] mx-auto pt-5 rounded-md'>
                    <p className='text-start text-white text-xs font-semibold'>Token Address</p>
                    <input type="text" placeholder="Connect Wallet first" className="border border-red-600 bg-[#36373b] w-full mx-auto text-[#6F757F] rounded-md"/>
                </div>
                <div className="max-w-[537px] h-[300px]  mx-auto pt-5 rounded-md">
                    <div className='flex justify-between pt-5 pb-2'>
                        <p className='text-white text-xs font-semibold'>List of Addresses in CSV</p>
                        <p className='text-white text-xs font-semibold'>Example of CSV</p>
                    </div>
                
                    <div className="border border-red-600 opacity-60 rounded-md">
                        <CodeMirror value={value} height="200px" width="100%" extensions={[javascript({ jsx: true })]} className='mx-auto w-full p-2'/>
                    </div>
                </div>
                
                <div className="max-w-[537px] mx-auto pb-5">
                   
                    <div >
                        <label htmlFor="fileUpload" className="bg-black text-white w-[92px]  p-2 cursor-pointer mb-3 -mt-0 rounded-md float-end">
                        Upload
                        </label>
                        <input type="file" onChange={upload} id="fileUpload" className="hidden" />
                    </div>
                    <Link href={'/claimpage'}>
                        <button className='bg-black text-white w-full h-[32px] p-1 rounded-md' onClick={walletConnet}>Connect Wallet</button>
                    </Link>
                    
                </div>
            </div>
)}
export default Code_Mirror;





// function Code_Mirror() {
//   const [value, setValue] = useState(" ");
//   const onChange = useCallback((val, viewUpdate) => {
//     console.log('val:', val);
//     setValue(val);
//   }, []);
//  return(
{/* <CodeMirror value={value} height="200px" width="100%" extensions={[javascript({ jsx: true })]} onChange={onChange} className='mx-auto w-full p-2'/> */}
//  )
