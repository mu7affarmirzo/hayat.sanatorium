import { Button, Grid, Menu, MenuItem, MenuProps } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import {
  CaretRightIcon,
  CoinsAltIcon,
  FilePencilAltIcon,
  VialIcon,
  VuesaxLinearPrinterIcon,
} from 'assets/icons/icons';
import SelectButton from 'components/Buttons/selectButton';
import DefaultButton from 'components/DeafultButton/DefaultButton';
import { useAppModals } from 'components/Modals';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { FC } from 'react';

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
interface Props {
  selectData: any;
  selectData2: any;
}

const DiseaseHistoryTopTabs: FC<Props> = ({ selectData, selectData2 }) => {
  const PositionedMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            color: '#000',
            textTransform: 'capitalize',
            width: '180px',
            background: '#fff',
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
          <MenuItem sx={{ width: '400px' }} onClick={handleClose}>
            Заключительный прием лечащего врача
          </MenuItem>
          <MenuItem sx={{ width: '400px' }} onClick={handleClose}>
            Консультация кардиолога первичная
          </MenuItem>
          <MenuItem sx={{ width: '400px' }} onClick={handleClose}>
            Консультация невролога первичная
          </MenuItem>
          <MenuItem sx={{ width: '300px' }} onClick={handleClose}>
            Осмотр дежурного врача при поступлении
          </MenuItem>
          <MenuItem sx={{ width: '300px' }} onClick={handleClose}>
            Повторный приём лечащего врача
          </MenuItem>
          <MenuItem sx={{ width: '300px' }} onClick={handleClose}>
            Прием дежурного врача
          </MenuItem>
          <MenuItem sx={{ width: '300px' }} onClick={handleClose}>
            ЭКГ (Электрокардиограмма)
          </MenuItem>
        </StyledMenu>
      </div>
    );
  };

  const AddHandler = () => {
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
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}>
          <MenuItem>
            <PositionedMenu />
          </MenuItem>
        </StyledMenu>
      </>
    );
  };

  return (
    <Grid
      container
      className="min-h-[70px] flex justify-between flex-wrap py-[5px] bg-[#fff]">
      <Grid
        item
        xs={12}
        md={12}
        className="flex  items-center justify-between flex-wrap ">
        <div className="flex justify-between items-center py-[10px] ">
          <DefaultButton
            title="Сохранить"
            classStyle="h-[46px] text-[#fff] mr-[10px]  "
          />

          <AddHandler />

          <SelectButton
            data={selectData2}
            defaultValue="Экспортировать документы"
          />
          <DefaultButton
            title="Закрыть историю болезни"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
          />
          <DefaultButton
            title="Удалить историю болезни"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
          />
          <DefaultButton
            title="Диспечеризовать все"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
          />
          <DefaultButton
            title="Отменить все диспетчеризации"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
          />
        </div>
        <DefaultButton
          icon={<CoinsAltIcon stroke="black" />}
          title="0,00 сум"
          classStyle="bg-[#F5F5F5] h-[46px] text-[#000] py-[10px]"
          variant={'none'}
        />
      </Grid>
    </Grid>
  );
};
export default DiseaseHistoryTopTabs;
