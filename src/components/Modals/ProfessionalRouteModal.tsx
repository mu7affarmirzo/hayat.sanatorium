import { Box, Button, Grid, IconButton } from '@mui/material';
import { CloseCircleIcon } from 'assets/icons/icons';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import { ConnectionCol } from 'components/columnDefs/ConnectionCol';
import DefaultText from 'components/defaultText/DefaultText';
import ReceptionTable from 'components/receptionTable/ReceptionTable';

import { useEscapeKey } from 'hooks/useEscapeKey';
import { useCallback } from 'react';
import { rowData } from 'views/booked/frontPage/FrontPageView';
import { CallMeLaterModalContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';
import DefaulCheckbox from 'components/checkbox/DefaultCheckbox';

const ProfessionalRouteModal = () => {
    const appModals = useAppModals();
    const onCloseModal = useCallback(() => {
        appModals?.hide('professionalRoute');
    }, [appModals]);

    useEscapeKey({
        callback: onCloseModal,
    });
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ];

    return (
        <CallMeLaterModalContainer
            className={
                appModals?.state.professionalRoute.active &&
                !appModals?.state.professionalRoute.neverWork
                    ? 'active'
                    : 'none'
            }
        >
            <Box className="container bg-[#fff]">
                <Grid container className="p-[20px]">
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className="  flex justify-between items-center "
                    >
                        <DefaultText style="  text-[20px]  font-normal text-[#000] ">
                            Создание профмаршрута
                        </DefaultText>
                        <IconButton
                            className="border  w-[35px] h-[35px] border-[#000] p-[5px] "
                            onClick={() => onCloseModal()}
                        >
                            <CloseCircleIcon />
                        </IconButton>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className="mt-[10px] bg-[#F5F5F5] p-[4px] flex items-center justify-between"
                    >
                        <DefaultText style={'text-[16px] text-[#8d8c8c]'}>
                            Программа профосмотра
                        </DefaultText>
                        <AutocompleteInput
                            containerStyle="w-[80%] bg-[#fff]"
                            inputStyle="w-[100%]"
                            data={top100Films}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={12}
                        className=" bg-[#F5F5F5] p-[4px] flex"
                    >
                        <Box className=" bg-[#F5F5F5] p-[4px] w-[40%] flex flex-col gap-1 items-center overflow-hidden">
                            <DefaultText>Факторы</DefaultText>
                            <Box className="flex flex-col items-start justify-start max-h-[400px] h-[400px] overflow-scroll w-[100%]">
                                <Box className="flex bg-[#64B6F7] w-full border items-center z-0">
                                    <Box className="w-[30px] h-[30px]"></Box>
                                    <Box className=" border-l-[1px] border-r-[1px] border-[#605e5e] w-[30px] h-[30px] flex justify-center items-center">
                                        <DefaulCheckbox style="z-[100]" />
                                    </Box>
                                    <Box className=" w-[20%] ">
                                        <DefaultText
                                            style={
                                                'text-[14px] text-[#000] ml-[10px]'
                                            }
                                        >
                                            Код
                                        </DefaultText>
                                    </Box>
                                    <Box className="border-l-[1px] border-[#605e5e]  w-[25%]">
                                        <DefaultText
                                            style={
                                                'text-[14px] text-[#000] ml-[10px]'
                                            }
                                        >
                                            Название
                                        </DefaultText>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className=" bg-[#F5F5F5] p-[4px] w-[60%] flex flex-col gap-1 items-center overflow-hidden ">
                            <DefaultText>Назначения</DefaultText>
                            <Box className="flex flex-col items-start justify-start max-h-[400px] h-[400px] overflow-scroll w-[100%]">
                                <Box className="flex bg-[#64B6F7] w-full border items-center z-0">
                                    <Box className="w-[30px] h-[30px]"></Box>
                                    <Box className=" border-l-[1px] border-r-[1px] border-[#605e5e] w-[30px] h-[30px] flex justify-center items-center">
                                        <DefaulCheckbox style="z-[100]" />
                                    </Box>
                                    <Box className="w-[20%]">
                                        <DefaultText
                                            style={
                                                'text-[14px] text-[#000] ml-[10px]'
                                            }
                                        >
                                            Название
                                        </DefaultText>
                                    </Box>
                                    <Box className="border-l-[1px] border-[#605e5e] w-[25%] ">
                                        <DefaultText
                                            style={
                                                'text-[14px] text-[#000] ml-[10px]'
                                            }
                                        >
                                            Услуга
                                        </DefaultText>
                                    </Box>
                                    <Box className="border-l-[1px] border-[#605e5e] w-[25%]">
                                        <DefaultText
                                            style={
                                                'text-[14px] text-[#000] ml-[10px]'
                                            }
                                        >
                                            Обязательно
                                        </DefaultText>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className=" px-[20px] py-[10px]  flex justify-end "
                    >
                        <Button variant="contained">OK</Button>
                        <Button
                            onClick={() => onCloseModal()}
                            variant="contained"
                            className=" bg-[#F5F5F5] h-[46px] text-[#000] text-[14px]  capitalize  ml-[20px]"
                        >
                            Отменить
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <div className="cancel_window" onClick={onCloseModal} />
        </CallMeLaterModalContainer>
    );
};
export default ProfessionalRouteModal;
