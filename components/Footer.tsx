import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white'>
    <div className='w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-8 py-12'>
        <div className='flex flex-col'>
            <h2 className='text-[40px] text-[#D56F2F] font-bold w-[348px]'>Tidy Lion Clean</h2>
            <p className='font-medium text-black'>Creating spotless spaces you can feel good in.</p>
        </div>
        <ul className='flex flex-col gap-3 text-black'>
            <li className='font-bold'>Quick Links</li>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Our Services</li>
            <li className='cursor-pointer'>Why Choose Us</li>
            <li className='cursor-pointer'>Testimonials</li>
        </ul>
        <ul className='flex flex-col gap-3 text-black'>
            <li className='font-bold'>Legal</li>
            <li className='cursor-pointer'>Terms & Conditions</li>
            <li className='cursor-pointer'>Privacy Policy</li>
            <li className='cursor-pointer'>Service Disclaimer</li>
            <li className='cursor-pointer'>Cancellation Policy</li>
        </ul>
        <ul className='flex flex-col gap-3 text-black'>
            <li className='font-bold'>Contact Us</li>
            <li className='cursor-pointer'>+1 (123) 456-7890</li>
            <li className='cursor-pointer'>email@tidylionclean.com</li>
        </ul>
    </div>
    <div className='bg-[#fffce6] flex items-center justify-center text-black py-3 text-[14px]'>
        <p>© 2025 Tidy Lion Clean. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer