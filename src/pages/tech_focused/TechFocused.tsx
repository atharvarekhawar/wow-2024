



const TechFocused = () => {
    return (
        <div>
            <div id="techfocused" className="relative bg-white pt-16 pb-16 px-4 md:pt-24 md:pb-24 md:px-16 flex flex-col justify-center items-center">
                <img src="images/background/circle.svg" className="absolute top-[300px] left-[250px] h-5 w-5" />
                <img src="images/background/triangle.svg" className="absolute top-[180px] left-[650px] h-7 w-7" />
                <img src="images/background/rectangle.svg" className="absolute top-[230px] left-[1200px] h-12 w-12" />
                <img src="images/background/rectangle.svg" className="absolute top-[230px] left-[1200px] h-12 w-12" />
                <img src="images/background/circle.svg" className="absolute top-[430px] left-[1550px] h-5 w-5" />
                <img src="images/background/triangle.svg" className="absolute top-[300px] left-[1700px] h-7 w-7" />
                <img src="images/background/rectangle.svg" className="absolute top-[600px] left-[300px] h-12 w-12" />
                <img src="images/background/triangle.svg" className="absolute top-[700px] left-[1700px] h-7 w-7" />
                <img src="images/background/circle.svg" className="absolute top-[841px] left-[500px] h-5 w-5" />
                <img src="images/background/triangle.svg" className="absolute top-[861px] left-[1200px] h-7 w-7" />




                <p className="text-center text-2xl md:text-5xl text-[#545454] z-10 mb-4">Technologies to be focused</p>

                <p className="text-center mt-4 text-lg md:text-2xl md:w-3/4">The sessions that span from technical to visionary, let’s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-[6rem] items-center mt-8">
                    <a href="https://developer.android.com/" className="w-[129px] h-[129px] md:h-39 bg-cover bg-center" style={{ backgroundImage: `url("https://io.google/2022/app/images/android-logo.svg")` }}></a>
                    <a href="https://chromeos.dev/en" className="w-[129px] h-[129px] md:h-39 bg-cover bg-center" style={{ backgroundImage: `url("https://io.google/2022/app/images/chrome-logo.svg")` }}></a>
                    <a href="https://firebase.google.com/" className="w-[129px] h-[129px] md:h-39 bg-cover bg-center" style={{ backgroundImage: `url("https://io.google/2022/app/images/firebase-logo.svg")` }}></a>
                    <a href="https://flutter.dev/" className="w-[129px] h-[129px] md:h-39 bg-cover bg-center" style={{ backgroundImage: `url("https://io.google/2022/app/images/flutter-logo.svg")` }}></a>
                    <a href="https://developers.google.com/assistant" className="w-[129px] h-[129px] md:h-39 bg-cover bg-center" style={{ backgroundImage: `url("https://io.google/2022/app/images/googleassistant-logo.svg")` }}></a>
                    <a href="https://cloud.google.com/?hl=en" className="w-[129px] h-[129px] md:h-39 bg-cover bg-center" style={{ backgroundImage: `url("https://io.google/2022/app/images/googlecloud-logo.svg")` }}></a>
                    <a href="https://developers.google.com/maps" className="w-[129px] h-[129px] md:h-39 bg-cover bg-center" style={{ backgroundImage: `url("https://io.google/2022/app/images/googlemaps-logo.svg")` }}></a>
                    <a href="https://www.tensorflow.org/" className="w-[129px] h-[129px] md:h-39 bg-cover bg-center" style={{ backgroundImage: `url("https://io.google/2022/app/images/machinelearning-logo.svg")` }}></a>
                </div>
            </div>

        </div>
    );
};

export default TechFocused;
