import React, { useState } from 'react';
import {
  Box,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from '@mui/material';

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

type Option = {
  title: string;
};

type SelectButtonProps = {
  icon?: JSX.Element;
  data?: Option[];
  defaultValue?: string;
  style?: string;
  selectStyle?: string;
  itemStyle?: string;
};

const SelectButton: React.FC<SelectButtonProps> = ({
  icon,
  data = [],
  defaultValue = '',
  style = 'max-h-[46px] h-[46px]',
  selectStyle,
  itemStyle,
}) => {
  const [age, setAge] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div
      className={`${style} flex pr-[10px] pl-[15px] items-center mr-[10px] rounded-[4px] min-w-[120px] bg-[#2196F3]`}>
      {icon && <Box className="mr-[10px]">{icon}</Box>}
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        onChange={handleChange}
        displayEmpty
        input={<BootstrapInput />}
        notched
        className={`${selectStyle} py-[10px] cursor-pointer font-roboto`}>
        <MenuItem className="font-roboto">
          <p className={`${itemStyle} text-[#fff]`}>{defaultValue}</p>
        </MenuItem>
        {data.map((item: Option, index: number) => (
          <MenuItem className="font-roboto" value={item.title} key={index}>
            <p className={`${itemStyle} text-[#fff]`}>{item.title}</p>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectButton;
