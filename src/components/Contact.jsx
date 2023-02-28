import React from 'react'

const  Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#262626] flex justify-center items-center p-4'>
    <form action='' className='flex flex-col max-w-[600px] w-full'>
         <div className='pb-8'>
            <p className='text-4xl font-bold inline  border-b-4 border-[#ca8a04] text-[#bcbcb3]'>Contact</p>
            <p className='text-[#bcbcb3] py-4 font-sans'>// Submit the form below or send me an email - radosavperisic00@gmail.com</p>
         </div>
         <input  type='text' name='name' placeholder='Name'className='bg-[#ccd6f6] p-2'/>
    </form>

    </div>
  ) 
}

export default Contact