import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  checkboxClasses,
} from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { Path, UseFormReturn } from 'react-hook-form';

type RadioOption = {
  label: string;
  value: string;
};

interface RadioGroupProps<T extends {}> {
  name: Path<T>; // Define name as a Path
  methods: UseFormReturn<any, any, any>; // Require methods
  options: RadioOption[];
  required?: boolean
}

const RadioButtonGroup = <T extends {}>({
  name,
  methods,
  options,
  required
}: RadioGroupProps<T>) => {
  // const [selectedOption, setSelectedOption] = React.useState<string>(methods.getValues(name) ?? ''); // Initialize selectedOption with an empty string
  // console.log(methods.getValues(name), { name, selectedOption, defaultValue })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    methods.setValue(name, selectedValue as never); // Update value using setValue method
    // setSelectedOption(selectedValue); // Update local state
  };

  return (
    <FormControl required={required} component="fieldset">
      <FormGroup className="flex flex-row items-center px-3 ">
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                value={option.label}
                checked={methods.watch(name) === option.label}
                size="small"
                className="w-5 h-5 p-3"
                onChange={handleChange}
                sx={{
                  [`&. ${checkboxClasses.root}`]: {
                    color: '#d7d7d7', // Active rang
                  },
                  [`&. ${checkboxClasses.checked}`]: {
                    color: '#007DFF', // Active rang
                  },
                }}
              />
            }
            label={option.label}
            sx={{
              '& .MuiTypography-root': {
                fontSize: '14px',
                color: methods.watch(name) === option.label ? '#007DFF' : '#d7d7d7', // Shart bo'ylab label rangi
              },
            }}
            className="my-2 text-[#b8b8b8aa] text-sm font-roboto font-normal"
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;
