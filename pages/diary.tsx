import React from 'react';
import Head from "next/head";
import Link from "next/link";

import DiaryList from "../components/diary/diaryList";

export const DIARY = '일기';

const Diary = () => {
    return (
        <div>
            <Head>
                <title>{DIARY}</title>
            </Head>
            <header>
                <h1>Diary TODAY STORY</h1>
                <Link href='/diary/new'>
                    <button>
                        다이어리 작성
                    </button>
                </Link>
            </header>
            <DiaryList />
        </div>
    );
};

export default Diary;
