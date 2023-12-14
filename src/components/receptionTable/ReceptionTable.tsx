import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import './style.css';

type propsType = {
    columnDefs?: ColDef[];
    rowData?: any;
    height?: string;
    onGridReady?: any;
};
export interface IOlympicData {
    athlete: string;
    age: number;
    country: string;
    year: number;
    date: string;
    sport: string;
    gold: number;
    silver: number;
    bronze: number;
    total: number;
}
const ReceptionTable = (props: propsType) => {
    // let DefaultHeight = `h-[${props?.rowData?.length * 50 + 'px'}]`;
    // console.log('DefaultHeight', DefaultHeight);

    return (
        <div className={`${props.height ? props.height : 'h-[30vh]'}  w-full `}>
            <div
                style={{ height: '100%', width: '100%' }}
                className="ag-theme-alpine"
            >
                <AgGridReact<IOlympicData>
                    rowData={props.rowData}
                    columnDefs={props.columnDefs}
                    sideBar={'columns'}
                    onGridReady={props.onGridReady}
                />
            </div>
        </div>
    );
};

export default ReceptionTable;
