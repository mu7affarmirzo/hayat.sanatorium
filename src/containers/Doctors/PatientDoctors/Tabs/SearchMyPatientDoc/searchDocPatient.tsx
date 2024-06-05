import { Grid } from '@mui/material';
import { useSearchDocPatientHook } from './hook';
import { SearchOptionsAccordion } from 'views/patients/SearchPatientTab/components/searchOptionAccordion';
import { SearchActionsSection } from 'views/patients/SearchPatientTab/components/searchActionsSection';
import TableComponent from 'components/CustomTable/table';
import { SearchDocPatientColDef } from './_components/column';

const SearchDocPatientView = () => {
  const {
    OnSubmit,
    handleSearch,
    handleSubmit,
    register,
    numberOfPatient,
    handleClickedRowTable,
    SearchPatientData,
  } = useSearchDocPatientHook();

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
          columnDefs={SearchDocPatientColDef}
          data={SearchPatientData as never}
          tableHeight="h-[70vh]"
          handleClickedTableRow={handleClickedRowTable}
        />
      </Grid>
    </Grid>
  );
};

export default SearchDocPatientView;
