import { ColDef } from 'ag-grid-community';
import { FileIconCol } from 'assets/icons/icons';

export const ColData: ColDef[] = [
    {
        headerName: '',
        field: '',
        width: 30,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Сост.',
        field: 'icon',
        width: 80,
        cellRenderer: function clickNextRendererFunc() {
            return <FileIconCol />;
        },
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' center ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Диагноз',
        field: 'name',
        width: 550,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Тип',
        field: 'type',
        width: 200,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' start ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Впервые выявлен?',
        field: 'identified',
        width: 200,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' center ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
    {
        headerName: 'Прочее',
        field: 'other',
        width: 150,
        cellStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' end ',
            border: '.5px solid #e0e0e0',
            paddingLeft: '10px',
        },
    },
];

export const rowData = [
    {
        name: '120-125: ИБС. Стабильная стенокардия напряжения ФК III. Гипертоническаяболезнь III, АГ 1. Риск IV. ОНМК (2011й)',
        type: 'Основной',
        identified: 'нет',
    },
    {
        name: '120-125: ИБС. Стабильная стенокардия напряжения ФК III. Гипертоническаяболезнь III, АГ 1. Риск IV. ОНМК (2011й)',
        type: 'Основной',
        identified: 'нет',
    },
    {
        name: '120-125: ИБС. Стабильная стенокардия напряжения ФК III. Гипертоническаяболезнь III, АГ 1. Риск IV. ОНМК (2011й)',
        type: 'Основной',
        identified: 'нет',
    },
];
