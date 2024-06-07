import { Grid, Typography } from '@mui/material';
import { VuesaxLinear } from 'assets/icons/icons';
import TableComponent from 'components/CustomTable/table';
import SearchInput from 'components/SearchField/searchInput';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { useMyPatientsDocHook } from './hook';
import { GetDocPatientsColDef } from './_components/column';

const MyPatientsDocView = () => {
  const {
    DocPatientsData,
    NumberOfPatient,
    handleClickedRowTable,
    handleSearch,
  } = useMyPatientsDocHook();

  return (
    <Grid container>
      <Grid
        className="flex justify-between items-center gap-[10px] my-[10px] "
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
          columnDefs={GetDocPatientsColDef}
          data={DocPatientsData as never}
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

export default MyPatientsDocView;
