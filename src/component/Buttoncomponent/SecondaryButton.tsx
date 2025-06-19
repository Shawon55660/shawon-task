import React from 'react';
interface SecondaryButtonProps{
    logo:React.ReactNode,
    text:string,
   textColor:string,
    borderColor:string
}
const SecondaryButton:React.FC<SecondaryButtonProps> = ({logo,text,textColor,borderColor}) => {
    return (
         <div>
            <button className={`flex bg-transparent items-center ${textColor} ${borderColor}  text-lg `}><span className='rounded-full flex items-center p-3 border-[1px]'>{logo}</span> <span className='rounded-full flex items-center p-2 border-[1px]'>{text}</span></button>
        </div>
    );
};

export default SecondaryButton;