import Carroussel from './Carroussel';
import { v4 as uuidv4 } from "uuid";

const slides = [
  {
    key: uuidv4(),
    content: <div className="w-[500px] h-[280px] rounded-2xl border-black border shadow-[30px_30px_30px_-15px_rgba(0,0,0,0.3)]"></div>
  },
  {
    key: uuidv4(),
    content: <div className="w-[500px] h-[280px] rounded-2xl border-black border shadow-[30px_30px_30px_-15px_rgba(0,0,0,0.3)]"></div>
  },
  {
    key: uuidv4(),
    content: <div className="w-[500px] h-[280px] rounded-2xl border-black border shadow-[30px_30px_30px_-15px_rgba(0,0,0,0.3)]"></div>
  },
  {
    key: uuidv4(),
    content: <div className="w-[500px] h-[280px] rounded-2xl border-black border shadow-[30px_30px_30px_-15px_rgba(0,0,0,0.3)]"></div>
  },
  {
    key: uuidv4(),
    content: <div className="w-[500px] h-[280px] rounded-2xl border-black border shadow-[30px_30px_30px_-15px_rgba(0,0,0,0.3)]"></div>
  },
  {
    key: uuidv4(),
    content: <div className="w-[500px] h-[280px] rounded-2xl border-black border shadow-[30px_30px_30px_-15px_rgba(0,0,0,0.3)]"></div>
  }
];

export default function WeAreExpecting() {



  return (
    <div className="w-[100vw] h-[100vh] bg-white">

      {/* top left circle */}
      <img src="images/background/circle.svg" className="absolute top-[300px] left-[250px] h-5 w-5" />
      {/* top left triangle */}
      <img src="images/background/triangle.svg" className="absolute top-[180px] left-[650px] h-7 w-7" />
      {/* top right rectangle */}
      <img src="images/background/rectangle.svg" className="absolute top-[230px] left-[1200px] h-12 w-12" />

      <img src="images/background/rectangle.svg" className="absolute top-[230px] left-[1200px] h-12 w-12" />

      <img src="images/background/circle.svg" className="absolute top-[430px] left-[1550px] h-5 w-5" />

      <img src="images/background/triangle.svg" className="absolute top-[300px] left-[1700px] h-7 w-7" />

      <img src="images/background/rectangle.svg" className="absolute top-[600px] left-[300px] h-12 w-12" />

      <img src="images/background/triangle.svg" className="absolute top-[700px] left-[1700px] h-7 w-7" />

      <img src="images/background/circle.svg" className="absolute top-[1000px] left-[500px] h-5 w-5" />

      <img src="images/background/triangle.svg" className="absolute top-[1070px] left-[1200px] h-7 w-7" />


      <p className="text-4xl text-center text-[#545454] mt-16 z-1">We are expecting...</p>

      <div className="w-full flex items-center justify-center mt-14">

        <div className="w-[60%] flex justify-evenly">
          <div className="w-[200px] h-[200px] bg-[#F4B400] opacity-50 rounded-[20px]"></div>
          <div className="w-[200px] h-[200px] bg-[#DB4437] opacity-50 rounded-[20px]"></div>
          <div className="w-[200px] h-[200px] bg-[#0F9D58] opacity-50 rounded-[20px]"></div>
          <div className="w-[200px] h-[200px] bg-[#4285F4] opacity-50 rounded-[20px]"></div>
        </div>

      </div>

      <p className="text-4xl text-center text-[#545454] mt-16">Things you don't want to miss! </p>👀


      <div className='w-full'>
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