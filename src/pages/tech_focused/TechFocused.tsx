import React from 'react';





const TechFocused = () => {
    return (
        <div className="h-screen relative bg-white">



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