import {
  Box,
  Checkbox,
  FormControlLabel,
  checkboxClasses,
} from '@mui/material';
import { FC, useState } from 'react';

type PropsTypes = {
  option: {
    label: string;
    value: string;
  };
};

export const NewDefaultCheckbox: FC<PropsTypes> = ({ option }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box className="px-3">
      <FormControlLabel
        key={option.value}
        control={
          <Checkbox
            value={option.value}
            checked={checked}
            size="small"
            className="w-5 h-5 p-3"
            onChange={handleChange}
            sx={{
              [`&.${checkboxClasses.root}`]: {
                color: '#d7d7d7', // Active rang
              },
              [`&.${checkboxClasses.checked}`]: {
                color: '#007DFF', // Active rang
              },
            }}
          />
        }
        label={option.label}
        sx={{
          '& .MuiTypography-root': {
            fontSize: '14px',
            color: checked ? '#007DFF' : '#d7d7d7', // Shart bo'ylab label rangi
          },
        }}
        className="my-2 text-[#b8b8b8aa] text-sm font-roboto font-normal"
      />
    </Box>
  );
};
