import { Grid } from '@mui/material';
import { BookedPatientSearch } from 'components/ColumnDefs/bookedCol';
import ReceptionTable from 'components/receptionTable/ReceptionTable';

import { useSearchpatientHook } from './hook';
import { SearchOptionsAccordion } from './components/searchOptionAccordion';
import { SearchActionsSection } from './components/searchActionsSection';

const SearchPatiant = () => {
  const {
    myPatientData,
    handleSearch,
    NumberOfPatient,
    handleSubmit,
    register,
    onSubmit,
  } = useSearchpatientHook();

  return (
    <Grid container>
      <SearchOptionsAccordion
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />

      <SearchActionsSection
        handleSearch={handleSearch}
        numberOfPatient={NumberOfPatient as never}
      />

      <Grid
        item
        xs={12}
        md={12}
        className="bg-[#F5F5F5]"
        sx={{ marginBottom: '20px' }}>
        <ReceptionTable
          columnDefs={BookedPatientSearch}
          rowData={myPatientData}
          height="h-[70vh]"
        />
      </Grid>
    </Grid>
  );
};

export default SearchPatiant;
