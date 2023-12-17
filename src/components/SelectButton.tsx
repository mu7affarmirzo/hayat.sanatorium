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
        backgroundColor: '#2196F3',

        color: '#fff',
        fontSize: 16,
        padding: 0,

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
};
const SelectButton = (props: propsType) => {
    const [age, setAge] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <div
            className={`${
                props.style ? props.style : 'max-h-[46px] h-[46px]'
            } min-w-[150px]  bg-[#2196F3]  flex px-[10px] items-center mr-[10px] rounded-[4px]`}
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
                className="py-[10px] cursor-pointer"
            >
                <MenuItem value="">
                    <p className=" ">{props.defaultValue}</p>
                </MenuItem>
                {props.data.map((item: any) => {
                    return <MenuItem value={item.title}>{item.title}</MenuItem>;
                })}
            </Select>
        </div>
    );
};

export default SelectButton;
{
    /* <VuesaxLinearPrinterIcon />;  */
}
