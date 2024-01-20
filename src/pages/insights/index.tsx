const Insights = () => {
    return (
      <div className="flex min-h-screen"style={{ backgroundImage: "url('images/insights/Insights_bg.png')" }}>
        {/* Left half with background image */}
        <div className="w-1/2 bg-cover bg-center relative" >
          <div className="flex-row">
            <div className="flex">
              <img
                src="images/insights/mitclg.png"
                alt="MIT College Logo"
                className="mx-auto my-8 w-[383px] h-[443px] "
              />
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
        {/* Right half with red background */}
        <div className="w-1/2 bg-red-500"></div>
      </div>
    );
  };
  
  export default Insights;
  