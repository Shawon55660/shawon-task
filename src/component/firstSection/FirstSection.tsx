import React from 'react';
import SecondaryButton from '../Buttoncomponent/SecondaryButton';
import { IoMdArrowDown } from 'react-icons/io';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import SectionCard from './SectionCard';
import { FaReact } from 'react-icons/fa';

const FirstSection = () => {
    return (
        <div className='w-[1440px] bg-[#141414] py-[40px] px-[40px]'>
             {/* SecondaryButton is here */}
            <div><SecondaryButton logo={<IoMdArrowDown />} text='Why Choose me'textColor='text-white' borderColor='border-white' ></SecondaryButton></div>
           {/* main content start  */}
            <div className='flex gap-8 text-white pt-[40px] justify-between'>
                <h1 className='text-5xl  w-4/12   leading-normal '>My Extensive List of Skills</h1>
                <p className=' text-right w-4/12 leading-8 pt-4 mr-0'><p className='border-b pb-3 border-[#ffffff71]'>Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p></p>
            </div>
            {/* side button  */}
            <div className='bg-transparent  flex justify-end gap-4'>
                <button className='border border-white rounded-full text-white p-5'><HiArrowNarrowLeft /></button>
                <button className='border border-white rounded-full text-white p-5'><HiArrowNarrowRight /></button>
            </div>

            {/* section card  */}
           <div className='flex gap-5'>
             <SectionCard logo={<FaReact />} header='HTML & CSS' details='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'></SectionCard>
             <SectionCard logo={<FaReact />} header='Javascript' details='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'></SectionCard>
             <SectionCard logo={<FaReact />} header='Webflow' details='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'></SectionCard>
           </div>
            
        </div>
    );
};

export default FirstSection;