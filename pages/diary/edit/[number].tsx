import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Head from "next/head";
import {useMutation, useQuery} from "@apollo/client";

import {FETCH_DIARY_ONE, UPDATE_BOARD} from "queries/diary";
import NoDiary from "components/diary/noDiary";
import {goToPathRefresh} from "utils/util";
import Link from "next/link";

const Edit = () => {
    const router = useRouter();
    const [ mutateTriggerFunction, updateStatus ] = useMutation(UPDATE_BOARD);
    const [number, setNumber] = useState(null);
    const [valid, setValid] = useState(false);
    const [diary, setDiary] = useState({
        prevTitle: '',
        prevContents: '',
        prevWriter: ''
    })


    useEffect( () => {
        const regex = /^\d+$/;
        const isNumber = regex.test(String(router.query.number));
        if(isNumber) {
            setNumber(Number(router.query.number));
        }
    });

    useEffect(() => {
        if(number) {

        }
    },[number]);

    const { loading, error, data } = useQuery(FETCH_DIARY_ONE, {
        skip: number ? false : true,
        variables: { number },
        onCompleted: (data) => {
            if(!data || !data.fetchBoard) {
                setValid(false);
            } else {
                setDiary({
                    prevTitle: data.fetchBoard.title,
                    prevContents: data.fetchBoard.contents,
                    prevWriter: data.fetchBoard.writer
                })
                setValid(true);
            }
        }
    })

    const submit = async (e) => {
        try {
            e.preventDefault();
            const writer = e.target[0].value;
            const title = e.target[1].value;
            const contents = e.target[2].value;

            await mutateTriggerFunction({ variables: { writer, title, contents, number }});
            alert('성공적으로 수정하였습니다');
            goToPathRefresh('/diary');
        } catch(error) {
            alert('문제가 발생했습니다');
        }

    }

    return (
        loading ? <div>로딩중</div> :
            valid ?
                <div>
                    <Head>
                        <title>일기 {`>`} 수정하기</title>
                    </Head>
                    <h1>다이어리 수정 페이지 number::{number}</h1>

                    <form onSubmit={submit}>
                        <input type="text" defaultValue={diary.prevWriter}/>
                        <input type="text" defaultValue={diary.prevTitle} placeholder={diary.prevTitle}/>
                        <br/>
                        <textarea defaultValue={diary.prevContents} placeholder={diary.prevContents}></textarea>
                        <button type="submit">수정하기</button>
                        <Link href="/diary">
                            <button type="button">취소하기</button>
                        </Link>
                    </form>
                </div> :
                <NoDiary/>
    );
};

export default Edit;