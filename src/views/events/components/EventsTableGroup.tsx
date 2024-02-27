import { ColDef, RowClickedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useCallback, useRef } from 'react';

type propsType = {
  columnDefs?: ColDef[];
  rowData?: any;
  height?: string;
  icons?: any;
};

const EventsTableGroup = (props: propsType) => {
  const gridRef = useRef<AgGridReact>(null);

  const handleRowClick = useCallback((event: RowClickedEvent) => {
    console.log(event.data, 'events section');
  }, []);

  return (
    <div className={`${props.height ? props.height : 'h-[15vh]'}  w-full `}>
      <div
        style={{ height: '100%', width: '100%', overflowX: 'hidden' }}
        className="ag-theme-alpine">
        <AgGridReact
          ref={gridRef}
          rowData={props.rowData}
          columnDefs={props.columnDefs}
          groupDisplayType={'groupRows'}
          icons={props.icons}
          rowSelection="multiple"
          onRowClicked={handleRowClick}
        />
      </div>
    </div>
  );
};
export default EventsTableGroup;
