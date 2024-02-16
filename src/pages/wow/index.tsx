function Whywow() {
  return (
    <div id="whywow" className="w-[100vw] h-max bg-white pt-16">
      <p className="text-5xl text-center text-[#545454] mt-16 z-1 flex  justify-center items-center">
        What is
        &#160;
        <img className="inline w-36" src="images/wow/WOW.jpg" alt="WOW" /> 
        &#160;
        ?
      </p>
      <div className="container mx-auto flex px-5 py-5 lg:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 p-5 leading-relaxed font-light text-[#545454] text-xl lg:text-3xl text-justify">
            GDSC (Wonder Of Wonders), aka GDSC WOW is a collaborative event of
            30+ GDSCs across Pune, who have joined hands to bring together
            students, developers, and communities under the same roof. <br /> <br /> This is a
            student centric event depicting a range of technologies, an
            opportunity to network with tech experts and attain knowledge about
            latest developments in the field of technology through hands-on
            activities, lightning talks and much more!
          </p> 
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center " alt="hero" src="images/wow/hero.png" />
        </div>
      </div>
    </div>
  );
}

export default Whywow;
