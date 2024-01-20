// src/components/Footer.tsx
import logo from "../../../public/images/footer/gdsc.png"; // Replace with your logo image
import LinkedIn from "../../../public/images/footer/LinkedIn.png";
import Instagram from "../../../public/images/footer/Instagram.png";
import Twitter from "../../../public/images/footer/Twitter.png";
import YouTube from "../../../public/images/footer/YouTube.png";

const Footer = () => {
  return (
    <footer className="w-full fixed bottom-0 bg-slate-200 text-black p-8">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between ">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="mr-2" width={60} />
          <p className="text-xs md:text-sm lg:text-lg font-bold">
            Google Developer Student Clubs Pune
          </p>
        </div>
        <div>
          <a href="#" className="text-gray-400 hover:text-black underline">
            Code of Conduct
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <p className="text-black text-xs md:text-sm lg:text-lg font-semibold">Follow us</p>
          {/* Social Media Links */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={LinkedIn} alt="LinkedIn" width={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={Instagram} alt="Instagram" width={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={Twitter} alt="Twitter" width={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src={YouTube} alt="YouTube" width={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
