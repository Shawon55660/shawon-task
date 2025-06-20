import React from 'react';
import SecondaryButton from '../Buttoncomponent/SecondaryButton';

import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import SectionCard from './SectionCard';
import { FaReact } from 'react-icons/fa';

const FirstSection = () => {
    return (
        <div className=' bg-[#141414] rounded-md py-[40px] px-[40px]'>
             {/* SecondaryButton is here */}
            <div><SecondaryButton text='Why Choose me'textColor='text-white' borderColor='border-white' ></SecondaryButton></div>
           {/* main content start  */}
            <div className='lg:flex  gap-8 text-white pt-[40px] justify-between'>
                <h1 className='text-3xl w-full lg:text-5xl md:w-7/12  lg:w-4/12   leading-normal '>My Extensive List of Skills</h1>
                <div className='w-full lg:text-right md:w-9/12 lg:w-4/12 leading-8 pt-4 mr-0'><p className='border-b pb-3 border-[#ffffff71]'>Building the worlds best marketing Your trusted partner for strategy, design, and dev.</p></div>
            </div>
            {/* side button  */}
            <div className='bg-transparent  flex pt-4 lg:pt-0  lg:justify-end gap-4'>
                <button className='border border-white rounded-full text-white p-5'><HiArrowNarrowLeft /></button>
                <button className='border border-white rounded-full text-white p-5'><HiArrowNarrowRight /></button>
            </div>

            {/* section card  */}
           <div className=' lg:flex  gap-5'>
             <SectionCard logo={<FaReact />} header='HTML & CSS' details='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'></SectionCard>
             <SectionCard logo={<FaReact />} header='Javascript' details='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'></SectionCard>
             <SectionCard logo={<FaReact />} header='Webflow' details='Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis'></SectionCard>
           </div>
            
        </div>
    );
};

export default FirstSection;