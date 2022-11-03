import {useQuery} from "@apollo/client";
import { useState } from 'react';
import Head from 'next/head'

import { FETCH_DIARY_LIST } from "queries/diary";

const HOME = '홈';

export default function Home() {
    const [diaryList, setDiaryList] = useState([]);

    const { loading, error, data} = useQuery(FETCH_DIARY_LIST, {
        variables: { page: 0 },
        onCompleted: (data) => {
            setDiaryList([...data.fetchBoards.slice(0, 4)]);
        }
    })

    return (
        <div className="home">
            <Head>
                <title>{HOME}</title>
            </Head>
            <h2 className="home__title">Updated news</h2>
            <div className="home__top">
                <div className="top__news">
                    <div className="news__line"></div>
                    <ul className="news__diary-list">
                        {
                            diaryList.map((diary) =>
                                <li className="diary__item">{diary.title}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
  )
}
