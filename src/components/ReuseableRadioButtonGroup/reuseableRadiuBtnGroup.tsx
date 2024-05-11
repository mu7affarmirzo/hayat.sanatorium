import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  checkboxClasses,
} from '@mui/material';
import { Path, UseFormReturn } from 'react-hook-form';

interface Option {
  value: string;
  label: string;
}

interface RadioButtonGroupProps<T extends {}> {
  label?: string;
  options: Option[];
  methods: UseFormReturn<any, any, any>;
  name: Path<T>;
}

const ReusableRadioButtonGroup = <T extends {}>({
  label,
  options,
  methods,
  name,
}: RadioButtonGroupProps<T>) => {
  const [selectedOption, setSelectedOption] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    methods.setValue(name, selectedValue as never); // Update value using setValue method
    setSelectedOption(selectedValue); // Update local state
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        value={selectedOption || ''} // Provide a fallback value to prevent the warning
        style={{ display: 'flex', flexDirection: 'row' }}
        onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.label}
            control={
              <Radio
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
            className="my-2 text-[#b8b8b8aa] text-sm font-roboto font-normal"
            sx={{
              '& .MuiTypography-root': {
                fontSize: '14px',
                color: selectedOption === option.label ? '#007DFF' : '#d7d7d7', // Shart bo'ylab label rangi
              },
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default ReusableRadioButtonGroup;
