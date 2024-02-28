import { Box, Grid } from '@mui/material';
import { MyPatientsGrupCol } from 'components/columnDefs/MyPatientsGrupCol';
import ReceptionTableGroup from 'components/ReceptionTableGroup/receptionTableGroup';
import useDispatchingPatientHook from './hook';
import { DispatchMyPatientSearchOptions } from './components/searchOptionsDispatchMyPatients';
import { DispatchActionsSection } from './components/dispatchActionsSection';

const MyPatientsView = () => {
  const { data, handleRowClick, register, OnSubmit, handleSubmit } =
    useDispatchingPatientHook();

  return (
    <Grid
      className=" pt-[10px] flex overflow-hidden h-[calc(100vh-150px)] "
      container>
      <Box className="w-full overflow-scroll h-full ">
        <form onSubmit={handleSubmit(OnSubmit)}>
          <DispatchMyPatientSearchOptions register={register} />
          <DispatchActionsSection />
        </form>
        <ReceptionTableGroup
          columnDefs={MyPatientsGrupCol}
          height="h-[65vh]"
          rowData={data}
          handleClickItem={handleRowClick}
        />
      </Box>
    </Grid>
  );
};

export default MyPatientsView;
