import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const marks = [
    // {
    //     value: 0,
    //     label: '0',
    // },
    {
        value: 25,
        label: '25',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 75,
        label: '75',
    },
    // {
    //     value: 100,
    //     label: '100',
    // },
];

function valuetext(value: number) {
    return `${value}`;
}

export type SuperRangeType = SliderProps & {
    value: number | number[]
    onChange: (event: Event, value: number | number[]) => void
} & Omit<SliderProps, 'value' | 'onChange'>

const SuperRange: React.FC<SuperRangeType> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 300
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)


            aria-label="Always visible"
            // value={props.value}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            valueLabelDisplay="on"
            color="secondary"
        />
    )
}

export default SuperRange
