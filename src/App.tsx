import WeAreExpecting from "./pages/WeAreExpecting/index.tsx";
import Faq from "./pages/faq";
import Footer from "./pages/footer/index.tsx";
import Insights from "./pages/insights/index.tsx";
import Navbar from "./pages/navbar/index.tsx";
import Speakers from "./pages/speakers/index.tsx";
import TechFocused from "./pages/tech_focused/TechFocused.tsx";
import Index from "./pages/wow/index.tsx";

function App() {
  return (
    <>
      <div className=" min-h-screen relative flex flex-col overflow-x-hidden  ">
        <Navbar />
        <Index/>
        <WeAreExpecting/>
        <TechFocused/>
        <Speakers/>
        <Faq />
        <Insights />
        <Footer />
      </div>
    </>
  );
}

export default App;
