import {useMutation, useQuery} from "@apollo/client";
import React, {useEffect, useState} from 'react';
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

    return (
        loading ? <div>로딩중</div> :
            valid ?
                <div className="diary-detail__layout">
                    <Head>
                        <title>{`일기 > ${diary.title}`}</title>
                    </Head>
                    <div className="diary-detail__date">{diary.createdAt}</div>
                    <h1 className="diary-detail__title">{diary.title}</h1>
                    <p className="diary-detail__contents">{diary.contents}</p>
                    <section className="diary-detail__buttons">
                        <button>
                            <Link href={`/diary/edit/${number}`}>수정하기</Link>
                        </button>
                        <button onClick={remove}>삭제하기</button>
                    </section>
                    <footer>
                        <Link href="/diary">
                            <button>목록으로</button>
                        </Link>
                    </footer>
                </div> :
                <NoDiary/>
    );
};

export default DiaryDetail;
