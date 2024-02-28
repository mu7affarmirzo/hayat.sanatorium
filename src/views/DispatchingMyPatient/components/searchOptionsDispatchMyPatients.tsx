import { Grid } from '@mui/material';
import AutocompleteInput from 'components/AutoCompleteInput/autocompleteInput';
import DefaultCheckbox from 'components/Checkbox/defaultCheckbox';
import CustomizedAccordions from 'components/CustomizedAccordions';
import DefaultInput from 'components/DefaultInput/DefaultInput';
import { UseFormRegister } from 'react-hook-form';

interface IFormInput {
  full_name: string;
  word: string;
  ib: string;
}
type Props = {
  register: UseFormRegister<IFormInput>;
};

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

export const DispatchMyPatientSearchOptions = ({ register }: Props) => {
  return (
    <CustomizedAccordions
      title="Параметры поиска:"
      childrenStyle={{
        background: '#F5F5F5',
        display: 'flex',
        padding: '10px',
      }}
      topBoxStyle={{ background: '#F5F5F5' }}>
      <Grid
        item
        xs={12}
        md={9.5}
        className=" flex  justify-between items-center ">
        <DefaultInput
          register={register}
          inputType={'full_name'}
          containerStile="w-[33%] "
          inputStyle="w-[100%]"
          placeholder="ФИО пациента"
        />
        <DefaultInput
          register={register}
          inputType={'ib'}
          containerStile="w-[33%]  "
          inputStyle="w-[100%]"
          placeholder="Тип карты"
        />
        <AutocompleteInput
          data={top100Films}
          containerStyle={' w-[33%]   bg-[#fff] '}
          inputStyle="w-[100%]"
        />
      </Grid>
      <Grid className="flex justify-end items-center " item xs={12} md={2.5}>
        <DefaultCheckbox label="Только недиспетчеризованные" />
      </Grid>
    </CustomizedAccordions>
  );
};
