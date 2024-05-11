import { AgGridReact } from 'ag-grid-react';
import { ColDef, RowClickedEvent } from 'ag-grid-community';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { addPatient } from 'features/booked/bookedSlice';
import { useCallback } from 'react';
import './style.css';

type propsType = {
  columnDefs?: ColDef[];
  rowData?: any;
  height?: string;
};

const ReceptionTable = (props: propsType) => {
  const dispatch = useReduxDispatch();
  const handleRowClick = useCallback(
    (event: RowClickedEvent) => {
      console.log(event);
      dispatch(
        addPatient({
          id: event.data.id,
          name: event.data.patient,
        }),
      );
    },
    [dispatch],
  );

  return (
    <div
      className={`${props.height ? props.height : 'h-[15vh]'}  w-full `}
      style={{ height: '400px' }}>
      <div
        style={{ height: '100%', width: '100%' }}
        className="ag-theme-alpine">
        <AgGridReact
          rowSelection="multiple"
          containerStyle={{ fontFamily: "Roboto, Helvetica, Arial, sans-serif" }}
          // onRowClicked={handleRowClick}
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
