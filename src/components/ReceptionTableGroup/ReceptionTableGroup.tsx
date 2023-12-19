'use strict';
import { ColDef } from 'ag-grid-community';

import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import { useRef, useState } from 'react';

import { CloseIcon } from 'assets/icons/icons';
import { getData, rowData2 } from './data';
import './style.css';
function MyRoomType(params: any) {
    return (
        <div className="flex  items-center justify-center  w-[100%] h-[100%] cursor-pointer  bordert ">
            <div className="w-[5px] h-[15px]  flex justify-center items-center bg-[#4CAF50] mx-[1.5px]"></div>
            <div className="w-[5px] h-[15px]  flex justify-center items-center bg-[#4CAF50] mx-[1.5px]"></div>
            <div className="w-[5px] h-[15px]  flex justify-center items-center bg-[#4CAF50] mx-[1.5px]"></div>
            <div className="w-[5px] h-[15px]  flex justify-center items-center bg-[#4CAF50] mx-[1.5px]"></div>
        </div>
    );
}
const ReceptionTableGroup = () => {
    const gridRef = useRef<AgGridReact>(null);

    const [rowData, setRowData] = useState<any[]>(getData());
    const [columnDefs, setColumnDefs] = useState<ColDef[]>([
        { field: 'group', rowGroup: true, hide: true },
        {
            field: '',
            width: 30,
        },
        {
            field: '',
            width: 70,
            cellRenderer: MyRoomType,
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
                border: '.5px solid #e0e0e0',
            },
        },
        {
            headerName: 'Назначение',
            field: 'model',
            width: 500,
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
                border: '.5px solid #e0e0e0',
            },
        },
        {
            headerName: 'К врачу',
            field: 'color',
            width: 130,
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
                border: '.5px solid #e0e0e0',
            },
        },
        {
            headerName: 'Cito?',
            field: 'color',
            width: 100,
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
                border: '.5px solid #e0e0e0',
            },
        },
        {
            headerName: 'Назначил',
            field: 'price',
            valueFormatter: "'$' + value.toLocaleString()",
            width: 130,
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
                border: '.5px solid #e0e0e0',
            },
        },
        {
            headerName: 'Дата',
            field: 'year',
            width: 90,
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
                border: '.5px solid #e0e0e0',
            },
        },
        {
            headerName: 'Способ оплаты',
            field: 'country',
            width: 150,
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
                border: '.5px solid #e0e0e0',
            },
        },
        {
            headerName: 'Цена',
            field: 'country',
            width: 110,
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
                border: '.5px solid #e0e0e0',
            },
        },
        {
            headerName: 'Комментарий (цель исследования/',
            field: 'country',
            width: 250,
            cellStyle: {
                display: 'flex',
                alignItems: 'center',
                border: '.5px solid #e0e0e0',
            },
        },
    ]);

    // const onFirstDataRendered = useCallback(
    //     (params: FirstDataRenderedEvent) => {
    //         params.api.expandAll();
    //     },
    //     []
    // );

    return (
        <div className={` h-[300px] w-full `}>
            <div
                style={{ height: '100%', width: '100%' }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData2}
                    columnDefs={columnDefs}
                    groupDisplayType={'groupRows'}
                    // onFirstDataRendered={onFirstDataRendered}
                />
            </div>
        </div>
    );
};
export default ReceptionTableGroup;
