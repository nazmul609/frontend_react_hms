import React from 'react'


function LandingPage() {
  return (
    <div className="w-full h-screen pt-2">
        <div className="textStructure mt-20 px-20">
            {["Elevate Efficiency", "Automate Workflow", "Revolutionize Healthcare"].map(
            (item, index) => (
                <div className="masker">
                    <div className='w-fit flex'>
                        {index === 1 && (
                        <div className='w-[10vw] h-[5vw] relative rounded-md mr-[1vw] top-[1vw] bg-blue-500'></div>
                        )}
                        <h1 className="uppercase text-8xl leading-[6vw] tracking-tighter font-bold h-full">
                        {item}
                        </h1>
                    </div>
                </div>
            )
            )}
        </div>

        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["", "", ""].map((item, index) =>
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
            
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-lg capitalize '>Start A Package</div>

            </div>
        </div>
    </div>
  )
}

export default LandingPage