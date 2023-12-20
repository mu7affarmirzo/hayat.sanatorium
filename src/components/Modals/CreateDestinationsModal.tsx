import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { CloseCircleIcon } from 'assets/icons/icons';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import SearchInput from 'components/search/SearchInput';
import { useEscapeKey } from 'hooks/useEscapeKey';
import { useCallback } from 'react';
import { CreatePaymentNowContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';

const CreateDestinationsModal = () => {
    const appModals = useAppModals();
    const onCloseModal = useCallback(() => {
        appModals?.hide('create_destinations');
    }, [appModals]);

    useEscapeKey({
        callback: onCloseModal,
    });

    const addSelectStudies = () => {
        onCloseModal();
        appModals?.show('select_studies');
    };

    return (
        <CreatePaymentNowContainer
            className={
                appModals?.state.create_destinations.active &&
                !appModals?.state.create_destinations.neverWork
                    ? 'active'
                    : 'none '
            }
        >
            <Box className="container bg-[#fff]  ">
                <Grid container className="p-[20px]">
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className="  flex justify-between items-center  "
                    >
                        <DefaultText style=" text-[20px]  font-normal text-[#000] ">
                            Создание назначений
                        </DefaultText>
                        <IconButton
                            className="border  w-[35px] h-[35px] border-[#000] p-[5px] "
                            onClick={() => onCloseModal()}
                        >
                            <CloseCircleIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} md={12} className="mt-[10px] ">
                        <DefaultButton
                            style="bg-[#4CAF50] "
                            title="Добавить"
                            onClick={addSelectStudies}
                        />
                        <DefaultButton
                            title="Удалить выбранные"
                            style="bg-[#2196F3] ml-[10px]"
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={12}
                        className="mt-[10px] max-h-[600px] h-[400px]"
                    >
                        <DefaultText style={'text-[20px] text-[#000]'}>
                            Выбрать исследования
                        </DefaultText>

                        <Box className="w-full h-[calc(100%-70px)] border mt-[10px] ">
                            <SearchInput placeholder="Искать в таблице" />
                            <Box className=" border flex w-[100%]">
                                <DefaultCheckbox
                                    checkboxStyle={{
                                        padding: '0 3px',
                                        bacgroundColor: '#fff',
                                    }}
                                />
                                <Box className=" bg-[#F8ED8D]  py-[3px] h-full w-[calc(100%-30px)]">
                                    <Typography className="text-[14px] text-[#000] ml-[5px]">
                                        Исследование
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={12} className="  flex justify-end ">
                        <Button
                            variant="contained"
                            className=" bg-[#4CAF50] h-[46px] text-[#fff] text-[14px]  capitalize "
                            onClick={() => onCloseModal()}
                        >
                            Создать назначения
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <div className="cancel_window" onClick={onCloseModal} />
        </CreatePaymentNowContainer>
    );
};
export default CreateDestinationsModal;
