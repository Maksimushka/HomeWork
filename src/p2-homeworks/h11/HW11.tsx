import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(24);
    const [value2, setValue2] = useState(67);

    const changeValue1 = (value: number) => setValue1(value)

    const changeValueOnSlider = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div className={s.mainBlock}>
            <hr/>
            <h2>homeworks 11</h2>

            {/*should work (должно работать)*/}
            <div>
                <SuperRange
                    value={value1}
                    onChangeRange={changeValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.rangeBlock}>
                <span className={s.value}>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={changeValueOnSlider}
                    value={[value1, value2]}
                />
                <span className={s.value}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
