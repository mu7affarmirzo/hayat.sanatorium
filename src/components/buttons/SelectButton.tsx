import {
    Box,
    InputBase,
    MenuItem,
    Select,
    SelectChangeEvent,
    styled,
} from '@mui/material';

import { useState } from 'react';
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        color: '#fff',
        fontSize: 16,
        padding: 0,
        height: '100%',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            border: 0,
        },
    },
}));
type propsType = {
    icon?: any;
    data?: any;
    defaultValue?: string;
    style?: string;
    selectStyle?: string;
    itemStyle?: string;
};
const SelectButton = (props: propsType) => {
    const [age, setAge] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <div
            className={`${
                props.style ? props.style : 'max-h-[46px] h-[46px]  '
            }   flex pr-[10px] pl-[15px] items-center mr-[10px] rounded-[4px] min-w-[120px] bg-[#2196F3] `}
        >
            {props.icon ? <Box className="mr-[10px]"> {props.icon}</Box> : null}

            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                input={<BootstrapInput />}
                className={`${props?.selectStyle} py-[10px] cursor-pointer  `}
            >
                <MenuItem value="">
                    <p
                        className={`${
                            props.itemStyle ? props.itemStyle : 'text-[#fff]'
                        } `}
                    >
                        {props.defaultValue}
                    </p>
                </MenuItem>
                {props.data.map((item: any) => {
                    return (
                        <MenuItem value={item.title}>
                            <p
                                className={` ${
                                    props.itemStyle
                                        ? props.itemStyle
                                        : 'text-[#fff]'
                                } `}
                            >
                                {item.title}
                            </p>
                        </MenuItem>
                    );
                })}
            </Select>
        </div>
    );
};

export default SelectButton;
{
    /* <VuesaxLinearPrinterIcon />;  */
}
