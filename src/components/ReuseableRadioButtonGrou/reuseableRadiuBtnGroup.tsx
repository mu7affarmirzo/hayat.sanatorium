import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface RadioButtonGroupProps {
  label?: string;
  options: Option[];
}

const ReuseAbleRadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  label,
  options,
}) => {
  const [selectedOption, setSelectedOption] = React.useState<Option>(
    options[0],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(
      options.find((option) => option.value === event.target.value) as Option,
    );
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        value={selectedOption.value}
        style={{ display: 'flex', flexDirection: 'row' }}
        onChange={handleChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default ReuseAbleRadioButtonGroup;
