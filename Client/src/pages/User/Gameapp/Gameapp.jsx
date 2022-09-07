import { useEffect } from 'react';
import Head from './Head';
import GameappContent from './GameappContent';
import React from 'react';
function Gameapp({ title }) {
    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <div className="bg-white">
            <div className="w-10/12 max-w-8xl mx-auto pb-10">
                <Head />
                <GameappContent />
            </div>
        </div>
    );
}

export default Gameapp;
