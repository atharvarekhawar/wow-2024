




const TechFocused = () => {
    return (
        <div className="h-screen relative bg-white">

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


            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 cursor-pointer">
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