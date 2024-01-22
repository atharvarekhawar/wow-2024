import WeAreExpecting from "./pages/WeAreExpecting/index.tsx";
import Footer from "./pages/footer/index.tsx"
import Navbar from "./pages/navbar/index.tsx";
import TechFocused from "./pages/tech_focused/TechFocused.tsx";
import Speakers from "./pages/speakers/index.tsx"

function App() {
  return (
    <>
      <div className="w-[100vw] min-h-screen relative flex flex-col gap-20 overflow-x-hidden overflow-y-scroll ">
        <Navbar />
        <WeAreExpecting />
        <Speakers />
        <TechFocused />
        
        <Footer />
      </div>
    </>
  );
}

export default App;
