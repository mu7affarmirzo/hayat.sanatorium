import CustomizedAccordions from 'components/CustomizedAccordions';
import DefaultInput from 'components/defaultInput/DefaultInput';
import { FC } from 'react';
import {
  UseFormHandleSubmit,
  SubmitHandler,
  UseFormRegister,
} from 'react-hook-form';
import { IFormInput } from '../hook';
import { Grid } from '@mui/material';

interface Props {
  handleSubmit: UseFormHandleSubmit<IFormInput, any>;
  onSubmit: SubmitHandler<IFormInput>;
  register: UseFormRegister<IFormInput>;
}

export const SearchOptionsAccordion: FC<Props> = ({
  handleSubmit,
  onSubmit,
  register,
}) => {
  return (
    <CustomizedAccordions
      title="Параметры поиска:"
      childrenStyle={{ background: '#F5F5F5' }}>
      <Grid item xs={12} md={12} className="bg-[#F5F5F5]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex justify-between items-center gap-[10px] ">
          <DefaultInput
            placeholder="ФИО пациента"
            inputType={'name'}
            register={register}
          />
          <DefaultInput
            placeholder="№ Истории"
            inputType={'historyIB'}
            register={register}
          />
          <DefaultInput
            placeholder="Тип карты"
            inputType={'cardType'}
            register={register}
          />
        </form>
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
