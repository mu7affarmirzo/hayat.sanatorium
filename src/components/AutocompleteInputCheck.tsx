import {
    Autocomplete,
    Box,
    Checkbox,
    TextField,
    Typography,
} from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';
type propsType = {
    data?: any;
    lable?: string;
    containerStyle?: string;
    inputStyle?: string;
    lableStyle?: string;
};
const AutocompleteInputCheck = (props: propsType) => {
    let { data, lable, containerStyle, inputStyle, lableStyle } = props;
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;
    const [input, setInput] = useState('');
    return (
        <Box
            className={`${
                containerStyle ? containerStyle : 'flex-row w-[100%]'
            } flex  gap-1 z-[100]  `}
        >
            {lable ? (
                <Box className={` ${lableStyle} text-[#8d8c8c]`}>
                    <Typography className="text-[14px] font-normal  mr-[5px]">
                        {lable}
                    </Typography>
                </Box>
            ) : null}
            <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={data}
                disableCloseOnSelect
                getOptionLabel={(option: any) => option.title}
                onInputChange={(e, v) => {
                    setInput(v);
                }}
                inputValue={input}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option.title}
                    </li>
                )}
                className={`${inputStyle ? inputStyle : ' w-[70%] '}`}
                renderInput={(params) => <TextField {...params} />}
            />
        </Box>
    );
};

export default AutocompleteInputCheck;
