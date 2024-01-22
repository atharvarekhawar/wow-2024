<<<<<<< HEAD
<<<<<<< HEAD
import Faq from "./pages/faq";
import Footer from "./pages/footer/index.tsx"
import Navbar from "./pages/navbar/index.tsx";
import TechFocused from "./pages/tech_focused/TechFocused.tsx";
import Speakers from "./pages/speakers/index.tsx"
=======
// import Faq from "./pages/faq";
// import Footer from "./pages/footer/index.tsx"
import Insights from "./pages/insights/index.tsx";
//import Navbar from "./pages/navbar/index.tsx";
>>>>>>> 6ee1c18 (working on insights page)
=======
import Faq from "./pages/faq";
import Footer from "./pages/footer/index.tsx"
import Insights from "./pages/insights/index.tsx";
import Navbar from "./pages/navbar/index.tsx";
>>>>>>> 4567bc7 (I done first part of insights part)
function App() {
  return (
    <>
      <div className="w-[100vw] min-h-screen relative flex flex-col gap-20 overflow-x-hidden overflow-y-scroll ">
<<<<<<< HEAD
<<<<<<< HEAD
        <Navbar/>
        <WeAreExpecting />
        <Footer/>
=======
        {/* <Navbar/> */}
        {/* <Faq /> */}
        <Insights/>
        {/* <Footer/> */}
>>>>>>> 1af2f49 (FAQ page almost done & react-icon library not working)
=======
        <Navbar/>
        <Faq />
        <Insights/>
        <Footer/>
>>>>>>> a2e5ad4 (My final changes for pull request)
      </div>
    </>
  );
}

export default App;
