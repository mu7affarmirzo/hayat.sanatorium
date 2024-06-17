import { Grid } from '@mui/material';
import { VuesaxLinear } from 'assets/icons/icons';
import SearchInput from 'components/SearchField/searchInput';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { DocMyPatientsTableContainer } from 'containers/Doctors/PatientDoctors/Tabs/MyPatientsDoc/_components/docMyPatientsTable';
import { useMyPatientsDocHook } from './hook';

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
          title="Экспорт в Excel"
          classStyle="bg-[#2d373f] h-[40px] text-[#fff] text-sm capitalize mr-[10px]"
          icon={<VuesaxLinear />}
        />
      </Grid>
      <Grid item xs={12} md={12} className=" bg-[#F5F5F5]">
        <DocMyPatientsTableContainer
          rowData={DocPatientsData as never}
          numberOfPatient={NumberOfPatient as never}
          handleClickedRowTable={handleClickedRowTable}
        />
      </Grid>
    </Grid>
  );
};

export default MyPatientsDocView;
