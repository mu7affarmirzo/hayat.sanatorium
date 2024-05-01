import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  checkboxClasses,
} from '@mui/material';

interface Option {
  label: string;
  value: string;
}

interface MultiSelectCheckboxGroupProps {
  options: Option[];
  methods: any;
  name: string;
}

const MultiSelectCheckboxGroup: React.FC<MultiSelectCheckboxGroupProps> = ({
  options,
  methods,
  name,
}: MultiSelectCheckboxGroupProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleSelectChange = (newSelectedOptions: string[]) => {
    setSelectedOptions(newSelectedOptions);

    methods.setValue(name, newSelectedOptions.join(','));
  };

  const handleCheckboxChange = (value: string) => {
    const selectedIndex = selectedOptions.indexOf(value);
    let newSelectedOptions: string[] = [];

    if (selectedIndex === -1) {
      newSelectedOptions = [...selectedOptions, value];
    } else if (selectedIndex === 0) {
      newSelectedOptions = selectedOptions.slice(1);
    } else if (selectedIndex === selectedOptions.length - 1) {
      newSelectedOptions = selectedOptions.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelectedOptions = [
        ...selectedOptions.slice(0, selectedIndex),
        ...selectedOptions.slice(selectedIndex + 1),
      ];
    }
    handleSelectChange(newSelectedOptions);
  };

  return (
    <FormControl component="fieldset">
      <FormGroup className="flex flex-row items-center px-3">
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={selectedOptions.includes(option.label)}
                onChange={() => handleCheckboxChange(option.label)}
                size="small"
                className="w-5 h-5 p-3"
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
                color: selectedOptions.includes(option.label)
                  ? '#007DFF'
                  : '#d7d7d7',
              },
            }}
            className="my-2 text-[#b8b8b8aa] text-sm font-roboto font-normal"
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default MultiSelectCheckboxGroup;
