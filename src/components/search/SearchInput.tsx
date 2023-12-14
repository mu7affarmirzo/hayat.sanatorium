import { InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { SearchAltIcon } from 'assets/icons/icons';
import React from 'react';
type propsType = {
    placeholder?: string;
};
const SearchInput = (props: propsType) => {
    return (
        <TextField
            className={`${'w-[100%]'} bg-[#fff] h-[40px] `}
            id="outlined-start-adornment"
            size="small"
            placeholder={props.placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchAltIcon stroke="black" strokeOpasity="0.38" />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchInput;
