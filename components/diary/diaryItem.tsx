import React from 'react';
import Link from "next/link";

const DiaryItem = ({ number, title, createdAt }) => {
    const url = `/diary/${number}`;

    return (
        <article className="diary-item__layout">
            <div className="flex flex__column gap-6">
                <h2 className="diary-item__date">{createdAt} ({number})</h2>
                <h1 className="diary-item__title">{title}</h1>
            </div>
            <Link href={url}>자세히 보러가기</Link>
        </article>
    );
};

export default DiaryItem;