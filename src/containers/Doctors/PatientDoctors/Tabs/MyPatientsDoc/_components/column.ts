import { ColDef } from 'ag-grid-community';

export const GetDocPatientsColDef: ColDef[] = [
  {
    colId: 'checkbox',
    field: 'occupied',
    width: 40,
    checkboxSelection: true,
    suppressMenu: true,
    headerCheckboxSelection: true,
    cellStyle: {
      padding: '0 ',
    },
  },
  {
    headerName: '',
    field: 'cito',
    width: 110,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: '№',
    field: 'no',
    width: 120,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Пациент',
    field: 'name',
    width: 250,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
      color: '#0B79D0',
    },
  },
  {
    headerName: 'Возраст',
    field: 'age',
    width: 100,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Комната',
    field: 'room',
    width: 200,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Основной диагноз',
    field: 'diagnosis',
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
    headerName: 'Дата приезда',
    field: 'start_date',
    width: 140,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата отъезда',
    field: 'end_date',
    width: 140,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: '',
    field: '',
    width: 165,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
];
