import Link from 'next/link';
import React from 'react'




  
  
  const Project=({ title, description, icon, link }: any) => {
    return (
      <div className="flex cursor-pointer flex-col items-start w-full justify-between md:h-[400px] md:w-[300px] border border-gray-400 py-10 px-4 rounded-3xl transition-all delay-100 hover:bg-black hover:text-white">
        <div className=''>
        {icon}
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
        <h3  className='text-2xl font-semibold'>{title}</h3>
        <p className='text-sm transition-all'>{description}</p>
        <Link href={link} target="_blank" rel="noopener noreferrer" className='bg-gray-700 text-white px-3 py-2 rounded-md hover:scale-105 transition-transform hover:bg-white hover:text-black'>
          See More
        </Link>
        </div>
      </div>
    );
  };
  
  export default Project;
  