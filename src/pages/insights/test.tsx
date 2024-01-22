const Insights = () => {
  return (
    <div className="flex min-h-screen" style={{ backgroundImage: "url('images/insights/Insights_bg.png')" }}>
      
      {/* Left half with background image */}
      <div className="w-1/2 bg-cover bg-center relative">
        <div className="flex-row">
          <div className="flex">
            <div className="w-max-[383px] h-max-[443px]">
              <img
                src="images/insights/mitclg.png"
                alt="MIT College Logo"
                className="mx-auto my-8 w-[100%] h-[100%]"
              />
            </div>

            <div className="flex flex-col ml-4">
              <div className="mb-1 custom-stat">
                <h2 className="text-[#FF7A00] font-20">10000+</h2>
                <p className="text-[#FFFFFF]">Interactions on social media</p>
              </div>
              <div className="mb-1 custom-stat">
                <h2 className="text-[#FF7A00] font-20">10</h2>
                <p className="text-[#FFFFFF]">No of companies reached out</p>
              </div>
              <div className="mb-1 custom-stat">
                <h2 className="text-[#FF7A00] font-[64px]">99%</h2>
                <p className="text-[#000000] font-[24px]">Of colleges reached out</p>
              </div>
              <div className="custom-stat">
                <h2 className="text-[#FF7A00] font-20">1500+</h2>
                <p className="text-[#FFFFFF]">No of students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle line */}
      <div className="h-screen">
        <img src="images/insights/line.png" alt="" />
      </div>

      {/* Right half with red background */}
      <div className="w-1/2">
        <div className="max-h-[388px] max-w-[388px] m-50px">
          <img src="images/insights/circle.png" alt="" />
        </div>

        <div className="data">
          <h1>No of Attendees in WOW 2022 </h1>

          {/* Attendees by Year */}
          <div className="flex mt-10px">
            <span className="rounded-lg h-34px w-41px bg-[#0D99FF]"></span>
            <h3 className="ml-4px">Final Year</h3>
          </div>
          <div className="flex mt-10px">
            <span className="rounded-lg h-34px w-41px bg-[#91D1FF]"></span>
            <h3 className="ml-4px">Third Year</h3>
          </div>
          <div className="flex mt-10px">
            <span className="rounded-lg h-34px w-41px bg-[#B3DFFF]"></span>
            <h3 className="ml-4px">Second Year</h3>
          </div>
          <div className="flex mt-10px">
            <span className="rounded-lg h-34px w-41px bg-[#C7E7FF]"></span>
            <h3 className="ml-4px">First Year</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;