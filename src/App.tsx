import Faq from "./pages/faq";
import Footer from "./pages/footer/index.tsx"
import Navbar from "./pages/navbar/index.tsx";
import TechFocused from "./pages/tech_focused/TechFocused.tsx";
import Speakers from "./pages/speakers/index.tsx"
function App() {
  return (
    <>
      <div className="w-[100vw] min-h-screen relative flex flex-col gap-20 overflow-x-hidden overflow-y-scroll ">
<<<<<<< HEAD
        <Navbar/>
        <WeAreExpecting />
        <Footer/>
=======
        {/* <Navbar/> */}
        <Faq />
        {/* <Footer/> */}
>>>>>>> 1af2f49 (FAQ page almost done & react-icon library not working)
      </div>
    </>
  );
}

export default App;
