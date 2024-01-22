import Carroussel from './Carroussel';
import {v4 as uuidv4} from "uuid"

export function Card(){

  // <div className="w-[500px] h-[280px] rounded-2xl border-black border shadow-[30px_30px_30px_-15px_rgba(0,0,0,0.3)] z-10"></div>

  return (
      <div className="md:w-[500px] md:h-[280px] w-[300px] h-[180px] rounded-2xl border-black border shadow-[30px_30px_30px_-15px_rgba(0,0,0,0.3)]"></div>
  );
}


export default function WeAreExpecting() {

  const slides = [
    {
      key: uuidv4(),
      content: <Card/>
    },
    {
      key: uuidv4(),
      content: <Card/>
    },
    {
      key: uuidv4(),
      content: <Card/>
    },
    {
      key: uuidv4(),
      content: <Card/>
    },
    {
      key: uuidv4(),
      content: <Card/>
    },
    {
      key: uuidv4(),
      content: <Card/>
    }
    
  ];

  return (
    <div className="relative w-[100vw] bg-white overflow-hidden">
        
      {/* background shapes */}
      <img src="images/background/circle.svg" className="absolute top-[100px] left-[250px] h-5 w-5"/>
      <img src="images/background/triangle.svg" className="absolute top-[20px] left-[650px] h-7 w-7" />
      <img src="images/background/rectangle.svg" className="absolute top-[50px] left-[1200px] h-12 w-12" />
      <img src="images/background/circle.svg" className="absolute top-[280px] left-[1550px] h-5 w-5" />
      <img src="images/background/triangle.svg" className="absolute top-[80px] left-[1700px] h-7 w-7" />
      <img src="images/background/rectangle.svg" className="absolute top-[360px] left-[250px] h-12 w-12" />
      <img src="images/background/triangle.svg" className="absolute top-[500px] left-[1700px] h-7 w-7" />
      <img src="images/background/circle.svg" className="absolute top-[800px] left-[400px] h-5 w-5" />
      <img src="images/background/triangle.svg" className="absolute top-[810px] left-[1200px] h-5 w-5" />


      <p className="md:text-4xl text-2xl text-center text-[#545454] mt-16 z-1">We are expecting...</p>

      <div className="w-full flex items-center justify-center mt-14">

        <div className="w-[60%] flex justify-evenly flex-wrap z-10">
          <div className="min-w-[200px] h-[200px] bg-[#F4B400] opacity-50 rounded-[20px] m-5"></div>
          <div className="min-w-[200px] h-[200px] bg-[#DB4437] opacity-50 rounded-[20px] m-5"></div>
          <div className="min-w-[200px] h-[200px] bg-[#0F9D58] opacity-50 rounded-[20px] m-5"></div>
          <div className="min-w-[200px] h-[200px] bg-[#4285F4] opacity-50 rounded-[20px] m-5"></div>
        </div>

      </div>

      <p className="md:text-4xl text-xl text-center text-[#545454] mt-16">Things you don't want to miss! </p>👀


      <div className='w-[100%] h-[400px] z-2'>
        <Carroussel
          cardsP={slides}
          showArrowsP={false}
          height="400px"
          width="90%"
          margin="0 auto"
          offset={2}
        />
      </div>



    </div>
  );
}