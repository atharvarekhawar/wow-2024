
export default function Speakers() {
    return (
        <div id="speakers" className="bg-white  relative overflow-hidden">
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

            <section className="max-w-6xl md:m-auto lg:m-auto px-4 lg:px-4 py-10 relative m-[2rem]">

                <div className="text-center pb-12">
                    <h2 className="text-base font-bold text-indigo-600">

                    </h2>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 mb-[5rem]">
                        Speakers
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[8rem] sm:gap-16 md:gap-28 ">
                    <div className="w-full bg-white rounded-lg p-12 shadow-md shadow-red-500/50 flex flex-col justify-center items-center transition-transform transform hover:scale-105 relative">
                        <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-36 mt-[5rem] shadow-lg">
                            <img className=" object-center  object-cover h-36 w-36 border-slate-950 relative z-10" src="/images/speakers/squarered.svg" alt="photo" />
                        </div>
                        <div className="relative z-10 text-center pt-[2rem] mt-[2rem] sm:mt-[5rem] pb-[2rem]">
                            <p className="text-xl text-gray-700 font-bold mb-2">Kartik Padmanabhan</p>
                            <p className="text-base text-gray-400 font-normal">Developer Relations Lead @Google India & MENA</p>
                            <div className="flex flex-wrap justify-center gap-2 pt-[1.5rem]">
                                <button className="bg-black p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <img src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png" className="w-5 h-5 fill-current bg-white" alt="" />
                                </button>
                                <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                        <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-lg p-12 shadow-md shadow-green-500/50 flex flex-col justify-center items-center transition-transform transform hover:scale-105 relative">
                        <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-36 mt-[5rem] shadow-lg">
                            <img className=" object-center  object-cover h-36 w-36 border-slate-950 relative z-10" src="/images/speakers/squaregreen.svg" alt="photo" />
                        </div>
                        <div className="relative z-10 text-center pt-[2rem] mt-[2rem] sm:mt-[5rem] pb-[2rem]">
                            <p className="text-xl text-gray-700 font-bold mb-2">Kartik Padmanabhan</p>
                            <p className="text-base text-gray-400 font-normal">Developer Relations Lead @Google India & MENA</p>
                            <div className="flex flex-wrap justify-center gap-2 pt-[1.5rem]">
                                <button className="bg-black p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <img src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png" className="w-5 h-5 fill-current bg-white" alt="" />
                                </button>
                                <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                        <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-lg p-12 shadow-md shadow-blue-500/50 flex flex-col justify-center items-center transition-transform transform hover:scale-105 relative">
                        <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-36 mt-[5rem] shadow-lg">
                            <img className=" object-center  object-cover h-36 w-36 border-slate-950 relative z-10" src="/images/speakers/squareblue.svg" alt="photo" />
                        </div>
                        <div className="relative z-10 text-center pt-[2rem] mt-[2rem] sm:mt-[5rem] pb-[2rem]">
                            <p className="text-xl text-gray-700 font-bold mb-2">Kartik Padmanabhan</p>
                            <p className="text-base text-gray-400 font-normal">Developer Relations Lead @Google India & MENA</p>
                            <div className="flex flex-wrap justify-center gap-2 pt-[1.5rem]">
                                <button className="bg-black p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <img src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png" className="w-5 h-5 fill-current bg-white" alt="" />
                                </button>
                                <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                        <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-lg p-12 shadow-md shadow-blue-500/50 flex flex-col justify-center items-center transition-transform transform hover:scale-105 relative">
                        <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-36 mt-[5rem] shadow-lg">
                            <img className=" object-center  object-cover h-36 w-36 border-slate-950 relative z-10" src="/images/speakers/squareblue.svg" alt="photo" />
                        </div>
                        <div className="relative z-10 text-center pt-[2rem] mt-[2rem] sm:mt-[5rem] pb-[2rem]">
                            <p className="text-xl text-gray-700 font-bold mb-2">Kartik Padmanabhan</p>
                            <p className="text-base text-gray-400 font-normal">Developer Relations Lead @Google India & MENA</p>
                            <div className="flex flex-wrap justify-center gap-2 pt-2">
                                <button className="bg-black p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <img src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png" className="w-5 h-5 fill-current bg-white" alt="" />
                                </button>
                                <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                        <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-lg p-12 shadow-md shadow-red-500/50 flex flex-col justify-center items-center transition-transform transform hover:scale-105 relative">
                        <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-36 mt-[5rem] ">
                            <img className=" object-center  object-cover h-36 w-36 border-slate-950 relative z-10 " src="/images/speakers/squarered.svg" alt="photo" />
                        </div>
                        <div className="relative z-10 text-center pt-[2rem] mt-[2rem] sm:mt-[5rem] pb-[2rem]">
                            <p className="text-xl text-gray-700 font-bold mb-2">Kartik Padmanabhan</p>
                            <p className="text-base text-gray-400 font-normal">Developer Relations Lead @Google India & MENA</p>
                            <div className="flex flex-wrap justify-center gap-2 pt-[1.5rem]">
                                <button className="bg-black p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <img src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png" className="w-5 h-5 fill-current bg-white" alt="" />
                                </button>
                                <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                        <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-lg p-12 shadow-md shadow-green-500/50 flex flex-col justify-center items-center transition-transform transform hover:scale-105 relative">
                        <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-36 mt-[5rem] shadow-lg">
                            <img className=" object-center  object-cover h-36 w-36 border-slate-950 relative z-10" src="/images/speakers/squaregreen.svg" alt="photo" />
                        </div>
                        <div className="relative z-10 text-center pt-[2rem] mt-[2rem] sm:mt-[5rem] pb-[2rem]">
                            <p className="text-xl text-gray-700 font-bold mb-2">Kartik Padmanabhan</p>
                            <p className="text-base text-gray-400 font-normal">Developer Relations Lead @Google India & MENA</p>
                            <div className="flex flex-wrap justify-center gap-2 pt-[1.5rem]">
                                <button className="bg-black p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <img src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png" className="w-5 h-5 fill-current bg-white" alt="" />
                                </button>
                                <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                        <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div >
    )
}
