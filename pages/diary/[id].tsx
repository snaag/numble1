import React from 'react';
import Link from "next/link";

const DiaryDetail = () => {
    return (
        <div>
            <h1>DiaryDetail</h1>
            <Link href='/diary'>
                <button>
                    목록으로
                </button>
            </Link>
        </div>
    );
};

export default DiaryDetail;
