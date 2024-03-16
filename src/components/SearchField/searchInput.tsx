import { InputAdornment, TextField } from '@mui/material';
import { SearchAltIcon } from 'assets/icons/icons';
import React from 'react';

type PropsType = {
  placeholder?: string;
  onChange?: (value: string) => void;
  searchValue?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchInput = (props: PropsType) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (props.onChange) {
      props.onChange(value);
    }
  };
  return (
    <TextField
      className={`${'w-[100%]'} bg-[#fff] h-[40px] `}
      id="outlined-start-adornment"
      size="small"
      onChange={handleChange}
      placeholder={props.placeholder}
      value={props.searchValue}
      onKeyDown={props.onKeyDown}
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
