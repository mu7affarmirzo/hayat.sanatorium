import { Grid } from '@mui/material';
import { BookedCol } from 'components/ColumnDefs/bookedCol';
import SearchInput from 'components/search/SearchInput';
import React from 'react';
import useDoctorOnDutyHook from './hook';
import DoctorsTable from 'components/DoctorsTable/DoctorsTable';

const DoctorOnDuty = () => {
    const { data } = useDoctorOnDutyHook();
    const DoctorsTableMemoized = React.memo(DoctorsTable);
    return (
        <Grid className="" container>
            <Grid item xs={12} md={12} className="mt-[10px] bg-[#F5F5F5]">
                <SearchInput />
            </Grid>
            <Grid item xs={12} md={12} className=" bg-[#F5F5F5] mt-2">
                <DoctorsTableMemoized
                    columnDefs={BookedCol}
                    rowData={data}
                    height="h-[70vh]"
                />
            </Grid>
        </Grid>
    );
};

export default DoctorOnDuty;
