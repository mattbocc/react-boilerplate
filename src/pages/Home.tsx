import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <h1 className="text-heading4Xl">Home Page!</h1>
            <h2 className="text-headingSm text-emerald-700 animate-grow-bar">If green, Tailwind setup correctly</h2>
        </div>
    );
};

export default Home;
