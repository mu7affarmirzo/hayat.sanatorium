import { Grid } from '@mui/material';
import { DocMyPatientsTableContainer } from 'containers/Doctors/PatientDoctors/Tabs/MyPatientsDoc/_components/docMyPatientsTable';
import { SearchActionsSection } from 'views/patients/SearchPatientTab/components/searchActionsSection';
import { SearchOptionsAccordion } from 'views/patients/SearchPatientTab/components/searchOptionAccordion';
import { useSearchDocPatientHook } from './hook';

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
        <DocMyPatientsTableContainer
          rowData={SearchPatientData as never}
          numberOfPatient={numberOfPatient as never}
          handleClickedRowTable={handleClickedRowTable}
        />
      </Grid>
    </Grid>
  );
};

export default SearchDocPatientView;
