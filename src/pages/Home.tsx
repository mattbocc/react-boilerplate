import React from 'react';
import { useNavigate } from 'react-router';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col bg-background min-h-[95vh] justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full px-24 py-20 max-w-[2200px]">
                <div className="flex flex-row md:flex-col gap-32 items-baseline mb-40">
                    <div className="flex flex-col gap-6 justify-center flex-1 w-full">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-6xl font-semibold text-primary">PLATFORM NAME GOES HERE</h1>
                            <p className="text-headingLg font-light text-text-primary">PLATFORM SUB TEXT GOES HERE</p>
                        </div>
                        <button
                            className="flex flex-row items-center justify-center w-48 gap-2 text-white bg-primary py-3 px-5 rounded-md hover:cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
                            onClick={() => navigate('/page')}
                        >
                            <span className="text-headingMd font-light">CALL TO ACTION</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 flex-1 w-full">
                        PLACHOLDER FOR RIGHT SIDE OF PAGE CONTENT
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
