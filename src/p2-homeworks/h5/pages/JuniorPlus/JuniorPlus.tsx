import React from "react";
import HW12 from '../../../h12/HW12';
import s from '../../../h12/HW12.module.css';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../h10/bll/store';
import Request from '../../../h13/Request'

function JuniorPlus() {
    const {theme} = useSelector((state: AppStoreType) => state.theme )
    return (
        <div className={s[theme]}>
            <HW12 />
            <Request />
        </div>
    );
}

export default JuniorPlus;

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз