import { InputAdornment, TextField } from "@mui/material";
import { SearchAltIcon } from "assets/icons/icons";
import React from "react";
type PropsType = {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchValue?: string;
};
const SearchInput = (props: PropsType) => {
    return (
        <TextField
            className={`${"w-[100%]"} bg-[#fff] h-[40px] `}
            id="outlined-start-adornment"
            size="small"
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.searchValue}
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
