import { Box, Grid, Typography } from '@mui/material';
import AutocompleteInput from 'components/AutoCompleteInput/autocompleteInput';
import DefaultCheckbox from 'components/Checkbox/DefaultCheckbox';
import CustomizedAccordions from 'components/CustomizedAccordions';
import RadioForm from 'components/RadioForm';
import DefaultInput from 'components/defaultInput/DefaultInput';
import { FC } from 'react';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

interface IFormInput {
  phone: string;
  email: string;
  company: string;
  manager: string;
}

interface EventsAccordionType {
  handleSubmit: UseFormHandleSubmit<IFormInput, IFormInput>;
  onSubmit: SubmitHandler<IFormInput>;
  register: UseFormRegister<IFormInput>;
}

const radioForm = [
  {
    id: 0,
    value: 'notShown',
    label: 'Cito!',
  },
  {
    id: 1,
    value: 'contraindicated',
    label: 'Важно',
  },
  {
    id: 2,
    value: 'shown',
    label: 'Информация',
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

const EventsAccordion: FC<EventsAccordionType> = ({
  handleSubmit,
  onSubmit,
  register,
}) => {
  return (
    <CustomizedAccordions
      title="Параметры поиска:"
      childrenStyle={{ background: '#F5F5F5' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} md={12}>
          <Grid container className="flex justify-between items-center ">
            <Grid item xs={3}>
              <DefaultInput
                placeholder="ФИО пациента"
                inputType={'string'}
                register={register}
              />
            </Grid>
            <Grid item xs={4.1} className=" pl-[10px]">
              <Box className=" border-l-2 flex items-center gap-[20px] pl-[10px]">
                <Typography>Важность события:</Typography>
                <RadioForm data={radioForm} style="w-[calc(100%-200px)]" />
              </Box>
            </Grid>
            <Grid item xs={3.2}>
              <Box className="flex  gap-2">
                <Box className="flex items-center gap-2  border-l-2 pl-[15px]">
                  <Typography>Дата события с</Typography>
                  <AutocompleteInput
                    data={top100Films}
                    containerStyle={'flex-row items-center '}
                    inputStyle="w-[120px]"
                  />
                </Box>
                <Box className="flex items-center gap-2">
                  <Typography>по:</Typography>
                  <AutocompleteInput
                    data={top100Films}
                    containerStyle={'flex-row items-center '}
                    inputStyle="w-[120px]"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1.7}>
              <DefaultCheckbox label="Только непрочитанные" />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </CustomizedAccordions>
  );
};

export default EventsAccordion;
