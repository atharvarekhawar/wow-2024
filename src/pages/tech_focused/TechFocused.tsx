




const TechFocused = () => {
    return (
        <div className="min-h-screen relative bg-white">

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

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-black mt-4 sm:mt-10">Tech-Focused</h1>

            <div className="flex flex-col md:flex-row justify-center items-center md:pt-[12.5rem] md:gap-x-[10rem] lg:mt-10  m-[2rem] sm:gap-y-3 ">
                <p className="w-full md:w-[28rem] text-2xl text-[#545454] mr-0 md:mr-10">The sessions that span from technical to visionary, let’s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 md:mt-0">
                    <a href="https://developer.android.com/">
                        <img src="https://io.google/2022/app/images/android-logo.svg" className="object-contain" alt="Android" />
                    </a>
                    <a href="https://chromeos.dev/en">
                        <img src="https://io.google/2022/app/images/chrome-logo.svg" className="object-contain" alt="Chrome" />
                    </a>
                    <a href="https://firebase.google.com/">
                        <img src="https://io.google/2022/app/images/firebase-logo.svg" className="object-contain" alt="Firebase" />
                    </a>
                    <a href="https://flutter.dev/">
                        <img src="https://io.google/2022/app/images/flutter-logo.svg" className="object-contain" alt="Flutter" />
                    </a>
                    <a href="https://developers.google.com/assistant">
                        <img src="https://io.google/2022/app/images/googleassistant-logo.svg" className="object-contain" alt="Google Assistant" />
                    </a>
                    <a href="https://cloud.google.com/?hl=en">
                        <img src="https://io.google/2022/app/images/googlecloud-logo.svg" className="object-contain" alt="Google Cloud" />
                    </a>
                    <a href="https://developers.google.com/maps">
                        <img src="https://io.google/2022/app/images/googlemaps-logo.svg" className="object-contain" alt="Google Maps" />
                    </a>
                    <a href="https://www.tensorflow.org/">
                        <img src="https://io.google/2022/app/images/machinelearning-logo.svg" className="object-contain" alt="Machine Learning" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TechFocused;