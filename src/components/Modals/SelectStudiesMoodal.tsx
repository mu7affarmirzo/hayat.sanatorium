import { Box, Button, Grid, IconButton } from '@mui/material';
import { CloseCircleIcon } from 'assets/icons/icons';
import DefaultText from 'components/defaultText/DefaultText';
import SearchInput from 'components/search/SearchInput';
import { useEscapeKey } from 'hooks/useEscapeKey';
import { useCallback } from 'react';
import { SelectStudiesContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';

const SelectStudiesMoodal = () => {
    const appModals = useAppModals();
    const onCloseModal = useCallback(() => {
        appModals?.hide('select_studies');
    }, [appModals]);

    useEscapeKey({
        callback: onCloseModal,
    });

    return (
        <SelectStudiesContainer
            className={
                appModals?.state.select_studies.active &&
                !appModals?.state.select_studies.neverWork
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
                        <DefaultText style="  text-[20px]  font-normal text-[#000] ">
                            Выбрать исследования
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
                        className="max-h-[600px] h-[500px] p-[5px] bg-[#F5F5F5] border overflow-hidden"
                    >
                        <Box className="w-full h-[calc(100%)]  ">
                            <SearchInput placeholder="Искать в таблице" />
                            <Box className="border h-[calc(100%-45px)] w-full mt-[5px] p-[8px] overflow-scroll">
                                <Box className=" w-full mb-[5px]">
                                    <DefaultCheckbox
                                        checkboxStyle={{ padding: '0 5px 0 0' }}
                                        label="TORCH — инфекции"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={12}
                        className="  mt-[15px] flex justify-end "
                    >
                        <Button
                            variant="contained"
                            onClick={() => onCloseModal()}
                        >
                            Добавить
                        </Button>
                        <Button
                            variant="contained"
                            className=" bg-[#EEE] h-[46px] text-[#000]  ml-[10px] "
                            onClick={() => onCloseModal()}
                        >
                            Закрыть
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <div className="cancel_window" onClick={onCloseModal} />
        </SelectStudiesContainer>
    );
};
export default SelectStudiesMoodal;
