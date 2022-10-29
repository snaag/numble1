import React, {useEffect, useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import { useRouter } from 'next/router'
import Link from "next/link";
import Head from "next/head";

import {DELETE_BOARD, FETCH_DIARY_ONE} from "queries/diary";
import NoDiary from "components/diary/noDiary";
import {goToPathRefresh} from "utils/util";


const DiaryDetail = () => {
    const router = useRouter();
    const [ mutateTriggerFunction, deleteStatus ] = useMutation(DELETE_BOARD );
    const [number, setNumber] = useState(null);
    const [valid, setValid] = useState(false);
    const [diary, setDiary] = useState({
        title: '',
        number: -1,
        contents: '',
        createdAt: ''
    })


    useEffect(() => {
        const regex = /^\d+$/;
        const isNumber = regex.test(String(router.query.number));
        if(isNumber) {
            setNumber(Number(router.query.number));
        }
    });

    const { loading, error, data } = useQuery(FETCH_DIARY_ONE, {
        skip: number ? false : true,
        variables: { number },
        onCompleted: (data) => {
            if(!data || !data.fetchBoard) {
                setValid(false);
            } else {
                setDiary({
                    title: data.fetchBoard.title,
                    number: data.fetchBoard.number,
                    contents: data.fetchBoard.contents,
                    createdAt: data.fetchBoard.createdAt
                })
                setValid(true);
            }
        }
    });

    const remove = async () => {
        const res = confirm('삭제할까요?');
        if(res) {
            await mutateTriggerFunction({ variables: { number } })
            goToPathRefresh('/diary');
        }
    }

    // todo
    // 왤케 많이불러
    return (
        loading ? <div>로딩중</div> :
            valid ?
                <div>
                    <Head>
                        <title>{diary.title}</title>
                    </Head>
                    <header>
                        <span>createdAt::{diary.createdAt}</span>
                    </header>
                    <section>
                        <h1>title::{diary.title}</h1>
                        <p>contents::{diary.contents}</p>
                    </section>
                    <section>
                        <button>
                            <Link href={`/diary/edit/${number}`}>수정하기</Link>
                        </button>
                        <button onClick={remove}>삭제하기</button>
                    </section>
                    <footer>
                        <a href="/diary">
                            <button>목록으로</button>
                        </a>
                    </footer>
                </div> :
                <NoDiary/>
    );
};

export default DiaryDetail;
