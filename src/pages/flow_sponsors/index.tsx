

import React from 'react';



interface Card {
    id: number;
    logo: string;
}

const FlowSponsors: React.FC = () => {
    // Array of JSON data directly in the same file
    const SponsorArray: Card[] = [
        { id: 1, logo: 'images/flow_sponsors/apple.jpeg' },
        { id: 2, logo: 'images/flow_sponsors/microsoft.png' },
        { id: 3, logo: 'images/flow_sponsors/google.png' },
        { id: 4, logo: 'images/flow_sponsors/amazon.png' },

    ];

    const Powerdybyarray: Card[] = [
        { id: 1, logo: 'images/flow_sponsors/poweredby1.png' },
        { id: 2, logo: 'images/flow_sponsors/poweredby2.png' },
        { id: 3, logo: 'images/flow_sponsors/poweredby3.png' },
        { id: 4, logo: 'images/flow_sponsors/poweredby4.png' },
    ];

    const Hiringpartnersarray: Card[] = [
        { id: 1, logo: 'images/flow_sponsors/hp1.png' },
        { id: 2, logo: 'images/flow_sponsors/hp2.png' },
        { id: 3, logo: 'images/flow_sponsors/hp3.png' },
        { id: 4, logo: 'images/flow_sponsors/hp4.jpeg' },

    ];

    const Communitypartnersarray: Card[] = [
        { id: 1, logo: 'images/flow_sponsors/hp1.png' },
        { id: 2, logo: 'images/flow_sponsors/hp1.png' },
        { id: 3, logo: 'images/flow_sponsors/hp1.png' },
        { id: 4, logo: 'images/flow_sponsors/hp1.png' },

    ];

    
   
    const partnersData = {
        partners: [
          {
            category: "Web3 Community Partner",
            title: "Web3 Community Partner",
            image: {
              src: "images/flow_sponsors/google.png",
              alt: "Web3 Community Partner Image",
            },
            link: "https://web3communitypartner.com",
          },
          {
            category: "Ticketing Partner",
            title: "Ticketing Partner",
            image: {
              src: "images/flow_sponsors/google.png",
              alt: "Ticketing Partner Image",
            },
            link: "https://ticketingpartner.com",
          },
          {
            category: "Learning Partner",
            title: "Learning Partner",
            image: {
              src: "images/flow_sponsors/google.png",
              alt: "Learning Partner Image",
            },
            link: "https://learningpartner.com",
          },
          {
            category: "Snacks Partner",
            title: "Snacks Partner",
            image: {
              src: "images/flow_sponsors/google.png",
              alt: "Snacks Partner Image",
            },
            link: "https://snackspartner.com",
          },
        ],
      };
      const customBoxShadow = {
        boxShadow: '5px 5px 5px 5px #C4C4C4', // 3px offset, 3px blur, 3px spread, 10px size, gray color
    };
    
    return (
        <>

            <div id='schedule' className="w-full  bg-no-repeat bg-white bg-[url('images/flow_sponsors/background0.png')] xl:bg-[url('images/flow_sponsors/background1.png')]">
                
                <div className="w-[437] h-[150px]   flex items-center justify-center  ">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black">
                        Event Flow
                    </h1>
                </div>


                <div className="flex justify-evenly flex-wrap ml-10">
                    <div className="w-[500px] m-2 p-4   text-center ">
                        <div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 flex   " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center sm:w-[300px]">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration1</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for wvwn</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%] sm:pl-[-10px]">
                                <p className='mt-[50%]  '>7:00 to 9:00</p>
                            </div>
                        </div>
                        <div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 mt-[15px]  flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div>
                        <div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500  mt-[15px] flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div>
                        <div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 mt-[15px]  flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div><div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 mt-[15px]  flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div><div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 mt-[15px]  flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div><div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 mt-[15px]  flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div>

                    </div>
                    <div className="w-[5px] h-[680px] m-2 p-4  text-center bg-no-repeat  bg-[url('images/flow_sponsors/line.png')] hidden lg:block"></div>
                    <div className="w-[500px] m-2 p-4  border-gray-300 text-center  ">
                    <div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 flex  " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div>
                        <div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500  mt-[15px]  flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div>
                        <div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500  mt-[15px] flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div>
                        <div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 mt-[15px]  flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div><div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 mt-[15px]  flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div><div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 mt-[15px]  flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div><div className="h-[80px] w-[400px] sm:w-[460px] parent-div  border-l-4 border-green-500 mt-[15px]  flex " style={customBoxShadow}>
                            <div className="child-div  text-black text-left w-[15%] ">
                                <div className="h-[50%] w-[60%]  mt-[30%] ml-[30%] rounded-md "><img src="images/flow_sponsors/profile.png" alt="" /></div>
                            </div>
                            <div className="child-div  text-black text-left  w-[60%] items-center">
                                <div>
                                    <p className="text-lg font-serif mt-[5%] ml-[5%]">Registration</p>
                                    <p className="text-sm font-serif ml-[5%] text-gray-700">Get yourself registered for the event</p>
                                </div>
                            </div>
                            <div className="child-div  text-black text-left w-[25%]">
                                <p className='mt-[50%]'>7:00 to 9:00</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Event Sponsors -------------------------------------- */}
            <div id="sponsors" className="bg-white bg-[url('images/flow_sponsors/background.jpeg')] ">
                <div className="w-[437] h-[150px]  bg-white flex items-center justify-center  ">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black">
                        Event Sponsors
                    </h1>
                </div>
                <div className="w-full h-full bg-white flex flex-wrap justify-evenly">
                    <div className="w-[1500px] h-200 bg-white-300 flex flex-wrap justify-evenly">
                        {SponsorArray.map((cardData) => (
                            <div key={`Sponsor_${cardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden "style={customBoxShadow}>
                                <img
                                    src={cardData.logo}
                                    alt={`Logo ${cardData.id}`}
                                    className="w-full h-full p-8 object-contain rounded"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Powered By -------------------------------------- */}
                <div>
                    <div className="w-[437] h-[200px]  bg-white flex items-center justify-center  ">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black">
                            Powered By
                        </h1>
                    </div>
                    <div className="w-full h-full bg-white flex flex-wrap justify-evenly">
                        <div className="w-[1500px] h-200 bg-white-300 flex flex-wrap justify-evenly">
                            {Powerdybyarray.map((PoweredbyCardData) => (
                                <div key={`PoweredBy_${PoweredbyCardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden "style={customBoxShadow}>
                                    <img
                                        src={PoweredbyCardData.logo}
                                        alt={`Logo ${PoweredbyCardData.id}`}
                                        className="w-full h-full p-8 object-contain rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Hiring Partners -------------------------------------- */}
                <div id="partners">
                    <div className="w-[437] h-[200px]  bg-white flex items-center justify-center ">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black">
                            Hiring Partners
                        </h1>
                    </div>
                    <div className="w-full h-full bg-white flex flex-wrap justify-evenly">
                        <div className="w-[1500px] h-200 bg-white-300 flex flex-wrap justify-evenly">
                            {Hiringpartnersarray.map((hiringpartnerCardData) => (
                                <div key={`HiringPartner_${hiringpartnerCardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden "style={customBoxShadow}>
                                    <img
                                        src={hiringpartnerCardData.logo}
                                        alt={`Logo ${hiringpartnerCardData.id}`}
                                        className="w-full h-full p-8 object-contain rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



                {/* ----------------------------             REAMAINING SECTION---------------------------------------------------------------- */}

                <div className="w-full mt-2 flex flex-wrap justify-evenly bg-white text-black bg-no-repeat  bg-[url('images/flow_sponsors/background.png')] ">
      {partnersData.partners.map((partner, index) => (
        <div key={index} className="w-[600px] mt-[100px]  ">
          <h1 className="h-[112px] text-center whitespace-normal font-bold">{partner.category}</h1>
          <div className="flex items-center justify-center mt-7">
            <a href={partner.link}>
              <div className="w-[333.33px] h-[200px] border-[0.5px] shadow-xl rounded-bl-xl rounded-tr-xl "style={customBoxShadow}>
                <img src={partner.image.src} alt={partner.image.alt} className='w-full h-full p-8 object-contain' />
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>



                {/* Community Partners -------------------------------------- */}
                <div>
                    <div className="w-[437] h-[200px]  bg-white flex items-center justify-center ">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black">
                            Community Partners
                        </h1>
                    </div>
                    <div className="w-full h-full bg-white flex flex-wrap justify-evenly">
                        <div className="w-[1500px] h-200 bg-white-300 flex flex-wrap justify-evenly">
                            {Communitypartnersarray.map((communitypartnerCardData) => (
                                <div key={`CommunityPartner_${communitypartnerCardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden "style={customBoxShadow}>
                                    <img
                                        src={communitypartnerCardData.logo}
                                        alt={`Logo ${communitypartnerCardData.id}`}
                                        className="w-full h-full p-8 object-contain rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FlowSponsors;
