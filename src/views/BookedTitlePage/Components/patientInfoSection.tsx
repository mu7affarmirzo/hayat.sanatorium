import { Box } from '@mui/material';
import {
  PhonePushColDefs,
  PhonePushColDefsDisabled,
} from 'components/columnDefs/phonePush';
import { UseFormRegister } from 'react-hook-form';
import { Patient } from 'types/booked';
import PatientForm from 'views/BookedTitlePage/Components/PatientForm';
import HomeAddressForm from 'views/BookedTitlePageTab/components/HomeAddressForm';
import PhonePushForm from 'views/BookedTitlePageTab/components/PhonePushForm';

interface PatientInfoType {
  register: UseFormRegister<Patient> | any;
  pollData: any;
  mockData: any;
  setValue?: any;
  defaultValues?: any;
  patientDob?: number;
  patient_phones?: [];
  disabled?: boolean;
}

const PatientInfoSection = ({
  register,
  pollData,
  mockData,
  setValue,
  defaultValues,
  patientDob,
  patient_phones,
  disabled,
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
        disabled={disabled}
      />
      <HomeAddressForm
        disabled={disabled}
        avtoCaplektData={mockData}
        register={register}
      />
      <PhonePushForm
        disabled={disabled}
        phonePush={disabled ? PhonePushColDefsDisabled : PhonePushColDefs}
        avtoCaplektData={mockData}
        register={register}
        rowData={patient_phones}
      />
    </Box>
  );
};

export default PatientInfoSection;
