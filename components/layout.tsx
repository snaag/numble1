import React from 'react';
import Link from "next/link";

import { GAME } from "pages/game";
import { DIARY } from "pages/diary";

const Layout = ({ children }) => {
    return (
        <div>
            <h1>사이좋은 사람들, 싸이월드</h1>
            <ul>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/game'>
                        {GAME}
                    </Link>
                </li>
                <li>
                    <Link href='/diary'>
                        {DIARY}
                    </Link>
                </li>
            </ul>
            {children}
        </div>
    );
};

export default Layout;
