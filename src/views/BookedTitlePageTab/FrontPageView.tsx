/* eslint-disable react/style-prop-object */
import React, { Suspense } from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { ArrowDropSownIcon } from 'assets/icons/icons';
import { useAppModals } from 'components/Modals';
import { PhonePushColDefs } from 'components/columnDefs/phonePush';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import FrontFooter from 'components/frontFooter/FrontFooter';
import DocumentationForm from './components/DocumentationForm';
import HomeAddressForm from './components/HomeAddressForm';
import HospitalStayForm from './components/HospitalStayForm';
import PhonePushForm from './components/PhonePushForm';
import TravelPackageForm from './components/TravelPackageForm';
import RadioForm from 'components/RadioForm';
import DiagnostikaItem from '../../components/DiagnostikaItem';
import DefaulCheckbox from 'components/checkbox/DefaultCheckbox';
import useTitlePageTabHook from './hook';
import AutocompleteInput from 'components/autocompleteInput';
import TagAutoCompleateBox from 'components/TagAutoCompleateBox/tagAutoCompleateBox';
const PatientForm = React.lazy(
  () => import('../BookedTitlePage/Components/PatientForm'),
);

const polData = [
  {
    id: 0,
    name: '[М] Мужской',
  },
  {
    id: 1,
    name: '[Ж] Женский',
  },
];

export const rowData = [
  {
    number: '137',
    name: 'Ferd Banbrook Connolly',
    group: [],
    arrivalData: '2023-12-06',
    departureDate: '2023-12-15',
    roomType: 'Lyuks A',
    room: '51-929-6443',
    numberOfGuest: 2,
    level: 3,
    howManyTimesUsed: 4,
    capacity: 1,
    occupied: false,
    tariff: 5,
    duration: 9,
    balance: 0,
    paid: 0,
    discount: 0,
    statusRoom: 'clean',
  },
  {
    number: '117',
    name: 'Levi Syde ',
    group: [],
    arrivalData: '2023-12-05',
    departureDate: '2023-12-13',
    roomType: 'Lyuksbk',
    room: '34-631-7219',
    numberOfGuest: 5,
    level: 1,
    howManyTimesUsed: 1,
    capacity: 1,
    occupied: true,
    tariff: 6,
    duration: 8,
    balance: 0,
    paid: 0,
    discount: 0,
    statusRoom: 'clean',
  },
  {
    number: '139',
    name: 'Griffie Pendrey ',
    group: [],
    arrivalData: '2023-12-06',
    departureDate: '2023-12-14',
    roomType: 'Lyuksbk',
    room: '03-447-1912',
    numberOfGuest: 5,
    level: 2,
    howManyTimesUsed: 6,
    capacity: 1,
    occupied: false,
    tariff: 5,
    duration: 8,
    balance: 0,
    paid: 0,
    discount: 0,
    statusRoom: 'clean',
  },
  {
    number: '141',
    name: 'Arlinda Hamm Pimer',
    group: [],
    arrivalData: '2023-12-06',
    departureDate: '2023-12-14',
    roomType: 'Lyuks B',
    room: '53-821-3131',
    numberOfGuest: 6,
    level: 2,
    howManyTimesUsed: 2,
    capacity: 2,
    occupied: true,
    tariff: 6,
    duration: 8,
    balance: 0,
    paid: 0,
    discount: 0,
    statusRoom: 'clean',
  },
];

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

const top100FilmsChack = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
];

const radioForm = [
  {
    id: 0,
    value: 'gentle',
    label: 'Щадящий',
  },
  {
    id: 1,
    value: 'bed',
    label: 'Постельный',
  },
  {
    id: 2,
    value: 'tonic',
    label: 'Тонизирующий',
  },
  {
    id: 3,
    value: 'coaching',
    label: 'Тренирующий',
  },
];

const radioForm2 = [
  {
    id: 0,
    value: 'shown',
    label: 'Показан',
  },
  {
    id: 1,
    value: 'notShown',
    label: 'Не показан',
  },
  {
    id: 2,
    value: 'contraindicated',
    label: 'Противопоказан',
  },
];

interface PatientInfoType {
  register: any;
}

const PatientInfoSection = ({ register }: PatientInfoType) => {
  return (
    <Box className="border p-[5px]">
      <Suspense fallback={<>Loading...</>}>
        <PatientForm
          polData={polData}
          avtoCaplektData={top100Films}
          register={register}
        />
        <HomeAddressForm avtoCaplektData={top100Films} register={register} />
        <PhonePushForm
          phonePush={PhonePushColDefs}
          avtoCaplektData={top100Films}
          register={register}
          rowData={rowData}
        />
      </Suspense>
    </Box>
  );
};

const TitlePageBottomCheckbooks = () => {
  return (
    <Box className="border my-[5px] px-[10px] py-[8px]">
      <DefaulCheckbox label="нет" leftLabel="Аллергия:" style="w-[350px]" />
      <DefaulCheckbox
        label="нет"
        leftLabel="Метеолабильность:"
        style="w-[350px]"
      />
      <DefaulCheckbox
        label="нет"
        leftLabel="Непереносимость продуктов!"
        style="w-[350px]"
      />
      <DefaulCheckbox
        label="нет"
        leftLabel="Нарушения стула:"
        style="w-[350px]"
      />
      <DefaulCheckbox
        label="нет"
        leftLabel="Получает постоянно медикаменты:"
        style="w-[350px]"
      />
    </Box>
  );
};

const RiskFactorsAndTags = () => {
  return (
    <Box className="flex justify-between">
      <Box className="w-[35%]">
        <TagAutoCompleateBox data={top100FilmsChack} label="Факторы риска" />
      </Box>
      <Box className="w-[64.5%]">
        <TagAutoCompleateBox data={top100FilmsChack} label="Метки" />
      </Box>
    </Box>
  );
};

const Comment = () => {
  return (
    <Box className="w-fill  bg-[#F5F5F5] py-[8px] px-[10px] mt-[10px]">
      <Box className="flex items-center mb-[10px]">
        <ArrowDropSownIcon />
        <DefaultText style={'ml-[10px] text-[#000]'}>Комментарий</DefaultText>
      </Box>
      <TextField
        id="filled-multiline-static"
        multiline
        rows={1}
        className="w-[100%] bg-[white] "
      />
    </Box>
  );
};

const HarmFactors = () => {
  const appModals = useAppModals();

  return (
    <Box className="w-fill  py-[5px] px-[10px]  border mt-[10px] ">
      <DefaultText style={'mb-[10px] text-[#000]'}>
        Факторы вредности
      </DefaultText>
      <Box className="flex">
        <DefaultButton
          onClick={() => appModals?.show('createPayment')}
          title="Добавить фактор"
          classStyle="h-[40px] bg-[#4CAF50] mr-[10px]"
        />
        <DefaultButton
          onClick={() => appModals?.show('professionalRoute')}
          title="Создать профосмотр"
          classStyle="h-[40px] bg-[#4CAF50] mr-[10px]"
        />
        <DefaultButton
          title="Отменить фактор"
          classStyle="h-[40px] bg-[#3397FF]"
        />
      </Box>
      <Box className="flex py-[8px] px-[10px] border  mt-[10px] items-center">
        <AutocompleteInput
          label="Профессия"
          data={top100Films}
          containerStyle={'w-[80%]  flex-col '}
          inputStyle="w-[100%]"
          labelStyle="text-[#000]"
        />
        <DefaultButton
          title="Синхронизировать"
          classStyle="h-[40px] bg-[#3397FF] mt-[20px] ml-[10px]"
        />
      </Box>
    </Box>
  );
};

const ModeHandler = () => {
  const appModals = useAppModals();

  return (
    <Box className="flex justify-between">
      <Box className=" border  w-[35%] px-[10px] py-[8px]">
        <DefaultText style={'text-[14px] text-[#000]'}>Режим</DefaultText>
        <Box className="flex">
          <Box className="w-[60%] ">
            <RadioForm data={radioForm} />
          </Box>
          <Box className=" mt-[5px]">
            <DefaultButton
              onClick={() => appModals?.show('add_reason')}
              title="Добавить причину"
              classStyle=" bg-[#4CAF50] "
            />
          </Box>
        </Box>
      </Box>
      <Box className=" border  w-[64.5%] px-[10px] py-[8px] ">
        <DefaultText style={'text-[14px] text-[#000]'}>Режим</DefaultText>
        <Box className="flex  justify-between">
          <Box className="w-[60%] ">
            <RadioForm data={radioForm2} />
          </Box>
          <Box className=" mt-[5px]">
            <DefaultButton
              onClick={() => appModals?.show('add_reason')}
              title="Добавить причину"
              classStyle=" bg-[#4CAF50] "
            />
          </Box>
        </Box>
        <Box className="mt-[10px]">
          <TextField
            id="filled-multiline-static"
            multiline
            rows={1}
            className="w-[100%] bg-[white] "
          />
        </Box>
      </Box>
    </Box>
  );
};

const DiagnostHandler = () => {
  const appModals = useAppModals();
  return (
    <>
      <DiagnostikaItem
        title="Диагноз с места отбора"
        text="Диагноз не задан."
        btnTitle="Добавить диагноз"
        onClick={() => appModals?.show('choosingDiagnosis')}
      />
      <DiagnostikaItem
        title="Диагноз стационара при поступлении"
        text="Диагноз не определен"
      />
      <DiagnostikaItem
        title="Диагноз стационара при выписке"
        text="Диагноз не определен"
      />
    </>
  );
};

const FrontPageView = () => {
  const { handleSubmit, onSubmit, register, scrollUp, scrollRef } =
    useTitlePageTabHook();
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        whiteSpace: 'nowrap',
      }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container className="flex">
          <Grid item xs={12} md={12} className="flex">
            <Box className="flex w-[50%] justify-end  items-center ">
              <Typography>История болезни №</Typography>
              <Box className=" w-[60px] h-[30px] ml-[10px] ">
                <input className=" bg-[#fff] w-full h-full border-none outline-none " />
              </Box>
            </Box>
            <Box className=" flex w-[50%] justify-end  items-center ">
              <DefaultButton title="новая" onClick={() => scrollUp()} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            className="bg-[white] m-[5px] border min-h-[calc(100vh-330px)] h-[calc(100vh-330px)] overflow-scroll p-[5px]"
            ref={scrollRef}
            style={{ whiteSpace: 'nowrap' }}>
            <Box className="flex bg-white justify-between">
              <div className="w-[35%]">
                <PatientInfoSection register={register} />
                <DocumentationForm
                  avtoCaplektData={top100Films}
                  register={register}
                />
              </div>
              <Box className="w-[64%]">
                <TravelPackageForm
                  avtoCaplektData={top100Films}
                  register={register}
                  rowData={rowData}
                />
                <HospitalStayForm
                  avtoCaplektData={top100Films}
                  register={register}
                />
                <Comment />
                <HarmFactors />
                <TagAutoCompleateBox data={top100FilmsChack} label="Метки" />
              </Box>
            </Box>
            <FrontFooter />
            <ModeHandler />
            <DiagnostHandler />
            <RiskFactorsAndTags />
            <TitlePageBottomCheckbooks />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FrontPageView;
