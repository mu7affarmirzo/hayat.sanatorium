import { Grid } from '@mui/material';
import TableComponent from 'components/CustomTable';
import { BookedPatientSearch } from 'components/columnDefs/bookedCol';
import { SearchActionsSection } from './components/searchActionsSection';
import { SearchOptionsAccordion } from './components/searchOptionAccordion';
import { useSearchpatientHook } from './hook';

const SearchPatiant = () => {
  const {
    myPatientData,
    handleSearch,
    numberOfPatient,
    handleSubmit,
    register,
    OnSubmit,
    handleClickedRowTable,
  } = useSearchpatientHook();

  return (
    <Grid container>
      <form onSubmit={handleSubmit(OnSubmit)} className="w-full">
        <SearchOptionsAccordion register={register} />
        <SearchActionsSection
          handleSearch={handleSearch}
          numberOfPatient={numberOfPatient as never}
        />
      </form>
      <Grid
        item
        xs={12}
        md={12}
        className="bg-[#F5F5F5]"
        sx={{ marginBottom: '20px' }}>
        <TableComponent
          columnDefs={BookedPatientSearch}
          data={myPatientData as never}
          tableHeight="h-[70vh]"
          handleClickedTableRow={handleClickedRowTable}
        />
      </Grid>
    </Grid>
  );
};

export default SearchPatiant;
