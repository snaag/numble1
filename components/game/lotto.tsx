import React, {useEffect, useState} from 'react';

const N = 6;
const MAX = 45;

const generateLottoNumbers = (count, MAX) => {
    const ret = [];
    const randomNumber = Math.random().toString().split('.')[1].slice(0, count*2);
    for(let i=0; i<count*2; i=i+2) {
        const [from, to] = [i, i+1];
        const lottoNumber = Number(randomNumber[from].concat(randomNumber[to]))%(MAX)+1;
        ret.push(lottoNumber);
    }
    return ret;
}

const Lotto = () => {
    const [lottoNumberList, setLottoNumberList] = useState([]);

    useEffect(() => {
        generate();
    },[]);

    const generate = () => {
        setLottoNumberList(generateLottoNumbers(N, MAX));
    }

    return (
        <div className="game__box">
            <h1>숫자 로또</h1>
            <br/>
            <div>
                {
                    lottoNumberList.map((item, index) => <span key={index}>[{item}]</span>)
                }
            </div>
            <br/>
            <button onClick={generate}>생성</button>
        </div>
    );
};

export default Lotto;