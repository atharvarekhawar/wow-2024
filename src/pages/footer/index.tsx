
const Footer = () => {
  return (
    <footer className="w-full  bottom-0 bg-slate-200 text-black p-8">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between ">
        <div className="flex items-center">
          <img src="images/footer/gdsc.png" alt="Logo" className="mr-2" width={60} />
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
              <img src="images/footer/LinkedIn.png" alt="LinkedIn" width={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="images/footer/Instagram.png" alt="Instagram" width={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="images/footer/Twitter.png" alt="Twitter" width={30} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="images/footer/YouTube.png" alt="YouTube" width={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
