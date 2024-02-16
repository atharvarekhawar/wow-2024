




const TechFocused = () => {
    return (
        <div className="relative bg-white pt-[160px] p-16">

            <img src="images/background/circle.svg" className="absolute top-[300px] left-[250px] h-5 w-5" />
            <img src="images/background/triangle.svg" className="absolute top-[180px] left-[650px] h-7 w-7" />
            {/* <img src="images/background/rectangle.svg" className="absolute top-[230px] left-[1200px] h-12 w-12" />
            <img src="images/background/rectangle.svg" className="absolute top-[230px] left-[1200px] h-12 w-12" /> */}
            <img src="images/background/circle.svg" className="absolute top-[430px] left-[1550px] h-5 w-5" />
            <img src="images/background/triangle.svg" className="absolute top-[300px] left-[1700px] h-7 w-7" />
            <img src="images/background/rectangle.svg" className="absolute top-[600px] left-[300px] h-12 w-12" />
            <img src="images/background/triangle.svg" className="absolute top-[700px] left-[1700px] h-7 w-7" />
            <img src="images/background/circle.svg" className="absolute top-[841px] left-[500px] h-5 w-5" />
            <img src="images/background/triangle.svg" className="absolute top-[861px] left-[1200px] h-7 w-7" />

            <p className="md:text-5xl text-2xl text-center text-[#545454] z-1">Technologies to be focused</p>

            <div className="flex flex-col items-center">
            
                <p className="text-center mt-10 text-2xl w-1/2 z-10 ">The sessions that span from technical to visionary, let’s celebrate and discover what the technologies can enable: how product innovation, open source, and ML and AI can propel enterprises forward and solve the big problems that impact all of us.</p>


                <div className="flex mt-16 w-[40%] items-center flex-wrap justify-center bg-white z-10">
                    <a href="https://developer.android.com/" className="m-5 w-[100px] h-[100px] md:w-[170px] md:h-[170px]" style={{backgroundImage:`url("https://io.google/2022/app/images/android-logo.svg")`, backgroundSize: "cover"}}>
                    </a>
                    <a href="https://chromeos.dev/en" className="m-5 w-[100px] h-[100px] md:w-[170px] md:h-[170px]" style={{backgroundImage:`url("https://io.google/2022/app/images/chrome-logo.svg")`, backgroundSize: "cover"}}>
                    </a>
                    <a href="https://firebase.google.com/" className="m-5 w-[100px] h-[100px] md:w-[170px] md:h-[170px]" style={{backgroundImage:`url("https://io.google/2022/app/images/firebase-logo.svg")`, backgroundSize: "cover"}}>
                    </a>
                    <a href="https://flutter.dev/" className="m-5 w-[100px] h-[100px] md:w-[170px] md:h-[170px]" style={{backgroundImage:`url("https://io.google/2022/app/images/flutter-logo.svg")`, backgroundSize: "cover"}}>
                    </a>
                    <a href="https://developers.google.com/assistant" className="m-5 w-[100px] h-[100px] md:w-[170px] md:h-[170px]" style={{backgroundImage:`url("https://io.google/2022/app/images/googleassistant-logo.svg")`, backgroundSize: "cover"}}>
                    </a>
                    <a href="https://cloud.google.com/?hl=en" className="m-5 w-[100px] h-[100px] md:w-[170px] md:h-[170px]" style={{backgroundImage:`url("https://io.google/2022/app/images/googlecloud-logo.svg")`, backgroundSize: "cover"}}>
                    </a>
                    <a href="https://developers.google.com/maps" className="m-5 w-[100px] h-[100px] md:w-[170px] md:h-[170px]" style={{backgroundImage:`url("https://io.google/2022/app/images/googlemaps-logo.svg")`, backgroundSize: "cover"}}>
                    </a>
                    <a href="https://www.tensorflow.org/" className="m-5 w-[100px] h-[100px] md:w-[170px] md:h-[170px]" style={{backgroundImage:`url("https://io.google/2022/app/images/machinelearning-logo.svg")`, backgroundSize: "cover"}}>
                    </a> 
                </div>

            </div>
        </div>
    );
};


export default TechFocused;