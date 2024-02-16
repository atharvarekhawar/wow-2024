

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
    interface EventData {
        time: string;
        heading: string;
        paragraph: string;
    }
    const scheduleData: EventData[] = [
        {
            time: "7:00pm - 9:00pm",
            heading: "First Event",
            paragraph: "Description of the first event."
        },
        {
            time: "7:00pm - 9:00pm",
            heading: "Second Event",
            paragraph: "Description of the first event."
        },
        
        {
            time: "7:00pm - 9:00pm",
            heading: "third Event",
            paragraph: "Description of the first event."
        },
        
        {
            time: "7:00pm - 9:00pm",
            heading: "fourth Event",
            paragraph: "Description of the first event."
        },
        
        {
            time: "7:00pm - 9:00pm",
            heading: "fifth Event",
            paragraph: "Description of the first event."
        },
        
        {
            time: "7:00pm - 9:00pm",
            heading: "sixth Event",
            paragraph: "Description of the first event."
        },
        
        {
            time: "7:00pm - 9:00pm",
            heading: "seventh Event",
            paragraph: "Description of the first event."
        },
        
        {
            time: "7:00pm - 9:00pm",
            heading: "eighth Event",
            paragraph: "Description of the first event."
        },
        
        
    ];
    const event: EventData = scheduleData[0];

    const customBoxShadow = {
        boxShadow: '5px 5px 5px 5px #C4C4C4', // 3px offset, 3px blur, 3px spread, 10px size, gray color
    };
    const eventflowBoxShadow = {
        boxShadow: '5px 5px 5px 5px #C4C4C4', // 3px offset, 3px blur, 3px spread, 10px size, gray color
    };
    const colors = ['#FF0000', '#0F9D58', '#4285F4', '#F6C02A'];
    return (
        <>
         <div className='bg-white'>
            <div className="text-center bg-ecf0f3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold" style={{ color: 'black' }}>
                    Event Flow
                </h1>
            </div>
            <div className='m-3'>
                {scheduleData.map((event, index) => (
                    <div key={index} className="md:w-[1160px] h-[90px] m-auto flex items-center justify-between mt-[30px]">
                        {/* Time slot container */}
                        <div className="h-[90px] w-[100px]  flex items-center justify-center md:w-[334px]  sm:w-[150px] shadow-lg shadow-black-500/40 bg-gray-400 rounded-md x text-[12px] md:text-lg" style={{ color: 'black', backgroundColor: '#ECF0F3' }}>
                            {event.time}
                        </div>
                        {/* Information container */}
                        <div className="h-[90px] w-[250px]   pt-[10px] md:w-[806px] pl-[85px] shadow-lg shadow-black-500/40 sm:w-[700px] text-black rounded-md x" style={{ borderLeft: `6px solid ${colors[index % colors.length]}`, backgroundColor: '#ECF0F3'}} >
                            <h4 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{event.heading}</h4>
                            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">{event.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            
<div></div>
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
                            <div key={`Sponsor_${cardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden " style={customBoxShadow}>
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
                                <div key={`PoweredBy_${PoweredbyCardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden " style={customBoxShadow}>
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
                                <div key={`HiringPartner_${hiringpartnerCardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden " style={customBoxShadow}>
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
                            <h1 className="h-[112px] text-[25px] text-center whitespace-normal font-bold text-20px">{partner.category}</h1>
                            <div className="flex items-center justify-center mt-7">
                                <a href={partner.link}>
                                    <div className="w-[333.33px] h-[200px] border-[0.5px] shadow-xl rounded-bl-xl rounded-tr-xl " style={customBoxShadow}>
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
                                <div key={`CommunityPartner_${communitypartnerCardData.id}`} className="w-[333.33px] h-[200px] shadow-xl m-2 border-[0.5px] border-gray-400 rounded-tr-2xl rounded-bl-2xl overflow-hidden " style={customBoxShadow}>
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
