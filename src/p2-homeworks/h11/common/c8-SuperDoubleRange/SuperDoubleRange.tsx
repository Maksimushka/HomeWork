import React from "react";
import {Slider} from '@material-ui/core';
import s from './../c7-SuperRange/SuperRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: [number, number]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {

    const changeRangeSliderValue = (event: any, newValue: number | number[]) => {
        onChangeRange!(newValue as number[]);
    };

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 100,
            label: '100',
        },
    ];

    return (
        <div className={s.rangeBlock}>
            <Slider
                aria-label={`${value![0]}`}
                color={'primary'}
                onChange={changeRangeSliderValue}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                style={{width: '250px', color: '#1976d2', margin: '20px'}}
                value={value}
            />
        </div>
    );
}

export default SuperDoubleRange;
