import React, {useEffect} from 'react';

import {goToPathRefresh} from "utils/util";

const NoDiary = () => {
    const SECONDS = 3;

    useEffect(() => {
        const intervalId = setTimeout(() => {
            goToPathRefresh('/diary');
        }, SECONDS*1000);
        return () => {
            clearInterval(intervalId);
        }
    });

    return (
        <div>
            <h2>없어요, {SECONDS} 초 뒤에 다이어리 목록으로 돌아갑니다</h2>
            <a href='/diary'>
                <button>Back</button>
            </a>
        </div>
    );
};

export default NoDiary;