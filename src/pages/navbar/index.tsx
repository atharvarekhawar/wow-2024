import wow from "../../../public/images/navbar/nav-wow.svg";
import pune from "../../../public/images/navbar/Logo.png";
import { useState } from "react";

const Navbar = () => {
  const [selected,setSelected] = useState("");
  return (
    <nav className="flex fixed w-full bg-white lg:p-0 z-50 ">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex items-center lg:justify-normal lg:py-[1%]">
          <div className="dropdown block lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="py-1 border-b" onClick={()=>{
                setSelected("home");
              }}>
                <a>
                  <p>Home</p>
                </a>
              </li>
              <li className="py-1 border-b"onClick={()=>{
                setSelected("whywow");
              }}>
                <a>
                  <p>Why WOW</p>
                </a>
              </li>
              <li className="py-1 border-b" onClick={()=>{
                setSelected("speakers");
              }}>
                <a>
                  <p>Speakers</p>
                </a>
              </li>
              <li className="py-1 border-b" onClick={()=>{
                setSelected("schedule");
              }}>
                <a>
                  <p>Schedule</p>
                </a>
              </li>
              <li className="py-1 border-b" onClick={()=>{
                setSelected("sponsors");
              }}>
                <a>
                  <p>Sponsors</p>
                </a>
              </li>
              <li className="py-1 border-b" onClick={()=>{
                setSelected("partners");
              }}>
                <a>
                  <p>Partners</p>
                </a>
              </li>
              {/* <li className="py-1 border-b" onClick={()=>{
                setSelected("job");
              }}>
                <a>
                  <p>Job Portal</p>
                </a>
              </li> */}
              <li className="py-1 border-b" onClick={()=>{
                setSelected("insights");
              }}>
                <a>
                  <p>Insights</p>
                </a>
              </li>
              <li className="py-1" onClick={()=>{
                setSelected("faq");
              }}>
                <a>
                  <p>FAQ</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center ml-2">
            <img src={wow} alt="WOW" width={100} />
          </div>
          <div className="ml-10 hidden lg:flex space-x-7">
            <a
              href="#"
              className={`text-[#545454] font-semibold text-base hover:text-black ${selected==="home"?'text-black font-bold ':''}`}
              onClick={()=>{
                setSelected("home");
              }}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-[#545454] font-semibold text-base hover:text-black ${selected==="whywow"?'text-black font-bold ':''}`}
              onClick={()=>{
                setSelected("whywow");
              }}
            >
              Why WOW
            </a>
            <a
              href="#"
              className={`text-[#545454] font-semibold text-base hover:text-black ${selected==="speakers"?'text-black font-bold ':''}`}
              onClick={()=>{
                setSelected("speakers");
              }}
            >
              Speakers
            </a>
            <a
              href="#"
              className={`text-[#545454] font-semibold text-base hover:text-black ${selected==="schedule"?'text-black font-bold ':''}`}
              onClick={()=>{
                setSelected("schedule");
              }}
            >
              Schedule
            </a>
            <a
              href="#"
              className={`text-[#545454] font-semibold text-base hover:text-black ${selected==="sponsors"?'text-black font-bold ':''}`}
              onClick={()=>{
                setSelected("sponsors");
              }}
            >
              Sponsors
            </a>
            <a
              href="#"
              className={`text-[#545454] font-semibold text-base hover:text-black ${selected==="partners"?'text-black font-bold ':''}`}
              onClick={()=>{
                setSelected("partners");
              }}
            >
              Partners
            </a>
            {/* <a
              href="#"
              className="text-[#545454] font-semibold text-base hover:text-black"
            >
              Job Portal
            </a> */}
            <a
              href="#"
              className={`text-[#545454] font-semibold text-base hover:text-black ${selected==="insights"?'text-black font-bold ':''}`}
              onClick={()=>{
                setSelected("insights");
              }}
            >
              Insights
            </a>
            <a
              href="#"
              className={`text-[#545454] font-semibold text-base hover:text-black ${selected==="faq"?'text-black font-bold ':''}`}
              onClick={()=>{
                setSelected("faq");
              }}
            >
              FAQ
            </a>
          </div>
        </div>
        <div className="h-3 w-full flex">
          <div className="w-1/3 h-full bg-[#4285F4]"></div>
          <div className="w-1/3 h-full bg-[#0F9D58]"></div>
          <div className="w-1/3 h-full bg-[#EA4335]"></div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <img src={pune} style={{objectFit:"contain"}} alt="pune" width={230}  />
      </div>
    </nav>
  );
};

export default Navbar;
