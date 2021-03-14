import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import loader from './../../assets/oval.svg'
import s from './HW10.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {Dispatch} from 'redux';
import {ActionType, loadingAC} from './bll/loadingReducer';

function HW10() {

    const {loaderValue} = useSelector((state: AppStoreType) => state.loading)
    const dispatch = useDispatch<Dispatch<ActionType>>()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log("loading...");
    };

    return (
        <div className={s.loaderBlock}>
            <hr/>
            <h2>homeworks 10</h2>


            {/*should work (должно работать)*/}
            {loaderValue
                ? (<div className={s.image}>
                    <img className={s.loader} src={loader} alt="loader"/>
                </div>)
                : (
                    <div className={s.button}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
