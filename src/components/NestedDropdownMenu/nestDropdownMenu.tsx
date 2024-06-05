import React, { FC, useState } from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { VuesaxLinearPrinterIcon } from 'assets/icons/icons';

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

const MultilevelDropdown: FC<MultilevelDropdownProps> = ({
  onChange,
  options,
  title,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: Option) => {
    onChange(option);
    if (option.children) {
      console.log(option);
    }
  };

  const renderOptions = (options: Option[]) => {
    return options.flatMap((option, index) => [
      <MenuItem key={option.value} onClick={() => handleMenuItemClick(option)}>
        {option.label}
      </MenuItem>,
      option.children && (
        <Menu
          key={`${option.value}-menu`}
          id={`nested-menu-${index}`}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          {renderOptions(option.children)}
        </Menu>
      ),
    ]);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        startIcon={<VuesaxLinearPrinterIcon />}
        endIcon={<ArrowDropDownIcon sx={{ color: '#000' }} />}
        className="max-h-[46px] h-[46px]  flex pr-[10px] pl-[15px] items-center mr-[10px] rounded-[4px] min-w-[120px] bg-[#2196F3] capitalize text-[13px] w-[200px] ">
        {title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {renderOptions(options)}
      </Menu>
    </div>
  );
};

export default MultilevelDropdown;
