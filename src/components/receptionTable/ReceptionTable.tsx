import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import './style.css';

type propsType = {
    columnDefs?: ColDef[];
    rowData?: any;
    height?: string;
};

const ReceptionTable = (props: propsType) => {
    let DefaultHeight = `h-[${props?.rowData?.length * 50 + 'px'}]`;

    return (
        <div
            className={`${
                props?.rowData?.length > 0 ? DefaultHeight : 'h-[100px]'
            }  w-full  max-h-[500px]`}
        >
            <div
                style={{ height: '100%', width: '100%' }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    rowSelection="multiple"
                    suppressRowClickSelection
                    columnDefs={props?.columnDefs}
                    rowData={props?.rowData}
                    enableRangeSelection
                    animateRows
                />
            </div>
        </div>
    );
};

export default ReceptionTable;
