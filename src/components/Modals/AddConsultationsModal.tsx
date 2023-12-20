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
import {
    AddConsultationContainer,
    CreatePaymentNowContainer,
} from './Modals.styles';
import { useAppModals } from './ModalsProvider';

const AddConsultationsModal = () => {
    const appModals = useAppModals();
    const onCloseModal = useCallback(() => {
        appModals?.hide('add_consultations');
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
        <AddConsultationContainer
            className={
                appModals?.state.add_consultations.active &&
                !appModals?.state.add_consultations.neverWork
                    ? 'active'
                    : 'none '
            }
        >
            <Box className="container bg-[#fff]  ">
                <Grid container className="">
                    <Grid
                        item
                        xs={12}
                        md={12}
                        className="  flex justify-between items-center  "
                    >
                        <DefaultText style="  text-[20px]  font-normal text-[#000] ">
                            Добавление связи
                        </DefaultText>
                    </Grid>
                </Grid>
            </Box>

            <div className="cancel_window" onClick={onCloseModal} />
        </AddConsultationContainer>
    );
};
export default AddConsultationsModal;
