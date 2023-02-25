import React from 'react'

const Work = () => {
  return (
    <div className='bg-[#262626] w-full md-h-screen text-[#bcbcb3]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 text-[#bcbcb3] border-color-[#ca8a04]'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div>
                    <div>
                        <div>
                            <span>
                                <div>
                                    <a href='/'>
                                        <button></button>
                                    </a>
                                    <a href='/'>
                                        <button></button>
                                    </a>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work