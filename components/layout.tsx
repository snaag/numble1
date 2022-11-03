import React from 'react';
import Link from "next/link";

import { GAME } from "pages/game";
import { DIARY } from "pages/diary";

const Layout = ({ children }) => {
    return (
        <div className="layout flex">
            <div className="layout__inner flex gap-6">
                <div className="layout__left">
                    <span>TODAY 0 | TOTAL 12345</span>
                    <div className="left__inner">
                        <div className="picture"/>
                    </div>
                </div>

                <div className="layout__right">
                    <h1>사이좋은 사람들, 싸이월드</h1>
                    <div className="right__inner">
                        <nav className="layout__nav">
                            <Link href='/'>
                                <button className="nav__item">Home</button>
                            </Link>
                            <Link href='/game'>
                                <button className="nav__item">{GAME}</button>
                            </Link>
                            <Link href='/diary'>
                                <button className="nav__item">{DIARY}</button>
                            </Link>
                        </nav>
                        <div className="layout__children">
                            {children}
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Layout;
