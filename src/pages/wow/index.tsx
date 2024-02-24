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
            GDSC (Wow Of Wonders) aka WOW! Is a student-centric technical and networking event collaboratively arranged by 30+ GDSCs around Pune, for Pune!
            <br /> <br />
            We are here to bring together the students, developers, and communities under one roof and thus WOW is your passport to a day filled with immersive tech experiences, networking with industry experts, and getting to know about the latest technologies!

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
