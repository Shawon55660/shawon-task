import React from 'react';
interface CardProps{
  
    text:string,
    bgColor:string,
   textColor:string,
    borderColor:string
}
const Card:React.FC<CardProps> = ({bgColor,text,textColor,borderColor}) => {
    return (
        <div>
            <button className={`${bgColor} ${textColor} ${borderColor} rounded-full px-5 border-2  py-3`}>{text}</button>
            
        </div>
    );
};

export default Card;