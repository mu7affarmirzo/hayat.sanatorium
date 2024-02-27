import { Grid, Typography } from '@mui/material';
import { VuesaxLinear } from 'assets/icons/icons';
import { BookedPatiant } from 'components/ColumnDefs/bookedCol';
import DefaultButton from 'components/DeafultButton/DefaultButton';
import ReceptionTable from 'components/ReceptionTable';
import SearchInput from 'components/search/SearchInput';
import useMyPatientTabHook from './hook';
import TableComponent from 'components/Table/table';

const MyPatientTab = () => {
  const {
    myPatientData,
    NumberOfPatient,
    handleSearch,
    handleClickedRowTable,
  } = useMyPatientTabHook();

  return (
    <Grid container>
      <Grid
        className="flex justify-between items-center  my-[10px] "
        item
        xs={12}
        md={12}>
        <Grid item xs={12} md={10.5} className=" bg-[#F5F5F5] ">
          <SearchInput placeholder="Искать в таблице" onChange={handleSearch} />
        </Grid>
        <DefaultButton
          title=" Экспорт в Excel"
          classStyle="bg-[#2d373f] h-[40px] text-[#fff] text-sm capitalize mr-[10px]"
          icon={<VuesaxLinear />}
        />
      </Grid>
      <Grid item xs={12} md={12} className=" bg-[#F5F5F5]">
        <TableComponent
          columnDefs={BookedPatiant}
          data={myPatientData as never}
          tableHeight="h-[810px]"
          handleClickedTableRow={handleClickedRowTable}
        />
      </Grid>
      <Grid>
        <Typography>
          Лечащий врач, количество пациентов: {NumberOfPatient}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MyPatientTab;
