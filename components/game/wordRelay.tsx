import React, {useState} from 'react';

const WordRelay = () => {
    const [prevWord, setPrevWord] = useState('코드캠프');
    const [passText, setPassText] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const isPass = checkPass(e.target[0].value.trim());

        if(isPass) {
            setPassText('성공');
            e.target[0].value = '';
        } else {
            setPassText('실패');
        }
    }

    const checkPass = (currWord) => {
        if(currWord[0] === prevWord[prevWord.length-1]) {
            setPrevWord(currWord);
            return true;
        }
        return false;
    }

    return (
        <div className="game__box">
            <h1 className="game__title">끝말잇기</h1>
            <h2 className="game__subtitle">제시어 : {prevWord}</h2>
            <br/>
            <form onSubmit={submit}>
                <input type="text"/>
                <button type="submit">입력</button>
            </form>
            <span>{passText}</span>
        </div>
    );
};

export default WordRelay;