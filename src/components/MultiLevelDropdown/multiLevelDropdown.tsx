import React from 'react';

interface Option {
  label: string;
  value: string;
  children?: Option[];
}

interface MultilevelDropdownProps {
  title: string;
  options: Option[];
  onChange: (selectedValue: Option) => void;
}

const MultilevelDropdown: React.FC<MultilevelDropdownProps> = ({
  title,
  options,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = options[selectedIndex];
    onChange(selectedOption);
  };

  const renderOptions = (options: Option[]) => {
    return options.map((option) => (
      <React.Fragment key={option.value}>
        <option value={option.value}>{option.label}</option>
        {option.children && renderOptions(option.children)}
      </React.Fragment>
    ));
  };

  return (
    <div className="py-1 px-4 bg-red-500 rounded">
      <select onChange={handleChange}>{renderOptions(options)}</select>
    </div>
  );
};

export default MultilevelDropdown;
