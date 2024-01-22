// YourComponent.tsx

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
   

    return (
        <>

            <div className="w-full h-[850px] bg-no-repeat bg-white bg-[url('images/flow_sponsors/background.png')]">
                <div className="w-[437] h-[150px]  bg-white flex items-center justify-center ">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black">
                        Event Flow
                    </h1>
                </div>


                <div className="flex justify-evenly flex-wrap ml-10">
                    <div className="w-[500px] m-2 p-4 border-2 border-gray-300  text-center ">
                        
                        

                    </div>
                    <div className="w-[5px] h-[650px] m-2 p-4  text-center bg-no-repeat  bg-[url('images/flow_sponsors/line.png')]"></div>
                    <div className="w-1/3 m-2 p-4 border-2 border-gray-300 text-center  "></div>
                </div>

            </div>

            {/* Event Sponsors -------------------------------------- */}
            <div>
                <div className="w-[437] h-[150px]  bg-white flex items-center justify-center ">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black">
                        Event Sponsors
                    </h1>
                </div>
                <div className="w-full h-full bg-white flex flex-wrap justify-evenly">
                    <div className="w-[1500px] h-200 bg-white-300 flex flex-wrap justify-evenly">
                        {SponsorArray.map((cardData) => (
                            <div key={`Sponsor_${cardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden ">
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
                            <div key={`PoweredBy_${PoweredbyCardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden ">
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
             <div>
                <div className="w-[437] h-[200px]  bg-white flex items-center justify-center ">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black">
                        Hiring Partners
                    </h1>
                </div>
                <div className="w-full h-full bg-white flex flex-wrap justify-evenly">
                    <div className="w-[1500px] h-200 bg-white-300 flex flex-wrap justify-evenly">
                        {Hiringpartnersarray.map((hiringpartnerCardData) => (
                            <div key={`HiringPartner_${hiringpartnerCardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden ">
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
                            <div key={`CommunityPartner_${communitypartnerCardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden ">
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
