import React, {useEffect, useState} from 'react';
import {useQuery, useLazyQuery} from "@apollo/client";

import { FETCH_DIARY_LIST } from "queries/diary";
import {myThrottle} from "../../utils/util";
import DiaryItem from "./diaryItem";


const DiaryList = () => {
    const [page, setPage] = useState(1);
    const [diaryList, setDiaryList] = useState([]);
    const [triggerFunction, fetchStatus]  = useLazyQuery(FETCH_DIARY_LIST);

    useEffect(() => {
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    });

    const loadNextDiaryList = (variables) => {
        return new Promise((resolve, reject) => {
            try {
                triggerFunction({ variables }).then(res => {
                    resolve(res);
                });
            } catch(e) {
                reject(e)
            }
        })
    };

    const scroll = async () => {
        const { scrollTop, offsetHeight } = document.documentElement;
        const { innerHeight } = window;

        if(innerHeight + scrollTop + 10 >= offsetHeight) {
            setPage(page+1);
            loadNextDiaryList({ page: page+1 }).then((res) => {
                // @ts-ignore
                const fetchBoards = res?.data?.fetchBoards || [];
                setDiaryList([...diaryList, ...fetchBoards])
            })
        }
    };

    const scrollListener = myThrottle(scroll, 500);

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