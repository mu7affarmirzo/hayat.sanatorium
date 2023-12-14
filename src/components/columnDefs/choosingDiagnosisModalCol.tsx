import { ColDef } from 'ag-grid-community';

export const ChoosingDiagnosisModalCol = [
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
        children: [{ field: 'year' }, { field: 'date' }, { field: 'sport' }],
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
];
