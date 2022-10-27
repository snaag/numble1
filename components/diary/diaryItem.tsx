import React from 'react';
import Link from "next/link";

const DiaryItem = ({ number, title, createdAt }) => {
    const url = `/diary/${number}`;

    return (
        <article>
            <h1>{title}</h1>
            <h2>{createdAt}</h2>
            <Link href={url}>자세히~</Link>
        </article>
    );
};

export default DiaryItem;