import { Box } from '@mui/material';
import { Suspense } from 'react';
import HomeAddressForm from 'views/BookedTitlePageTab/components/HomeAddressForm';
import PatientForm from 'views/BookedTitlePageTab/components/PatientForm';
import PhonePushForm from 'views/BookedTitlePageTab/components/PhonePushForm';
import { rowData } from '../../DisTitlePageTab/disTitlePageTab';
import { UseFormRegister } from 'react-hook-form';
import { Patient } from 'types/booked';
import { PhonePush } from 'components/columnDefs/phonePush';

interface PatientInfoType {
  register: UseFormRegister<Patient> | any;
  pollData: any;
  mockData: any;
  setValue?: any;
  defaultValues?: any;
}

const PatientInfoSection = ({
  register,
  pollData,
  mockData,
  setValue,
  defaultValues,
}: PatientInfoType) => {
  return (
    <Box className="border p-[5px]">
      <Suspense fallback={<>Loading...</>}>
        <PatientForm
          polData={pollData}
          avtoCaplektData={mockData}
          register={register}
          setValue={setValue}
          defaultValues={defaultValues}
        />
        <HomeAddressForm avtoCaplektData={mockData} register={register} />
        <PhonePushForm
          phonePush={PhonePush}
          avtoCaplektData={mockData}
          register={register}
          rowData={rowData}
        />
      </Suspense>
    </Box>
  );
};

export default PatientInfoSection;
