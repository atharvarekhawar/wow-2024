import React from "react";
import insightWow from "../../../public/images/insights/insights_wow.jpg";
import insightImg from "../../../public/images/insights/insights_img.jpg";

const SecondPartInsights: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 min-h-[500px] flex items-center justify-center p-5 ">
      <div className="relative w-[500px] h-full flex items-center justify-end ">
        <img
          src={insightWow}
          alt="wow"
          className="absolute h-[250px] sm:h-[350px] top-1/2 right-1/2 transform translate-x-20 -translate-y-1/2 z-1"
        />
        <img src={insightImg} alt="insights" className="z-10 h-[350px] sm:h-[450px]" />
      </div>
    </div>
  );
};
export default SecondPartInsights;
