import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';

import './styles.css';

type propsType = {
    columnDefs?: ColDef[];
    rowData?: any;
    height?: string;
    onGridReady?: any;
};

const AgGridChiled = (props: propsType) => {
    return (
        <div className={`${props.height ? props.height : 'h-[30vh]'}  w-full `}>
            <div
                style={{ width: '100%', height: '100%' }}
                className={'ag-theme-quartz-dark'}
            >
                <AgGridReact
                    rowData={props.rowData}
                    columnDefs={props.columnDefs}
                    sideBar={'columns'}
                    onGridReady={props.onGridReady}
                    enableRangeSelection
                    animateRows
                    suppressRowClickSelection
                    rowSelection="multiple"
                />
            </div>
        </div>
    );
};

export default AgGridChiled;
