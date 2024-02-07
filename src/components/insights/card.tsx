import React from 'react'

interface CardProps {
    value:string;
    description:string;
}

const card = ({value,description}:CardProps) => {
  return (
    <div className='w-[220px] p-10 bg-white flex flex-col gap-5  rounded-md z-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'>
        <div className='font-extrabold text-4xl text-center inline-block text-transparent bg-[linear-gradient(90deg,_#F1743C_0%,_#F3C120_31%,_#52B160_65%,_#519BCA_79%)] bg-clip-text'>{value}</div>
        <div className='text-xl font-medium text-center'>{description}</div>
    </div>
  )
}

export default card