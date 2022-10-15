import React from 'react';
import Head from "next/head";

export const HOME = '홈';

const Home = () => {
    return (
        <div>
            <Head>
                <title>{HOME}</title>
            </Head>
            <h1>HOME</h1>
        </div>
    );
};

export default Home;
