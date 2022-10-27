import React, {useEffect} from 'react';
import {useQuery} from "@apollo/client";

import { FETCH_DIARY_LIST } from "../../queries/diary";
import DiaryItem from "./diaryItem";


const DiaryList = () => {
    // todo
    // 위치와
    // 데이터 기억
    // page

    const diaryList = [];
    const { loading, error, data } = useQuery(FETCH_DIARY_LIST, {variables: {page: 3}});
    console.log(data);
    if(data) {
        diaryList.push(...data.fetchBoards);
    }


    return (
        <section>
            {
                loading ? <span>LOADING...</span> :
                    error ? <span>ERROR</span> :
                        <>
                            {
                                diaryList.map((diary) =>
                                    <DiaryItem
                                        number={diary.number}
                                        title={diary.title}
                                        createdAt={diary.createdAt}
                                        key={diary.number}
                                    />)
                            }
                        </>
            }
        </section>
    )
};

export default DiaryList;