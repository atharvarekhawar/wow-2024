function Index() {
  return (
    <div
      id="faq"
      className="w-full h-full bg-white flex flex-col items-center justify-center"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-5xl text-3xl font-semibold title-font mb-4 text-gray-900">
            CAMPUS
          </h1>
          <h1
            className="sm:text-5xl text-3xl font-semibold title-font mb-4"
            style={{ color: "#4885F0" }}
          >
            PARTNERS
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="images/map/map.svg"
            className="w-[1000px] rounded-2xl border-8 border-t-red-500 border-t-8 border-r-8 border-r-green-500 border-b-8 border-b-yellow-500 border-l-8 border-l-blue-500"
            alt="Map"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
