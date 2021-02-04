import React from "react";
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {

    return (
        <div className={s.affair}>
            <span>{props.affair.name}</span>

            <button onClick={ () => { props.deleteAffairCallback(props.affair._id) }}>X</button>
        </div>
    );
}

export default Affair;
