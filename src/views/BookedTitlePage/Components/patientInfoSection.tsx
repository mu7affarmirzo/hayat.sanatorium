import { Box } from '@mui/material';
import HomeAddressForm from 'views/BookedTitlePageTab/components/HomeAddressForm';
import PatientForm from 'views/BookedTitlePage/Components/PatientForm';
import PhonePushForm from 'views/BookedTitlePageTab/components/PhonePushForm';
import { UseFormRegister } from 'react-hook-form';
import { Patient } from 'types/booked';
import { PhonePushColDefs } from 'components/columnDefs/phonePush';

interface PatientInfoType {
  register: UseFormRegister<Patient> | any;
  pollData: any;
  mockData: any;
  setValue?: any;
  defaultValues?: any;
  patientDob?: number;
  patient_phones?: [];
}

const PatientInfoSection = ({
  register,
  pollData,
  mockData,
  setValue,
  defaultValues,
  patientDob,
  patient_phones,
}: PatientInfoType) => {
  return (
    <Box className="border p-[5px] ">
      <PatientForm
        polData={pollData}
        avtoCaplektData={mockData}
        register={register}
        setValue={setValue}
        defaultValues={defaultValues}
        patientDob={patientDob as never}
      />
      <HomeAddressForm avtoCaplektData={mockData} register={register} />
      <PhonePushForm
        phonePush={PhonePushColDefs}
        avtoCaplektData={mockData}
        register={register}
        rowData={patient_phones}
      />
    </Box>
  );
};

export default PatientInfoSection;
