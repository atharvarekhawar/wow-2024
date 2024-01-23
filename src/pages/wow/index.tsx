import WOW from "../../../public/images/wow/WOW.jpg";
import Hero from "../../../public/images/wow/hero.png";

function Index() {
  return (
    <div className="w-[100vw] h-[100vh] bg-white mt-10 ">
      <p className="text-4xl text-center text-[#545454] mt-16 z-1 ">
        What is <img className="inline w-36" src={WOW} alt="WOW" /> ?
      </p>
      <div className="container mx-auto flex px-5 py-5 lg:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 p-5 leading-relaxed text-[#545454] text-xl lg:text-2xl text-justify">
            GDSC (Wonder Of Wonders), aka GDSC WOW is a collaborative event of
            30+ GDSCs across Pune, who have joined hands to bring together
            students, developers, and communities under the same roof. This is a
            student centric event depicting a range of technologies, an
            opportunity to network with tech experts and attain knowledge about
            latest developments in the field of technology through hands-on
            activities, lightning talks and much more!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center " alt="hero" src={Hero} />
        </div>
      </div>
    </div>
  );
}

export default Index;
