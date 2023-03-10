import React from 'react'

const  Contact = () => {

  return (
    <div name='contact' className='w-full h-screen bg-[#262626] flex justify-center items-center p-4'>
    <form method='POST' action='https://getform.io/f/458cfa83-c534-4402-b446-978e8a78cd76' className='flex flex-col max-w-[600px] w-full'>
         <div className='z-prop pb-8'>
            <p className='text-4xl font-bold inline  border-b-4 border-[#ca8a04] text-[#bcbcb3]'>Contact</p>
            <p className='text-[#bcbcb3] py-4 overflow-hidden white-space: nowrap'>// Submit the form below or send me an email - radosavperisic.contact@gmail.com</p>
         </div>
         <input  type='text' name='name' placeholder='Name'className='z-prop bg-[#ccd6f6] p-2'/>
         <input type='email ' name='email' placeholder='Email' className='z-prop my-4 p-2 bg-[#ccd6f6]'/>
         <textarea placeholder='Message' name='message' rows='10' className='z-prop bg-[#ccd6f6] p-2'></textarea>
         <button className='text-white z-prop border-2 hover:bg-[#ca8a04] hover:border-[#ca8a04] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>

    </div>
  ) 
}

export default Contact