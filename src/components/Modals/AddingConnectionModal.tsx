import { Box, Button, Grid, IconButton } from '@mui/material';
import { CloseCircleIcon } from 'assets/icons/icons';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import { ConnectionCol } from 'components/columnDefs/ConnectionCol';
import DefaultText from 'components/defaultText/DefaultText';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
import SearchInput from 'components/search/SearchInput';
import { useEscapeKey } from 'hooks/useEscapeKey';
import { useCallback } from 'react';
import { rowData } from 'views/booked/frontPage/FrontPageView';
import { CreatePaymentNowContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';

const AddingConnectionModal = () => {
    const appModals = useAppModals();
    const onCloseModal = useCallback(() => {
        appModals?.hide('createPayment');
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
        <CreatePaymentNowContainer
            className={
                appModals?.state.createPayment.active &&
                !appModals?.state.createPayment.neverWork
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
                            Добавление связи
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
                        className="mt-[10px] bg-[#F5F5F5] p-[4px]"
                    >
                        <DefaultText style={'text-[20px] text-[#000]'}>
                            Профессия
                        </DefaultText>
                        <AutocompleteInput
                            containerStyle="w-[100%] bg-[#fff]"
                            inputStyle="w-[100%]"
                            data={top100Films}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className="mt-[10px] bg-[#F5F5F5] p-[4px]"
                    >
                        <SearchInput placeholder="Искать в таблице" />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className=" bg-[#F5F5F5] p-[4px]"
                    >
                        <ReceptionTable
                            columnDefs={ConnectionCol}
                            rowData={rowData}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className=" px-[20px] py-[10px]  flex justify-end "
                    >
                        <Button
                            variant="contained"
                            className=" bg-[#4CAF50] h-[46px] text-[#fff] text-[14px]  capitalize "
                        >
                            Добавить
                        </Button>
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
        </CreatePaymentNowContainer>
    );
};
export default AddingConnectionModal;
