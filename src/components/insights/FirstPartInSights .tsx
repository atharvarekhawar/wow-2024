import blob from "../../../public/images/insights/insights_blob.svg"
import Card from "./card";

const FirstPartInSights = () => {
  return (
    <div className="relative flex flex-wrap w-full min-h-[500px] lg:w-1/2 justify-center items-center  gap-5 ">
      <img
        src={blob}
        alt="blob"
        className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-1 h-[400px] lg:h-[500px]" 
      />
      <Card
        value={"10,000+"}
        description="Social Media interactions"
      />
      <Card
        value={"99%"}
        description="Colleges Reached Out"
      />
      <Card
        value={"10"}
        description="Copanies Reached Out"
      />
      <Card
        value={"1,500+"}
        description="Students Attendees"
      />
    </div>
  );
};

export default FirstPartInSights;
