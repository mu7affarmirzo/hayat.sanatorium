import { Box, Grid, Typography } from '@mui/material';
import { CloseIcon, SearchIcon, VuesaxLinear } from 'assets/icons/icons';
import CustomizedAccordions from 'components/CustomizedAccordions';
import AutocompleteInput from 'components/AutoCompleteInput/AutocompleteInput';
import DefaultCheckbox from 'components/Checkbox/DefaultCheckbox';
import { BookedPatientSearch } from 'components/ColumnDefs/bookedCol';
import DefaultButton from 'components/DeafultButton/DefaultButton';
import DefaultInput from 'components/defaultInput/DefaultInput';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
import SearchInput from 'components/search/SearchInput';
import { FC } from 'react';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { IFormInput, useSearchpatientHook } from './hook';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

interface Props {
  handleSubmit: UseFormHandleSubmit<IFormInput, any>;
  onSubmit: SubmitHandler<IFormInput>;
  register: UseFormRegister<IFormInput>;
}

const TopAccordionBox: FC<Props> = ({ handleSubmit, onSubmit, register }) => {
  return (
    <CustomizedAccordions
      title="Параметры поиска:"
      childrenStyle={{ background: '#F5F5F5' }}>
      <Grid item xs={12} md={12} className="bg-[#F5F5F5]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex justify-between items-center gap-[10px] ">
          <DefaultInput
            placeholder="ФИО пациента"
            inputType={'name'}
            register={register}
          />
          <DefaultInput
            placeholder="№ Истории"
            inputType={'historyIB'}
            register={register}
          />
          <DefaultInput
            placeholder="Тип карты"
            inputType={'cardType'}
            register={register}
          />
        </form>
        <Grid
          className="bg-[#F5F5F5] flex items-center mt-4 gap-[40px]"
          item
          xs={12}
          md={12}>
          <Grid className="flex">
            <DefaultCheckbox label="Искать в архиве" />
            <DefaultCheckbox label="Искать в пациентах моих подчинённых" />
          </Grid>
          <Grid className="flex gap-[40px]">
            <Grid className="flex items-center gap-[10px]">
              <Typography>Был в учреждении с:</Typography>
              <AutocompleteInput
                data={top100Films}
                containerStyle={'flex-row items-center '}
                inputStyle="w-[150px]"
              />
            </Grid>
            <Grid className="flex items-center gap-[10px]">
              <Typography>по:</Typography>
              <AutocompleteInput
                data={top100Films}
                containerStyle={'flex-row items-center '}
                inputStyle="w-[150px]"
              />
            </Grid>
            <Grid className="flex items-center gap-[10px]">
              <Typography>Был на приёме:</Typography>
              <AutocompleteInput
                data={top100Films}
                containerStyle={'flex-row items-center '}
                inputStyle="w-[150px]"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CustomizedAccordions>
  );
};

const BottomAccordionBox = () => {
  return (
    <CustomizedAccordions
      title="Расширенные параметры поиска"
      childrenStyle={{ background: '#F5F5F5' }}>
      <Typography>Somthing</Typography>
    </CustomizedAccordions>
  );
};

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
      <TopAccordionBox
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
      {/* <BottomAccordionBox /> */}
      <Grid
        item
        xs={12}
        md={12}
        className="flex items-center justify-between my-2">
        <Grid item xs={12} md={8} className=" flex items-center gap-[30px]">
          <Typography className="text-[#8d8c8c] ">
            Найдено записей: {NumberOfPatient}
          </Typography>
          <Box className="w-[70%]">
            <SearchInput
              placeholder="Искать в таблице"
              onChange={handleSearch}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} className="flex justify-between">
          <DefaultButton title="Выбор колонок" />
          <DefaultButton title="Ехсеl" icon={<VuesaxLinear />} />
          <DefaultButton title="Поиск" icon={<SearchIcon stroke="white" />} />
          <DefaultButton
            title="Очистить фильтр"
            icon={<CloseIcon stroke="white" />}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        className="bg-[#F5F5F5]"
        sx={{ marginBottom: '20px' }}>
        <ReceptionTable
          columnDefs={BookedPatientSearch}
          rowData={myPatientData}
          height="h-[65vh]"
        />
      </Grid>
    </Grid>
  );
};

export default SearchPatiant;
