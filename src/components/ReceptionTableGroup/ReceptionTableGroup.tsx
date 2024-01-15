'use strict';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import { useRef, useState } from 'react';
import { rowData2 } from './data';
import './style.css';
import { rowData } from 'views/booked/frontPage/FrontPageView';
type propsType = {
    columnDefs?: ColDef[];
    rowData?: any;
    height?: string;
};
const ReceptionTableGroup = (props: propsType) => {
    const gridRef = useRef<AgGridReact>(null);

    return (
        <div className={`${props.height ? props.height : 'h-[15vh]'}  w-full `}>
            <div
                style={{ height: '100%', width: '100%' }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData2}
                    columnDefs={props.columnDefs}
                    groupDisplayType={'groupRows'}

                    // onFirstDataRendered={onFirstDataRendered}
                />
            </div>
        </div>
    );
};
export default ReceptionTableGroup;
