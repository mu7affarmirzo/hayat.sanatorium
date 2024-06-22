import { Box, Grid } from '@mui/material';
import TagAutoCompleateBox from 'components/TagAutoCompleateBox/tagAutoCompleateBox';
import FrontFooter from 'components/frontFooter/FrontFooter';
import Comment from 'views/BookedTitlePage/Components/commetsSection';
import DiagnostHandler from 'views/BookedTitlePage/Components/diagnostHandler';
import HarmFactors from 'views/BookedTitlePage/Components/harmFactors';
import ModeHandler from 'views/BookedTitlePage/Components/modalHandler';
import PatientInfoSection from 'views/BookedTitlePage/Components/patientInfoSection';
import RiskFactorsAndTags from 'views/BookedTitlePage/Components/tagsFactors';
import { TitlePageContainer } from 'views/BookedTitlePage/Components/titlePageContainer';
import DocumentationForm from 'views/BookedTitlePageTab/components/DocumentationForm';
import HospitalStayForm from 'views/BookedTitlePageTab/components/HospitalStayForm';
import TravelPackageForm from 'views/BookedTitlePageTab/components/TravelPackageForm';
import { PatientDocTPProvider, usePatientDocTPContext } from './module';

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

// export const rowData = [
//   {
//     number: '137',
//     name: 'Ferd Banbrook Connolly',
//     group: [],
//     arrivalData: '2023-12-06',
//     departureDate: '2023-12-15',
//     roomType: 'Lyuks A',
//     room: '51-929-6443',
//     numberOfGuest: 2,
//     level: 3,
//     howManyTimesUsed: 4,
//     capacity: 1,
//     occupied: false,
//     tariff: 5,
//     duration: 9,
//     balance: 0,
//     paid: 0,
//     discount: 0,
//     statusRoom: 'clean',
//   },
// ];

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

const Main = () => {
  const {
    scrollRef,
    onSubmit,
    getAgePatient,
    copyArray,
    isLoading,
    activePatient,
    activePatientError,
    rowData,
    methods: { register, handleSubmit, setValue, watch },
  } = usePatientDocTPContext();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">Loading...</div>
    );
  }

  if (activePatientError) {
    return (
      <div className="flex justify-center items-center h-full">
        Error loading patient data
      </div>
    );
  }

  if (!activePatient || Object.keys(activePatient).length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        No active patient data available
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        whiteSpace: 'nowrap',
      }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitlePageContainer ibNumber={activePatient.id}>
          <Grid
            item
            xs={12}
            md={12}
            className="bg-white m-[5px] border min-h-[calc(100vh-280px)] h-[calc(100vh-320px)] overflow-scroll p-[5px]"
            ref={scrollRef}
            style={{ whiteSpace: 'nowrap' }}>
            <Box className="flex max-larger:flex-col justify-between">
              <div className="w-[35%] max-larger:w-full">
                <PatientInfoSection
                  disabled={true}
                  register={register}
                  pollData={polData}
                  setValue={setValue}
                  patientDob={getAgePatient}
                  mockData={top100FilmsChack}
                  // defaultValues={defaultValues}
                  patient_phones={copyArray as never}
                />
                <DocumentationForm
                  avtoCaplektData={top100FilmsChack}
                  register={register}
                  disabled={true}
                />
              </div>
              <Box className="w-[64%] max-larger:w-ful">
                <TravelPackageForm
                  avtoCaplektData={top100FilmsChack}
                  register={register}
                  rowData={rowData}
                  watch={watch}
                  disabled={true}
                />
                <HospitalStayForm
                  avtoCaplektData={top100FilmsChack}
                  register={register}
                  disabled={true}
                />
                <Comment disabled={true} />
                <HarmFactors disabled={true} dropdownData={top100FilmsChack} />
                <TagAutoCompleateBox disabled={true} data={top100FilmsChack} label="Метки" />
              </Box>
            </Box>
            <FrontFooter rowData={rowData} disabled={true} />
            <ModeHandler disabled={true} radioFormData={radioForm} />
            <DiagnostHandler disabled={true} />
            <RiskFactorsAndTags disabled={true} mockData={top100FilmsChack} />
            {/* <TitlePageBottomCheckbooks
                setValue={setValue}
                defaultValues={defaultValues}
              /> */}
          </Grid>
        </TitlePageContainer>
      </form>
    </div>
  );
};

const PatientDoctorsTPContainer = () => (
  <PatientDocTPProvider>
    <Main />
  </PatientDocTPProvider>
);

export default PatientDoctorsTPContainer;
