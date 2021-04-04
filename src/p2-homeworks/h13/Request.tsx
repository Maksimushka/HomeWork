import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import s from './Request.module.css'
import {RequestAPI} from './RequestAPI';

const Request = () => {
    const [check, setCheck] = useState(false)
    const [output, setOutput] = useState('')
    const onClickHandler = async () => {
        try {
            let prom = await RequestAPI.post(check)
            console.log(prom)
            setOutput(prom.data.info)
        } catch (e) {
            console.log({...e})
            setOutput(e.response.data.errorText)
        }
    }

    return (
        <div className={s.requestBlock}>
            <h2>Homework 13</h2>
            <SuperButton onClick={onClickHandler}>Press on me!</SuperButton>
            <SuperCheckbox
                onChange={(e) => setCheck(e.currentTarget.checked)}
                checked={check}/>
            <span>Result: {output}</span>
        </div>
    );
};

export default Request;