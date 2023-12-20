import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import {
    CaretRightIcon,
    FilePencilAltIcon,
    VialIcon,
} from 'assets/icons/icons';
import HealingProcedures from 'components/HealingProcedures';
import { useAppModals } from 'components/Modals';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import { ConsultingResearchCol } from 'components/columnDefs/ConsultingResearchCol';
import { HealingProceduresCol } from 'components/columnDefs/HealingProceduresCol';
import { TreatmentProgramsCOl } from 'components/columnDefs/TreatmentProgramsCal';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
import ReceptionTableGroup from 'components/receptionTableGroup/ReceptionTableGroup';
import React from 'react';
import { rowData } from '../frontPage/FrontPageView';

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
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

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
                }}
            >
                Мой приём
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
                }}
            >
                <MenuItem sx={{ width: '400px' }} onClick={handleClose}>
                    Заключительный прием лечащего врача
                </MenuItem>
                <MenuItem sx={{ width: '400px' }} onClick={handleClose}>
                    Осмотр дежурного врача при поступлении
                </MenuItem>
                <MenuItem sx={{ width: '400px' }} onClick={handleClose}>
                    Повторный приём лечащего врача
                </MenuItem>
                <MenuItem sx={{ width: '300px' }} onClick={handleClose}>
                    Прием дежурного врача
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
    const appModals = useAppModals();
    const openModal = () => {
        appModals?.show('selecting_destination');
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
                className="h-[35px] bg-[#4CAF50] mr-[5px] text-[#fff]  capitalize px-[15px]"
            >
                Добавить
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
                }}
            >
                <MenuItem onClick={handleClose}>
                    <FilePencilAltIcon style={{ marginRight: '10px' }} />
                    Консультацию
                </MenuItem>
                <MenuItem onClick={openModal}>
                    <VialIcon style={{ marginRight: '10px' }} />
                    Исследование
                </MenuItem>
                <MenuItem sx={{ borderTop: '1px solid #888787' }}>
                    <PositionedMenu />
                </MenuItem>
            </StyledMenu>
        </>
    );
};

const MainAssignmentSheetView = () => {
    const appModals = useAppModals();

    return (
        <Box className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-225px)]  p-[10px] overflow-hidden ">
            <Box className=" flex h-[35px] items-start  justify-between   ">
                <DefaultText style={'text-[#000] text-[14px]'}>
                    Основной лист назначений
                </DefaultText>
            </Box>
            <Box className="bg-[#fff] w-full p-[5px] overflow-scroll max-h-[calc(100vh-230px)] h-[calc(100vh-280px)] border  ">
                <Box className="border p-[3px] ">
                    <Typography
                        className={'text-[#000] text-[14px] font-medium '}
                    >
                        Лечебные программы
                    </Typography>
                    <Box className="flex mt-[10px]  justify-between">
                        <Box className="flex ">
                            <DefaultButton
                                title="Назначить из лечебной программы"
                                style="bg-[#4CAF50] h-[40px]"
                                onClick={() =>
                                    appModals?.show('selecting_destination')
                                }
                            />
                            <DefaultButton
                                title="Добавить программу в ИБ"
                                style="bg-[#4CAF50] h-[40px]  ml-[10px]"
                            />
                        </Box>
                        <Box className="flex ">
                            <DefaultCheckbox label="Скрывать неактивные" />
                        </Box>
                    </Box>
                    <Box className="mt-[10px]">
                        <ReceptionTable
                            columnDefs={TreatmentProgramsCOl}
                            height="h-[130px]"
                            rowData={rowData}
                        />
                    </Box>
                </Box>
                <Box className="border p-[3px]  mt-[5px]">
                    <Typography
                        className={'text-[#000] text-[14px] font-medium '}
                    >
                        Консультации и исследования
                    </Typography>
                    <Box className=" py-[10px] ">
                        <AddHandler />

                        <DefaultButton
                            title="Приостановить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Возобновить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Отменить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Диспетчеризовать"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                        <DefaultButton
                            title="Удалить"
                            style="h-[35px] bg-[#2196F3] mr-[5px]"
                            disabled
                        />
                    </Box>
                    <ReceptionTableGroup columnDefs={ConsultingResearchCol} />
                </Box>
                <Box className="border p-[3px]  mt-[5px]">
                    <Typography
                        className={'text-[#000] text-[14px] font-medium '}
                    >
                        Лечебные процедуры
                    </Typography>

                    <Box className=" py-[5px] flex flex-wrap  justify-between">
                        <Box className="  flex flex-wrap">
                            <DefaultButton
                                title="Добавить"
                                style="h-[35px] bg-[#4CAF50] mr-[5px]"
                                onClick={() =>
                                    appModals?.show('selecting_destination')
                                }
                            />
                            <DefaultButton
                                title="Приостановить"
                                style="h-[35px] bg-[#2196F3] mr-[5px]"
                                disabled
                            />
                            <DefaultButton
                                title="Возобновить"
                                style="h-[35px] bg-[#2196F3] mr-[5px]"
                                disabled
                            />
                            <DefaultButton
                                title="Отменить"
                                style="h-[35px] bg-[#2196F3] mr-[5px]"
                                disabled
                            />
                            <DefaultButton
                                title="Диспетчеризовать"
                                style="h-[35px] bg-[#2196F3] mr-[5px]"
                            />
                            <DefaultButton
                                title="Удалить"
                                style="h-[35px] bg-[#2196F3] mr-[5px]"
                            />
                            <DefaultButton
                                title="Продлить выбранные назначения"
                                style="h-[35px] bg-[#2196F3] mr-[5px]"
                            />
                        </Box>
                        <Box>
                            <DefaultCheckbox
                                label="Скрывать неактивные"
                                style="flex flex-col"
                            />
                        </Box>
                    </Box>
                    <Box className="flex w-[100%] justify-between">
                        <Box className={'w-[calc(100%-500px)]'}>
                            <ReceptionTableGroup
                                columnDefs={HealingProceduresCol}
                            />
                        </Box>

                        <HealingProcedures />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MainAssignmentSheetView;
