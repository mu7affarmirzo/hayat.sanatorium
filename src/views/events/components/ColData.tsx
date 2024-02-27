import { ColDef } from 'ag-grid-community';
import { InfoCircle } from 'assets/icons/icons';

export const ColData: ColDef[] = [
  {
    field: 'group',
    rowGroup: true,
    hide: true,
  },
  {
    headerName: '',
    field: '',
    width: 30,
    cellRenderer: (params: any) => {
      console.log(params.data, 'params events ');
    },
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    colId: 'checkbox',
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
    field: 'icon',
    cellRenderer: function clickNextRendererFunc() {
      return <InfoCircle />;
    },
    width: 50,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Событие',
    field: 'event',
    width: 700,
    cellStyle: {
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Пациент',
    field: 'patient',
    width: 250,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата/Время',
    field: 'date',
    width: 160,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Комната',
    field: 'room',
    width: 160,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' end ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата заезда',
    field: 'start_date',
    width: 150,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
  {
    headerName: 'Дата выезда',
    field: 'end_date',
    width: 150,
    cellStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: ' start ',
      border: '.5px solid #e0e0e0',
      paddingLeft: '10px',
    },
  },
];
