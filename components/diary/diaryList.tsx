import React, {useState} from 'react';
import {useQuery} from "@apollo/client";

import { FETCH_DIARY_LIST } from "../../queries/diary";
import DiaryItem from "./diaryItem";


const DiaryList = () => {
    const [page, setPage] = useState(1);
    const [diaryList, setDiaryList] = useState([]);

    const { loading, error, data } = useQuery(FETCH_DIARY_LIST, {
        variables: { page },
        onCompleted: (data) => {
            setDiaryList([...data.fetchBoards]);
        }
    });

    return (
        <section>
            {
                loading ? <span>Loading</span> :
                    error ? <span>error</span> :
                        <>
                            <span>현재 {page} page</span>
                            <br/>

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