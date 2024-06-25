import CustomizedAccordions from 'components/CustomizedAccordions';
import DefaultInput from 'components/defaultInput/DefaultInput';
import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Grid } from '@mui/material';
import AutocompleteInput from 'components/autocompleteInput';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

interface IFormInput {
  full_name: string;
  ib: string;
  word: string;
}

interface Props {
  register: UseFormRegister<Partial<IFormInput>>;
}

export const SearchOptionsAccordion: FC<Props> = ({ register }) => {
  return (
    <CustomizedAccordions
      title="Параметры поиска:"
      childrenStyle={{ background: '#F5F5F5' }}>
      <Grid
        item
        xs={12}
        md={12}
        className="bg-[#F5F5F5] flex justify-between items-center gap-2">
        <DefaultInput
          register={register}
          inputType={'full_name'}
          containerStile="w-[33%] "
          inputStyle="w-[100%]"
          placeholder="ФИО пациента"
        />
        <DefaultInput
          required={false}
          register={register}
          inputType={'ib'}
          containerStile="w-[33%]  "
          inputStyle="w-[100%]"
          placeholder="№ Истории"
        />
        <AutocompleteInput
          data={top100Films}
          placeholder="Тип карты"
          containerStyle={' w-[33%]   bg-[#fff] '}
          inputStyle="w-[100%]"
        />
        {/* <Grid
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
          </Grid> */}
      </Grid>
    </CustomizedAccordions>
  );
};
