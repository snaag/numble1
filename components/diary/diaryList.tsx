import React, {useEffect, useState} from 'react';
import {useQuery, useLazyQuery} from "@apollo/client";

import { FETCH_DIARY_LIST } from "queries/diary";
import DiaryItem from "./diaryItem";
import {myThrottle} from "../../utils/util";
import diary from "../../pages/diary";


const DiaryList = () => {
    const [page, setPage] = useState(1);
    const [diaryList, setDiaryList] = useState([]);
    const [triggerFunction, fetchStatus]  = useLazyQuery(FETCH_DIARY_LIST)
    //
    //
    // useEffect(() => {
    //     console.log('useEffect called');
    //     window.addEventListener('scroll', scroll);
    //     return () => {
    //         console.log('clean up')
    //         window.removeEventListener('scroll', scroll);
    //     }
    // });
    //
    //



    useEffect(() => {
        loadNextDiaryList({ page }).then((res) => {
            // @ts-ignore
            const fetchBoards = res?.data?.fetchBoards || [];
            setDiaryList([...diaryList, ...fetchBoards])
        })
    })


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
    }

    const scroll = async () => {
        const { scrollTop, offsetHeight } = document.documentElement;
        const { innerHeight } = window;

        if(innerHeight + scrollTop >= offsetHeight) {
            setPage(page+1);
            loadNextDiaryList({ page: page+1 }).then((res) => {
                // @ts-ignore
                const fetchBoards = res?.data?.fetchBoards || [];
                setDiaryList([...diaryList, ...fetchBoards])
            })

        }
    }
    //
    // const _fn = myThrottle(scroll, 500)
    // const handleScroll = () => {
    //     _fn();
    // }

    return (
        <section>
            {
                        <>
                            <span>현재 {page} page</span>
                            <button onClick={scroll}>다음</button>
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