import { Box, Grid, Typography } from '@mui/material';
import DefaultText from 'components/defaultText/DefaultText';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import AutocompleteInput from 'components/autocompleteInput';
import { columnDefs, columnDefsDisabled } from 'components/columnDefs/expectedCol';
import DefaultButton from 'components/deafultButton/DefaultButton';
import ReceptionTable from 'components/receptionTable';

import { FC } from 'react';
import { Living } from 'types/booked';
import { AnyARecord } from 'dns';

type propsType = {
  avtoCaplektData: any;
  register: any;
  rowData?: Living[] | any;
  watch?: any;
  isDisabetBtns?: boolean;
  disabled?: boolean
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
  let { avtoCaplektData, rowData, watch, isDisabetBtns, disabled } = props;

  return (
    <Box className="flex flex-col border p-[5px]">
      <SectionTitle
        title="Пребывание в санатории"
        className="font-roboto font-medium text-sm"
      />

      <InfoContainer
        label="Программа:"
        children={
          <AutocompleteInput
            disabled={disabled} data={avtoCaplektData} inputStyle="w-[100%]" />
        }
      />

      <InfoContainer
        label="Лечебные программы:"
        buttonChild={
          <DefaultButton
            title="Добавить"
            classStyle="bg-[#4CAF50]  w-[95%] mt-[10px]"
            disabled={isDisabetBtns || disabled}
          />
        }
        children={
          <ReceptionTable
            columnDefs={!disabled ? columnDefs : columnDefsDisabled}
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
              disabled={disabled}
              data={avtoCaplektData}
              containerStyle={'w-[20%]  flex-row items-center  justify-between'}
              inputStyle="w-[100%]"
              multiple={true}
            />
            <AutocompleteInput
              disabled={disabled}
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
            disabled={disabled}
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
              disabled={disabled}
              data={avtoCaplektData}
              containerStyle={
                'w-[20%]  flex-row items-center  justify-between '
              }
              inputStyle="w-[100%]"
            />
            <AutocompleteInput
              disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
              disabled={disabled}
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
          <AutocompleteInput
            disabled={disabled} data={avtoCaplektData} inputStyle="w-[100%]" />
        }
      />
    </Box>
  );
};

export default TravelPackageForm;
