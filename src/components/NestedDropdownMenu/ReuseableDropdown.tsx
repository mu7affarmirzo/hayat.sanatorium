// DropdownButton.tsx
import React, { useState } from 'react';
import { Button, Menu, MenuItem, PopoverOrigin } from '@mui/material';
import PositionedMenu from './NestedDropdownItem';
import { DropdownMenuItem } from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs';
import { CommonProps } from '@mui/material/OverridableComponent';

interface Props {
  data: DropdownMenuItem[];
  handleClicked: (item: any) => void;
  title: string;
  styles?: CommonProps['className'];
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
}

const Dropdown: React.FC<Props> = ({
  data,
  handleClicked,
  title,
  styles,
  startIcon,
  endIcon,
  anchorOrigin,
  transformOrigin,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disabled={false}
        onClick={handleClick}
        startIcon={startIcon}
        endIcon={endIcon}
        className={`items-center capitalize text-[14px] ${styles}`}>
        {title}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        className=""
        transformOrigin={transformOrigin}>
        {data.length > 0 ? data.map((item: DropdownMenuItem, index: any) => {
          if (item.subMenu) {
            return (
              <PositionedMenu
                data={item}
                handleClicked={handleClicked}
                key={index}
              />
            );
          }
          return (
            <MenuItem
              sx={{
                width: '300px',
                maxWidth: '400px',
              }}
              className="bg-red-300"
              onClick={() => {
                handleClose();
                handleClicked({ id: item.id, title: item.title });
              }}
              key={index}>
              {item.title}
            </MenuItem>
          );
        }) : (
          <MenuItem
            sx={{
              width: '300px',
              maxWidth: '400px',
            }}
            className="bg-red-300"
            onClick={() => {
              handleClose();
            }}
          >
            Нет данных
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default Dropdown;
