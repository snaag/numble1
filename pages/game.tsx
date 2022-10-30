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
            <h1>GAME</h1>
            <WordRelay/>
            <Lotto/>
        </div>
    );
};

export default Game;
