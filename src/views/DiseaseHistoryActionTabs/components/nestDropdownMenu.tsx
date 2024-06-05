import {
  Button,
  Menu,
  MenuItem,
  MenuProps,
  alpha,
  styled,
} from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import { CaretRightIcon, VuesaxLinearPrinterIcon } from 'assets/icons/icons';
import React, { useState } from 'react';

interface Props {
  handleClicked: any;
  data: any[];
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const PositionedMenu = ({ handleClicked, data }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bg-red-500">
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: '#000',
          textTransform: 'capitalize',
        }}>
        Без назначения
        <CaretRightIcon style={{ marginLeft: '15px' }} />
      </Button>

      <StyledMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        MenuListProps={{
          'aria-labelledby': 'demo-positioned-menu',
        }}
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
        {data.map((item: any, index: any) => (
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
      </StyledMenu>
    </div>
  );
};

export const AddHandler = ({ data, handleClicked }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        startIcon={<VuesaxLinearPrinterIcon />}
        endIcon={<ArrowDropDownIcon sx={{ color: '#000' }} />}
        className="max-h-[46px] h-[46px]  flex pr-[10px] pl-[15px] items-center mr-[10px] rounded-[4px] min-w-[120px] bg-[#2196F3] capitalize text-[13px] w-[200px] ">
        Начало приёма
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        className=""
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}>
        <MenuItem>
          <div className="flex flex-col ">
            <Button
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={() => console.log('cliced')}
              sx={{
                color: '#000',
                textTransform: 'capitalize',
              }}>
              Первичный прием лечащего врача
            </Button>
            <PositionedMenu data={data} handleClicked={handleClicked} />
          </div>
        </MenuItem>
      </StyledMenu>
    </>
  );
};
