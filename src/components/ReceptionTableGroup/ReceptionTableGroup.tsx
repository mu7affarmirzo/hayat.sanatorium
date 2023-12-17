import { AgGridReact } from 'ag-grid-react';
import { ColDef, FirstDataRenderedEvent } from 'ag-grid-community';
import './style.css';
import { useCallback, useRef, useState } from 'react';
const models = [
    'Mercedes-AMG C63',
    'BMW M2',
    'Audi TT Roadster',
    'Mazda MX-5',
    'BMW M3',
    'Porsche 718 Boxster',
    'Porsche 718 Cayman',
];
const colors = ['Red', 'Black', 'Green', 'White', 'Blue'];
const countries = ['UK', 'Spain', 'France', 'Ireland', 'USA'];
type propsType = {
    columnDefs?: ColDef[];
    rowData?: any;
    height?: string;
};
export function getData(): any[] {
    const rowData = [];
    for (let i = 0; i < 200; i++) {
        const item = {
            id: i + 1,
            group: 'Group ' + (Math.floor(i / 20) + 1),
            model: models[Math.floor(Math.random() * models.length)],
            color: colors[Math.floor(Math.random() * colors.length)],
            country: countries[Math.floor(Math.random() * countries.length)],
            year: 2018 - Math.floor(Math.random() * 20),
            price: 20000 + Math.floor(Math.random() * 100) * 100,
        };
        rowData.push(item);
    }
    return rowData;
}
const ReceptionTableGroup = (props: propsType) => {
    const onFirstDataRendered = useCallback(
        (params: FirstDataRenderedEvent) => {
            params.api.expandAll();
        },
        []
    );
    const gridRef = useRef<AgGridReact>(null);
    const [rowData, setRowData] = useState<any[]>(getData());
    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        { field: 'group', rowGroup: true, hide: true },
        { field: 'id', pinned: 'left', width: 70 },
        { field: 'model', width: 180 },
        { field: 'color', width: 100 },
        {
            field: 'price',
            valueFormatter: "'$' + value.toLocaleString()",
            width: 100,
        },
        { field: 'year', width: 100 },
        { field: 'country', width: 120 },
    ]);

    return (
        <div className={`${props.height ? props.height : 'h-[15vh]'}  w-full `}>
            <div
                style={{ height: '100%', width: '100%' }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    groupDisplayType={'groupRows'}
                    onFirstDataRendered={onFirstDataRendered}
                />
            </div>
        </div>
    );
};

export default ReceptionTableGroup;
