import React from 'react';
import Head from "next/head";

import WordRelay from "components/game/wordRelay";
import Lotto from "components/game/lotto";

export const GAME = '게임';

const Game = () => {
    return (
        <div>
            <Head>
                <title>{GAME}</title>
            </Head>
            <h1>Game</h1>
            <div className="flex flex__column gap-6 align-items-center">
                <WordRelay/>
                <Lotto/>
            </div>
        </div>
    );
};

export default Game;
