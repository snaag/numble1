import React, {useEffect, useState} from 'react';
import Head from "next/head";
import Link from "next/link";

import DiaryList from "components/diary/diaryList";

export const DIARY = '일기';

const Diary = () => {
    return (
        <div>
            <Head>
                <title>{DIARY}</title>
            </Head>
            <header className="flex align-items-center justify-content-space-between">
                <h1>Diary</h1>
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
