import Faq from "./pages/faq";
import Footer from "./pages/footer/index.tsx";
import Insights from "./pages/insights/index.tsx";
import Navbar from "./pages/navbar/index.tsx";

function App() {
  return (
    <>
      <div className="w-[100vw] min-h-screen relative flex flex-col gap-20 overflow-x-hidden overflow-y-scroll ">
        <Navbar />
        <Faq />
        <Insights />
        <Footer />
      </div>
    </>
  );
}

export default App;
