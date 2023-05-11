import React, { useState, useEffect, useRef } from 'react';

const InputMask = () => {
    const [card, setCard] = useState();
    const inputCard = useRef();

    const handleChange = () => {
        const reg1 = /\dA/
        const reg2 = /\dA/i
        const str = "Jav5ascript"
        const newStr1 = str.replace(reg1, "--");
        const newStr2 = str.replace(reg2, "--");
        console.log(newStr1) // Jav5ascript
        console.log(newStr2) // Jav--script

        //const cardValue = inputCard.current.value
        //    .replace(/\D/g, '')
        //    .match(/(\d{0,4})(\d{0,4}))/);
        //inputCard.current.value = !cardValue[2]
        //    ? cardValue[1]
        //    : `${cardValue[1]}-${cardValue[2]}${`${cardValue[3] ? `-${cardValue[3]}` : ''
        //    }`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}`;
        //const numbers = inputCard.current.value.replace(/(\D)/g, '');
        //setCard(numbers);
    };

    useEffect(() => {
        handleChange();
    }, [card]);

    return (
        <>
            <input type="text" ref={inputCard} onChange={handleChange} />
        </>
    );
};

export default InputMask;