import blob from "/images/insights/insights_blob.svg";
import Card from "./card";

const FirstPartInSights = () => {
  return (
    <div className="relative flex flex-col w-full min-h-[500px] lg:w-1/2 justify-center items-center gap-5">
      <img
        src={blob}
        alt="blob"
        className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-1 h-[400px] lg:h-[500px]"
      />
      <div className="flex flex-col md:flex-row gap-5">
        <Card value={"10,000+"} description="Social Media interactions" />
        <Card value={"99%"} description="Colleges Reached Out" />
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <Card value={"10"} description="Companies Reached Out" />
        <Card value={"1,500+"} description="Students Attendees" />
      </div>
    </div>
  );
};

export default FirstPartInSights;
