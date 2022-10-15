import React from 'react';
import Head from "next/head";
import Link from "next/link";

export const DIARY = '일기';

const Diary = () => {
    return (
        <div>
            <Head>
                <title>{DIARY}</title>
            </Head>
            <Link href='/diary/new'>
                <button>
                    다이어리 작성
                </button>
            </Link>
            <h1>DIARY</h1>
        </div>
    );
};

export default Diary;
