import { Box, Grid, Typography } from '@mui/material';
import TagAutoCompleateBox from 'components/TagAutoCompleateBox/tagAutoCompleateBox';
import DefaultButton from 'components/deafultButton/DefaultButton';
import FrontFooter from 'components/frontFooter/FrontFooter';
import TitlePageBottomCheckbooks from 'views/BookedTitlePage/Components/bottomChechBoxs';
import Comment from 'views/BookedTitlePage/Components/commetsSection';
import DiagnostHandler from 'views/BookedTitlePage/Components/diagnostHandler';
import HarmFactors from 'views/BookedTitlePage/Components/harmFactors';
import ModeHandler from 'views/BookedTitlePage/Components/modalHandler';
import PatientInfoSection from 'views/BookedTitlePage/Components/patientInfoSection';
import RiskFactorsAndTags from 'views/BookedTitlePage/Components/tagsFactors';
import DocumentationForm from 'views/BookedTitlePageTab/components/DocumentationForm';
import HospitalStayForm from 'views/BookedTitlePageTab/components/HospitalStayForm';
import TravelPackageForm from 'views/BookedTitlePageTab/components/TravelPackageForm';
import { usePatientDocTPHook } from './hook';

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

const PatientDoctorsTPContainer = () => {
  const {
    scrollRef,
    scrollUp,
    handleSubmit,
    onSubmit,
    register,
    setValue,
    defaultValues,
    nurseData,
    doctorData,
    watch,
    getAgePatient,
    copyArray,
  } = usePatientDocTPHook();

  console.log(getAgePatient, 'getAgePatient');

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        whiteSpace: 'nowrap',
      }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container className="flex ">
          <Grid item xs={12} md={12} className="flex">
            <Box className="flex w-[50%] justify-end  items-center ">
              <Typography>История болезни №</Typography>
              <Box className=" w-[60px] ml-[10px] ">
                <input
                  className=" bg-[#fff] w-full h-full border-none outline-none pl-[5px]"
                  {...register('id')}
                />
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
            className="bg-white m-[5px] border min-h-[calc(100vh-280px)] h-[calc(100vh-320px)] overflow-scroll p-[5px]"
            ref={scrollRef}
            style={{ whiteSpace: 'nowrap' }}>
            <Box className="flex justify-between">
              <div className="w-[35%]">
                <PatientInfoSection
                  register={register}
                  pollData={polData}
                  mockData={top100FilmsChack}
                  setValue={setValue}
                  defaultValues={defaultValues}
                  patientDob={getAgePatient}
                  patient_phones={copyArray as never}
                />
                <DocumentationForm
                  avtoCaplektData={top100FilmsChack}
                  register={register}
                />
              </div>
              <Box className="w-[64%]">
                <TravelPackageForm
                  avtoCaplektData={top100FilmsChack}
                  register={register}
                  rowData={rowData}
                  watch={watch}
                  nurseData={nurseData as never}
                  doctorData={doctorData as never}
                />
                <HospitalStayForm
                  avtoCaplektData={top100FilmsChack}
                  register={register}
                />
                <Comment />
                <HarmFactors dropdownData={top100FilmsChack} />
                <TagAutoCompleateBox data={top100FilmsChack} label="Метки" />
              </Box>
            </Box>
            <FrontFooter />
            <ModeHandler radioFormData={radioForm} />
            <DiagnostHandler />
            <RiskFactorsAndTags mockData={top100FilmsChack} />
            <TitlePageBottomCheckbooks
              setValue={setValue}
              defaultValues={defaultValues}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PatientDoctorsTPContainer;
