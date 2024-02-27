import { AgGridReact } from 'ag-grid-react';
import { ColDef, RowClickedEvent } from 'ag-grid-community';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback } from 'react';
import './doctorsStyle.css';
import { addDoctorsPatient } from 'features/doctorsPatient/patientDoctorsSlice';

type propsType = {
    columnDefs?: ColDef[];
    rowData?: any;
    height?: string;
};

const DoctorsTable = (props: propsType) => {
    const dispatch = useReduxDispatch();
    const handleRowClick = useCallback(
        (event: RowClickedEvent) => {
            dispatch(
                addDoctorsPatient({
                    id: event.data.id,
                    name: event.data.patient,
                })
            );
        },
        [dispatch]
    );

    return (
        <div className={`${props.height ? props.height : 'h-[15vh]'}  w-full `}>
            <div
                style={{ height: '100%', width: '100%' }}
                className="ag-theme-alpine"
            >
                <AgGridReact
                    rowSelection="multiple"
                    onRowClicked={handleRowClick}
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

export default DoctorsTable;
