import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [selected, setSelected] = useState("home");
  const [menuOpened, setMenuOpened] = useState(false);
  window.addEventListener("scroll", ()=>{
    if(document.getElementById("home")!.getBoundingClientRect().bottom<=0){
      document.getElementById("navbar")!.classList.add("fixed");
    } else {
      document.getElementById("navbar")!.classList.remove("fixed");
    }
  })
  return (
    <nav id="navbar" className="flex w-full bg-white lg:p-0 z-50 ">
      <div className="w-full flex flex-col items-center">
        <div className="w-full h-full flex items-center lg:justify-normal">
          {/* Dropdown */}
          <div className=" block lg:hidden">
            {/* Hamburger */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={() => {
                setMenuOpened((prev) => !prev);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            {/* Mobile nav-links */}
            <div
              className={`absolute top-0 right-0 w-full bg-white h-screen flex flex-col gap-10 p-5  ${
                !menuOpened ? "hidden" : ""
              }`}
            >
              <div className="w-full flex items-center justify-between">
                <img src="images/navbar/nav-wow.svg" alt="WOW" width={100} />
                <div
                  className="rounded-full p-2 cursor-pointer hover:bg-rose-400"
                  onClick={() => {
                    setMenuOpened((prev) => !prev);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>

              <div className="w-full flex flex-col gap-5">
                <Link to="home" smooth={true} spy={true} offset={0}>
                  <div
                    className={`text-[#545454] font-semibold text-xl p-2 border-b cursor-pointer hover:text-black ${
                      selected === "home" ? "text-black font-bold " : ""
                    }`}
                    onClick={() => {
                      setSelected("home");
                      setMenuOpened(false);
                    }}
                  >
                    Home
                  </div>
                </Link>
                <Link to="whywow" smooth={true} spy={true} offset={0}>
                  <div
                    className={`text-[#545454] font-semibold text-xl p-2 border-b cursor-pointer hover:text-black ${
                      selected === "whywow" ? "text-black font-bold " : ""
                    }`}
                    onClick={() => {
                      setSelected("whywow");
                      setMenuOpened(false);
                    }}
                  >
                    Why WOW
                  </div>
                </Link>
                <Link to="speakers" smooth={true} spy={true} offset={-50}>
                  <div
                    className={`text-[#545454] font-semibold text-xl p-2 border-b cursor-pointer hover:text-black ${
                      selected === "speakers" ? "text-black font-bold " : ""
                    }`}
                    onClick={() => {
                      setSelected("speakers");
                      setMenuOpened(false);
                    }}
                  >
                    Speakers
                  </div>
                </Link>
                <Link to="schedule" smooth={true} spy={true} offset={-50}>
                  <div
                    className={`text-[#545454] font-semibold text-xl p-2 border-b cursor-pointer hover:text-black ${
                      selected === "schedule" ? "text-black font-bold " : ""
                    }`}
                    onClick={() => {
                      setSelected("schedule");
                      setMenuOpened(false);
                    }}
                  >
                    Schedule
                  </div>
                </Link>
                <Link to="sponsors" smooth={true} spy={true} offset={-50}>
                  <div
                    className={`text-[#545454] font-semibold text-xl p-2 border-b cursor-pointer hover:text-black ${
                      selected === "sponsors" ? "text-black font-bold " : ""
                    }`}
                    onClick={() => {
                      setSelected("sponsors");
                      setMenuOpened(false);
                    }}
                  >
                    Sponsors
                  </div>
                </Link>
                <Link to="partners" smooth={true} spy={true} offset={-50}>
                  <div
                    className={`text-[#545454] font-semibold text-xl p-2 border-b cursor-pointer hover:text-black ${
                      selected === "partners" ? "text-black font-bold " : ""
                    }`}
                    onClick={() => {
                      setSelected("partners");
                      setMenuOpened(false);
                    }}
                  >
                    Partners
                  </div>
                </Link>
                {/* <Link to="jobportal" smooth={true} spy={true} offset={-50}>
                  <div
                    className={`text-[#545454] font-semibold text-xl p-2 border-b cursor-pointer hover:text-black ${
                      selected === "jobportal" ? "text-black font-bold " : ""
                    }`}
                    onClick={() => {
                      setSelected("jobportal");
                      setMenuOpened(false);
                    }}
                  >
                    Job portal
                  </div>
                </Link> */}
                <Link to="insights" smooth={true} spy={true} offset={-80}>
                  <div
                    className={`text-[#545454] font-semibold text-xl p-2 border-b cursor-pointer hover:text-black ${
                      selected === "insights" ? "text-black font-bold " : ""
                    }`}
                    onClick={() => {
                      setSelected("insights");
                      setMenuOpened(false);
                    }}
                  >
                    Insights
                  </div>
                </Link>
                <Link to="faq" smooth={true} spy={true} offset={-50}>
                  <div
                    className={`text-[#545454] font-semibold text-xl p-2 border-b cursor-pointer hover:text-black ${
                      selected === "faq" ? "text-black font-bold " : ""
                    }`}
                    onClick={() => {
                      setSelected("faq");
                      setMenuOpened(false);
                    }}
                  >
                    FAQ
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Wow image */}
          
            <img src="images/navbar/nav-wow.svg" alt="WOW" width={100} className="ml-[1rem] lg:ml-[5rem]" />
          
          {/* Desktop nav-links */}
          <div className="ml-10 hidden lg:flex space-x-5">
            <Link to="home" smooth={true} spy={true} offset={0}>
              <div
                className={`text-[#545454] font-semibold text-base p-2  cursor-pointer hover:text-black ${
                  selected === "home" ? "text-black font-bold " : ""
                }`}
                onClick={() => {
                  setSelected("home");
                }}
              >
                Home
              </div>
            </Link>
            <Link to="whywow" smooth={true} spy={true} offset={0}>
              <div
                className={`text-[#545454] font-semibold text-base p-2 cursor-pointer hover:text-black ${
                  selected === "whywow" ? "text-black font-bold " : ""
                }`}
                onClick={() => {
                  setSelected("whywow");
                }}
              >
                Why WOW
              </div>
            </Link>
            <Link to="speakers" smooth={true} spy={true} offset={-50}>
              <div
                className={`text-[#545454] font-semibold text-base p-2  cursor-pointer hover:text-black ${
                  selected === "speakers" ? "text-black font-bold " : ""
                }`}
                onClick={() => {
                  setSelected("speakers");
                }}
              >
                Speakers
              </div>
            </Link>
            <Link to="schedule" smooth={true} spy={true} offset={-50}>
              <div
                className={`text-[#545454] font-semibold text-base p-2  cursor-pointer hover:text-black ${
                  selected === "schedule" ? "text-black font-bold " : ""
                }`}
                onClick={() => {
                  setSelected("schedule");
                }}
              >
                Schedule
              </div>
            </Link>
            <Link to="sponsors" smooth={true} spy={true} offset={-50}>
              <div
                className={`text-[#545454] font-semibold text-base p-2  cursor-pointer hover:text-black ${
                  selected === "sponsors" ? "text-black font-bold " : ""
                }`}
                onClick={() => {
                  setSelected("sponsors");
                }}
              >
                Sponsors
              </div>
            </Link>
            <Link to="partners" smooth={true} spy={true} offset={-50}>
              <div
                className={`text-[#545454] font-semibold text-base p-2  cursor-pointer hover:text-black ${
                  selected === "partners" ? "text-black font-bold " : ""
                }`}
                onClick={() => {
                  setSelected("partners");
                }}
              >
                Partners
              </div>
            </Link>
            {/* <Link to="jobportal" smooth={true} spy={true} offset={-50}>
                  <div
                    className={`text-[#545454] font-semibold text-xl p-2 border-b cursor-pointer hover:text-black ${
                      selected === "jobportal" ? "text-black font-bold " : ""
                    }`}
                    onClick={() => {
                      setSelected("jobportal");
                      
                    }}
                  >
                    Job portal
                  </div>
                </Link> */}
            <Link to="insights" smooth={true} spy={true} offset={-80}>
              <div
                className={`text-[#545454] font-semibold text-base p-2  cursor-pointer hover:text-black ${
                  selected === "insights" ? "text-black font-bold " : ""
                }`}
                onClick={() => {
                  setSelected("insights");
                }}
              >
                Insights
              </div>
            </Link>
            <Link to="faq" smooth={true} spy={true} offset={-50}>
              <div
                className={`text-[#545454] font-semibold text-base p-2  cursor-pointer hover:text-black ${
                  selected === "faq" ? "text-black font-bold " : ""
                }`}
                onClick={() => {
                  setSelected("faq");
                }}
              >
                FAQ
              </div>
            </Link>
          </div>
        </div>
        <div className="h-3 w-full flex">
          <div className="w-1/3 h-full bg-[#4285F4]"></div>
          <div className="w-1/3 h-full bg-[#0F9D58]"></div>
          <div className="w-1/3 h-full bg-[#EA4335]"></div>
        </div>
      </div>

      <div className="hidden lg:flex">
        <img
          src="images/navbar/Logo.png"
          style={{ objectFit: "contain" }}
          alt="pune"
          width={230}
        />
      </div>
    </nav>
  );
};

export default Navbar;
