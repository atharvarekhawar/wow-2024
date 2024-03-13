import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Home() {
     const openGoogleForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd8yoyPmL2vNqCruROnfa-LN3aLhwck3lUhmPoFVO41cWBMkw/viewform?usp=pp_url', '_blank');
     };
      const sponsorCall = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfm80H8Gz8G1Uk2AzO9MINDCZzuKQZGbr5B6YptZquxlgzQGA/viewform?usp=sf_link', '_blank');
  };


    return (
        <div id="home" className="w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_center,rgba(255,175,82,1.00)_0%,rgba(255,255,255,1.00)_100%)]">
            <div className="w-[100vw] h-[100vh] bg-[url('/images/home/bg.png')] bg-fixed bg-cover bg-center bg-no-repeat relative">
                
                <Parallax pages={1.1}>

                    <ParallaxLayer offset={0} speed={-9}>
                    <div className="absolute bottom-0 -right-20">
                        <img className="h-[0] md:h-[24vw] w-auto " src="/images/home/sinhgad.svg" alt="Sinhgad" />
                    </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0} speed={-9}>
                    <div className="absolute bottom-0 -left-10">
                        <img className="h-[0] md:h-[20vw] w-auto " src="/images/home/shaniwar_wada.svg" alt="Shaniwar Wada" />
                    </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0} speed={-7}>
                    <div className='absolute -bottom-20 w-full'>
                        <div className="flex items-center justify-center">
                            <img className="h-[58vh] w-auto z-40" src="/images/home/bappa.svg" alt="Bappa" />
                        </div>
                    </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={0} speed={-3}>
                       <div className="p-5 flex items-center justify-center">
                           <img className="h-[38vh] w-auto" src="/images/home/content.svg" alt="Center Content"></img>
                       </div>
                       <div className="w-fit mx-auto flex gap-4 cursor-pointer text-base text-white font-semibold">
                          <button className='w-fit py-2 px-3 bg-[#4C8BF5] rounded hover:scale-105 transition'>
                              <a href='' onClick={sponsorCall}>Apply for sponsorships</a>
                          </button>
                          <button className='w-fit py-2 px-3 bg-[#DD4B35] rounded hover:scale-105 transition'>
                              <a href='' onClick={openGoogleForm}>Apply for speaker sessions</a>
                          </button>
                       </div>
                    </ParallaxLayer>

                </Parallax>       
            </div>
        </div>
    )
}

export default Home;