import React from "react";
import s from "./HW12.module.css";
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeAC} from './bll/themeReducer';
import {AppStoreType} from '../h10/bll/store';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const {theme} = useSelector((state: AppStoreType) => state.theme)

    const dispatch = useDispatch()
    const onChangeCallback = (value: string) => {
        dispatch(changeThemeAC(value))
    }

    return (
        <div className={`${s.block} ${s[theme]}`}>
            <hr/>
            <h2 className={`${s.span} ${s[theme + '-text']}`}>
                Homeworks 12
            </h2>

            <div className={s.selectBlock}>
                <h2 className={s[theme + '-text']}>Choose theme</h2>
                <SuperSelect
                    value={theme}
                    options={themes}
                    onChangeOption={onChangeCallback}/>
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
