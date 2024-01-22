import React, { useState, useEffect } from 'react';

const FirstPartInSights = () => {
  const initialCounts = {
    interactions: 0,
    companies: 0,
    colleges: 0,
    students: 0,
  };

  const [counts, setCounts] = useState(initialCounts);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCounts(prevCounts => ({ ...prevCounts, interactions: 10000 }));
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCounts(prevCounts => ({ ...prevCounts, companies: 10 }));
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCounts(prevCounts => ({ ...prevCounts, colleges: 99 }));
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCounts(prevCounts => ({ ...prevCounts, students: 1500 }));
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:w-1/2 ">
      <div className="mt-40 ml-16 mr-10 ">
        {/* problem in responsiveness of the img  */}
        <img
          src="images/insights/mitclg.png"
          alt="MIT College Logo"
          className="object-cover h-[364px] w-auto p-2 rounded-sm "
        />
      </div>

      <div className="mt-6 lg:mt-40 text-center lg:ml-6">
        <ul className="list-none p-2 text-sm lg:text-base">
          <li className="mb-4 custom-stat">
            <h2 className="text-[#FF7A00] text-4xl lg:text-5xl transition-all duration-300 ease-in-out">{counts.interactions}</h2>
            <p className="text-base text-[#000000]">Interactions on social media</p>
          </li>
          <li className="mb-4 custom-stat">
            <h2 className="text-[#FF7A00] text-4xl lg:text-5xl transition-all duration-300 ease-in-out">{counts.companies}</h2>
            <p className="text-base text-[#000000]">No of companies reached out</p>
          </li>
          <li className="mb-4 custom-stat">
            <h2 className="text-[#FF7A00] text-4xl lg:text-5xl transition-all duration-300 ease-in-out">{counts.colleges}%</h2>
            <p className="text-base text-[#000000]">Of colleges reached out</p>
          </li>
          <li className="custom-stat">
            <h2 className="text-[#FF7A00] text-4xl lg:text-5xl transition-all duration-300 ease-in-out">{counts.students}+</h2>
            <p className="text-base text-[#000000]">No of students</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FirstPartInSights;
