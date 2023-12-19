import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import './style.css';

type propsType = {
    columnDefs?: ColDef[];
    rowData?: any;
    height?: string;
};

const ReceptionTable = (props: propsType) => {
    return (
        <div className={`${props.height ? props.height : 'h-[15vh]'}  w-full `}>
            <div
                style={{ height: '100%', width: '100%' }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    rowSelection="multiple"
                    suppressRowClickSelection
                    columnDefs={props?.columnDefs}
                    rowData={props.rowData}
                    enableRangeSelection
                    animateRows
                />
            </div>
        </div>
    );
};

export default ReceptionTable;
