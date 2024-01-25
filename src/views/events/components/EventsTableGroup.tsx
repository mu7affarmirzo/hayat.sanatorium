'use strict';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import { useRef, useState } from 'react';

type propsType = {
    columnDefs?: ColDef[];
    rowData?: any;
    height?: string;
    icons?: any;
};
const EventsTableGroup = (props: propsType) => {
    const gridRef = useRef<AgGridReact>(null);

    return (
        <div className={`${props.height ? props.height : 'h-[15vh]'}  w-full `}>
            <div
                style={{ height: '100%', width: '100%', overflowX: 'hidden' }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    ref={gridRef}
                    rowData={props.rowData}
                    columnDefs={props.columnDefs}
                    groupDisplayType={'groupRows'}
                    icons={props.icons}
                    rowSelection="multiple"
                    // onFirstDataRendered={onFirstDataRendered}
                />
            </div>
        </div>
    );
};
export default EventsTableGroup;
