import { ColDef } from 'ag-grid-community';

export const MedicationColumnDefs: ColDef[] = [
  {
    headerName: '',
    field: '',
    width: 40,
    checkboxSelection: true,
    suppressMenu: true,
    cellStyle: {
      padding: '0 ',
    },
  },
  {
    headerName: 'MHH',
    field: '',
    width: 130,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
    },
  },
  {
    headerName: 'Лат. названия',
    field: 'name',
    width: 160,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
    },
  },
  {
    headerName: 'Полное название',
    field: 'name',
    width: 350,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
    },
  },
  {
    headerName: 'Форма выпуска',
    field: '',
    width: 160,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
    },
  },
  {
    headerName: 'Кол—во в аптеке',
    field: '',
    width: 165,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
    },
  },
  {
    headerName: 'Ед. измерения',
    field: '',
    width: 160,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
    },
  },
  {
    headerName: 'Ед. отпуска',
    field: '',
    width: 160,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
    },
  },
  {
    headerName: 'Срок годности',
    field: 'expire_date',
    width: 160,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
    },
  },
];
