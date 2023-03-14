import React from 'react'

const ResumeButton = () => {
  return (
    <button className='bg-[#ca8a04] z-10 font-bold py-2 px-9 mr-2 mb-1 rounded-md hover:bg-[#ca6a04]'>            <a
    className="flex justify-between items-center w-full text-gray-300"
    href='/Resume.pdf'
    target='_blank'
  >
    Resume
  </a></button>

  )
}

export default ResumeButton