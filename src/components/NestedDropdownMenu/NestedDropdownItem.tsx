// PositionedMenu.tsx
import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { CaretRightIcon } from 'assets/icons/icons';
import { DropdownMenuItem } from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs';

interface Props {
  data: DropdownMenuItem;
  handleClicked: (item: any) => void;
}

const PositionedMenu: React.FC<Props> = ({ data, handleClicked }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="flex items-center justify-start gap-4"
        // endIcon={}
        sx={{
          color: '#000',
          width: '300px',
          maxWidth: '400px',
          textTransform: 'capitalize',
        }}>
        <Typography> {data.title}</Typography>
        <CaretRightIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
        {data.subMenu?.map((item: any, index: any) => (
          <MenuItem
            sx={{ width: '400px' }}
            onClick={() => {
              handleClose();
              handleClicked({ id: item.id, title: item.title });
            }}
            key={index}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default PositionedMenu;
