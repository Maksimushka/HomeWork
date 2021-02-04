import React from "react";
import Affair from "./Affair";
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: any
    deleteAffairCallback: any
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => { props.setFilter("all") };
    const setHigh = () => { props.setFilter("high") };
    const setMiddle = () => { props.setFilter("middle") };
    const setLow = () => { props.setFilter("low") };

    return (
        <div className={s.affairs}>

            {mappedAffairs}
        <div className={s.filter}>
            <a onClick={setAll}>All</a>
            <a onClick={setHigh}>High</a>
            <a onClick={setMiddle}>Middle</a>
            <a onClick={setLow}>Low</a>
        </div>
        </div>
    );
}

export default Affairs;
