import React from 'react';
import {useMutation} from "@apollo/client";
import Head from "next/head";

import {CREATE_BOARD} from "queries/diary";
import {goToPathRefresh} from "utils/util";

const New = () => {
    const [ mutateTriggerFunction, createStatus ] = useMutation(CREATE_BOARD);

    const submit = async (e) => {
        try {
            e.preventDefault();
            const writer = e.target[0].value;
            const title = e.target[1].value;
            const contents = e.target[2].value;

            await mutateTriggerFunction({ variables: {writer, title, contents}});
            alert('성공적으로 추가하였습니다')
            goToPathRefresh('/diary');
        } catch (error) {
            alert('문제가 발생했습니다')
        }
    }

    return (
        <div>
            <Head>
                <title>일기 {`>`} 추가하기</title>
            </Head>
            <h1>다이어리 작성 페이지</h1>
            <form onSubmit={submit}>
                <input type="text" placeholder="작성자"/>
                <input type="text" placeholder="제목"/>
                <br/>
                <textarea placeholder="내용"></textarea>
                <button type="submit">등록하기</button>
                <a href="/diary">
                    <button type="button">취소하기</button>
                </a>
            </form>
        </div>
    );
};

export default New;
