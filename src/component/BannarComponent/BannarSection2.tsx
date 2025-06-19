import React from 'react';
import PrimaryButton from '../PrimaryButton';
import { IoCall } from 'react-icons/io5';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const BannarSection2 = () => {
    return (
        <div>
            <div className='grid grid-cols-12  '>

                <div className='col-span-3 '>
                    <div className='flex items-center'>
                        <p className= 'mr-[-20px] ml-[15px] rotate-[-90deg]'>
                            @williamrey
                        </p>
                        <ul className='flex-col-reverse pb-8 justify-around   text-2xl'>

                            <li className='rotate-[-90deg] py-[8px]'><FaTwitter /></li>
                            <li className='rotate-[-90deg] py-[8px]'><FaInstagram /></li>
                            <li className='rotate-[-90deg] py-[8px]'><FaFacebook /></li>
                            <li className='rotate-[-90deg] py-[8px]'><TfiLayoutLineSolid /></li>
                        </ul>
                    </div>
                   
                </div>
                <div className='col-span-9'>
                    <p className='w-7/11 leading-7' >Building the worlds best marketing websites for over a decade. Your trusted partner for strategy, design, and dev.</p>
                    <div className='pt-8'>
                        <PrimaryButton logo={<IoCall />} text='Schedule a Call'></PrimaryButton>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default BannarSection2;