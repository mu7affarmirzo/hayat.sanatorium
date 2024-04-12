import {
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from '@mui/material';
import React, { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';

type RadioOption = {
  label: string;
  value: string;
};

interface RadioGroupProps {
  name: keyof InitAppointmentTypes;
  methods?: UseFormReturn<InitAppointmentTypes, any, InitAppointmentTypes>;
  options: RadioOption[];
}

const RadioButtonGroup: FC<RadioGroupProps> = ({ name, methods, options }) => {
  const [selectedOption, setSelectedOption] = React.useState<RadioOption>(
    options[0],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    methods?.setValue(name, event.target.value);
    setSelectedOption(
      options.find(
        (option) => option.value === event.target.value,
      ) as RadioOption,
    );
  };

  return (
    <FormControl component="fieldset">
      <FormGroup className="flex flex-row items-center px-3 ">
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                value={option.value}
                checked={selectedOption.value === option.value}
                size="small"
                className="w-5 h-5 p-3"
                onChange={handleChange}
              />
            }
            label={option.label}
            className="my-2 text-[#8d8c8c] text-[14px] bg-red-500"
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;
