import React from 'react';
import Head from "next/head";

export const GAME = '게임';

const Game = () => {
    return (
        <div>
            <Head>
                <title>{GAME}</title>
            </Head>
            <h1>GAME</h1>
        </div>
    );
};

export default Game;
