import './style.css'

function Index() {
  return (
    <div
      id="map"
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

        <div className="map-container">

        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1JCdVT4pfjpYyXMXhYSEq0WugSFVCOKs&ehbc=2E312F&noprof=1&z=11.9&ll=18.5453, 73.88898" width="840" height="500"     ></iframe>
       
          
        </div>  

        {/* style={{ borderRadius: '30px', border:'0'}}         */}

        </div>
      </div>
    </div>
  );
}

export default Index;
