import { Box, Grid, Typography } from '@mui/material';
import DefaultText from 'components/defaultText/DefaultText';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import AutocompleteInput from 'components/autocompleteInput';
import { columnDefs } from 'components/columnDefs/expectedCol';
import DefaultButton from 'components/deafultButton/DefaultButton';
import ReceptionTable from 'components/receptionTable';

import { FC } from 'react';

type propsType = {
  avtoCaplektData: any;
  register: any;
  rowData?: any;
  watch?: any;
  isDisabetBtns?: boolean;
};

interface InfoBoxTypes {
  children: any;
  label: string;
  buttonChild?: JSX.Element;
}

const InfoContainer: FC<InfoBoxTypes> = ({ children, label, buttonChild }) => {
  return (
    <Grid
      container
      className={`${buttonChild ? 'items-start' : 'items-center'} mt-2 `}>
      <Grid item xs={2.5}>
        <Typography className="text-sm font-normal font-roboto text-[#8d8c8c] ">
          {label}
        </Typography>
        {buttonChild ? buttonChild : null}
      </Grid>
      <Grid item xs={9.5}>
        {children}
      </Grid>
    </Grid>
  );
};

const TravelPackageForm = (props: propsType) => {
  let { avtoCaplektData, rowData, watch, isDisabetBtns } = props;

  return (
    <Box className="flex flex-col border p-[5px]">
      <SectionTitle
        title="Пребывание в санатории"
        className="font-roboto font-medium text-sm"
      />

      <InfoContainer
        label="Программа:"
        children={
          <AutocompleteInput data={avtoCaplektData} inputStyle="w-[100%]" />
        }
      />

      <InfoContainer
        label="Лечебные программы:"
        buttonChild={
          <DefaultButton
            title="Добавить"
            classStyle="bg-[#4CAF50]  w-[95%] mt-[10px]"
            disabled={isDisabetBtns}
          />
        }
        children={
          <ReceptionTable
            columnDefs={columnDefs}
            height="h-[100px]"
            rowData={rowData}
          />
        }
      />

      <InfoContainer
        label="Срок лечения по путевке:"
        children={
          <Box className="flex flex-row items-center gap-2">
            <AutocompleteInput
              data={avtoCaplektData}
              containerStyle={'w-[20%]  flex-row items-center  justify-between'}
              inputStyle="w-[100%]"
              multiple={true}
            />
            <AutocompleteInput
              label="-"
              data={avtoCaplektData}
              containerStyle={'w-[20%] flex-row items-center'}
              inputStyle="w-[100%]"
            />
            <DefaultText children={`дней: 8`} />
          </Box>
        }
      />

      <InfoContainer
        label="Прибыл:"
        children={
          <AutocompleteInput
            data={avtoCaplektData}
            containerStyle={'w-[20%] flex-row items-center  justify-between '}
            inputStyle="w-[100%]"
          />
        }
      />

      <InfoContainer
        label="Планируемый отъезд:"
        children={
          <Box className="flex flex-row items-center gap-2">
            <AutocompleteInput
              data={avtoCaplektData}
              containerStyle={
                'w-[20%]  flex-row items-center  justify-between '
              }
              inputStyle="w-[100%]"
            />
            <AutocompleteInput
              label="время:"
              data={avtoCaplektData}
              containerStyle={
                'w-[25%]  flex-row items-center  justify-between '
              }
              inputStyle="w-[90%]"
            />
          </Box>
        }
      />

      <InfoContainer
        label="Выбыл:"
        children={
          <AutocompleteInput
            data={avtoCaplektData}
            containerStyle={'w-[20%] flex-row items-center  justify-between '}
            inputStyle="w-[100%]"
          />
        }
      />

      <InfoContainer
        label="Количество к/дней:"
        children={
          <Box>
            <DefaultText children={8} />
          </Box>
        }
      />

      <InfoContainer
        label="Лечащий врач:"
        children={
          <AutocompleteInput
            multiple={false}
            data={[watch('doctor')] || []}
            inputStyle="w-[100%]"
            optionsData={[]}
          />
        }
      />

      <InfoContainer
        label="Медсестра:"
        children={
          <AutocompleteInput
            multiple={true}
            data={watch('nurse') || []}
            inputStyle="w-[100%]"
            optionsData={[]}
          />
        }
      />

      <InfoContainer
        label="Помещён в комнату:"
        children={
          <Box className="flex flex-row items-center gap-2">
            <AutocompleteInput
              data={avtoCaplektData}
              containerStyle={'w-[25%] flex-row items-center  justify-between '}
              inputStyle="w-[100%]"
            />
            <DefaultText children={'Двухместный люкс'} />
          </Box>
        }
      />

      <InfoContainer
        label="Отделение:"
        children={
          <AutocompleteInput data={avtoCaplektData} inputStyle="w-[100%]" />
        }
      />
    </Box>
  );
};

export default TravelPackageForm;
