import { Box } from '@mui/material';
import { PhonePush } from 'components/ColumnDefs/phonePush';
import { Suspense } from 'react';
import HomeAddressForm from 'views/BookedTitlePageTab/components/HomeAddressForm';
import PatientForm from 'views/BookedTitlePageTab/components/PatientForm';
import PhonePushForm from 'views/BookedTitlePageTab/components/PhonePushForm';
import { rowData } from '../../DisTitlePageTab/disTitlePageTab';
import { UseFormRegister } from 'react-hook-form';
import { Patient } from 'types/booked';

interface PatientInfoType {
  register: UseFormRegister<Patient> | any;
  pollData: any;
  mockData: any;
}

const PatientInfoSection = ({
  register,
  pollData,
  mockData,
}: PatientInfoType) => {
  return (
    <Box className="border p-[5px]">
      <Suspense fallback={<>Loading...</>}>
        <PatientForm
          polData={pollData}
          avtoCaplektData={mockData}
          register={register}
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
