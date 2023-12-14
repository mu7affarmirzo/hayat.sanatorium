import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { CloseCircleIcon } from 'assets/icons/icons';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import AgGridChiled from 'components/agGridChiled/AgGridChiled';
import DefaultText from 'components/defaultText/DefaultText';
import SearchInput from 'components/search/SearchInput';
import { useEscapeKey } from 'hooks/useEscapeKey';
import { useCallback, useMemo, useState } from 'react';
import { CreatePaymentNowContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';
import ReceptionTable from 'components/receptionTable/ReceptionTable';

const ChoosingDiagnosisModal = () => {
    const appModals = useAppModals();
    const onCloseModal = useCallback(() => {
        appModals?.hide('choosingDiagnosis');
    }, [appModals]);

    useEscapeKey({
        callback: onCloseModal,
    });

    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState<(ColDef | ColGroupDef)[]>([
        {
            headerName: 'Athlete',
            children: [
                { field: 'athlete', minWidth: 170, rowGroup: true },
                { field: 'age', rowGroup: true },
                { field: 'country' },
            ],
        },
        {
            headerName: 'Event',
            children: [
                { field: 'year' },
                { field: 'date' },
                { field: 'sport' },
            ],
        },
        {
            headerName: 'Medals',
            children: [
                { field: 'gold' },
                { field: 'silver' },
                { field: 'bronze' },
                { field: 'total' },
            ],
        },
    ]);

    const onGridReady = useCallback(() => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);
    return (
        <CreatePaymentNowContainer
            className={
                appModals?.state.choosingDiagnosis.active &&
                !appModals?.state.choosingDiagnosis.neverWork
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
                        <DefaultText style="  text-[px]  font-normal text-[#000] ">
                            Выбор диагноза
                        </DefaultText>
                        <IconButton
                            className="border  w-[35px] h-[35px] border-[#000] p-[5px] "
                            onClick={() => onCloseModal()}
                        >
                            <CloseCircleIcon />
                        </IconButton>
                    </Grid>
                    <Box className="w-[100%] flex justify-between bg-[#F5F5F5] border border-[rgba(0, 0, 0, 0.23)]">
                        <Box className="w-[60%]">
                            <Grid
                                item
                                xs={12}
                                md={12}
                                className="mt-[10px]  p-[4px]"
                            >
                                <DefaultText style={'text-[20px] text-[#000]'}>
                                    Диагнозы:
                                </DefaultText>
                                <SearchInput placeholder="Искать в таблице" />
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                md={12}
                                className=" bg-[#F5F5F5] p-[4px]"
                            >
                                <ReceptionTable
                                    columnDefs={columnDefs}
                                    rowData={rowData}
                                    height="h-[50vh]"
                                    onGridReady={onGridReady}
                                />
                            </Grid>
                        </Box>
                        <Box className="w-[40%]  flex flex-col pt-[14px]  ">
                            <DefaultText style={'text-[20px] text-[#000] '}>
                                Рекомендованные назначения
                            </DefaultText>

                            <Grid item xs={12} md={12}>
                                <SearchInput placeholder="Искать в таблице" />
                                <Box className="  border h-[75%] bg-[#fff] "></Box>
                                <Box className="flex mt-[5px]">
                                    <Typography
                                        className={'text-[14px] text-[#000] '}
                                    >
                                        Стоимость выбранного:
                                    </Typography>
                                    <Typography
                                        className={'text-[14px] text-[#000] '}
                                    >
                                        0
                                    </Typography>
                                </Box>
                            </Grid>
                        </Box>
                    </Box>
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
export default ChoosingDiagnosisModal;
