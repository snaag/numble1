import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import { useRouter } from 'next/router'
import Link from "next/link";
import Head from "next/head";

import {FETCH_DIARY_ONE} from "../../queries/diary";


const DiaryDetail = () => {
    const router = useRouter();
    const [number, setNumber] = useState(null);
    const diary = {
        title: '',
        number: -1,
        contents: '',
        createdAt: ''
    };

    useEffect(() => {
        setNumber(Number(router.query.number));
    });


    const { loading, error, data } = useQuery(FETCH_DIARY_ONE, { skip: number ? false : true, variables: { number } })
    if(data) {
        console.log('data', data);
        diary.title = data?.fetchBoard?.title;
        diary.number = data?.fetchBoard?.number;
        diary.contents = data?.fetchBoard?.contents;
        diary.createdAt = data?.fetchBoard?.createdAt;
        console.log('diary', diary);
    }

    const remove = () => {

    }

    const modify = () => {

    }


    // todo
    // 왤케 많이불러
    return (
        <div>
            <Head>
                <title>{diary.title}</title>
            </Head>
            <header>
                <h1>{diary.createdAt}</h1>
            </header>
            <section>
                <p>{diary.contents}</p>
            </section>
            <section>
                <button onClick={modify}>수정하기</button>
                <button onClick={remove}>삭제하기</button>
            </section>
            <footer>
                <button>
                    <Link href='/diary'>목록으로</Link>
                </button>
            </footer>
        </div>
    );
};

export default DiaryDetail;
