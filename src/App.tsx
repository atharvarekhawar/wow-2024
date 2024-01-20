import WeAreExpecting from "./pages/WeAreExpecting/index.tsx";
import Footer from "./pages/footer/index.tsx"
import Navbar from "./pages/navbar/index.tsx";
function App() {
  return (
    <>
      <div className="w-[100vw] min-h-screen relative flex flex-col gap-20 overflow-x-hidden overflow-y-scroll ">
        <Navbar/>
        <WeAreExpecting />
        <Footer/>
      </div>
    </>
  );
}

export default App;
