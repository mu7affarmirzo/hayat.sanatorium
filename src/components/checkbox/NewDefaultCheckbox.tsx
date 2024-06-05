import {
  Box,
  Checkbox,
  FormControlLabel,
  checkboxClasses,
} from '@mui/material';
import { useState } from 'react';
import { Path, UseFormReturn } from 'react-hook-form';

interface PropsTypes<T extends {}> {
  methods: UseFormReturn<any, any, any>;
  name: Path<T>;
  label?: string;
}

export const NewDefaultCheckbox = <T extends {}>({
  methods,
  name,
  label,
}: PropsTypes<T>) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const isChecked = !checked;
    setChecked(isChecked);
    methods.setValue(name, isChecked as never);
  };

  return (
    <Box className="px-3">
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            size="medium"
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
        label={label}
        sx={{
          '& .MuiTypography-root': {
            fontSize: '14px',
            fontWeight: 500,
            color: checked ? '#007DFF' : '#d7d7d7', // Shart bo'ylab label rangi
          },
        }}
        className="my-2 text-[#b8b8b8aa] text-sm font-roboto font-normal"
      />
    </Box>
  );
};
