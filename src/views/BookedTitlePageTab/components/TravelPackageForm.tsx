import { Box, Grid, Typography } from '@mui/material';
import AutocompleteInput from 'components/AutoCompleteInput/AutoCompleteInput';
import { columnDefs } from 'components/ColumnDefs/expectedCol';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/DeafultButton/DefaultButton';
import DefaultText from 'components/DefaultText/DefaultText';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
import { FC } from 'react';

type propsType = {
  avtoCaplektData: any;
  register: any;
  rowData?: any;
  watch?: any;
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
      className={`${buttonChild ? 'items-start' : 'items-center'} mt-2`}>
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
  let { avtoCaplektData, rowData, watch } = props;

  console.log('watch', JSON.stringify(watch('nurse'), null, 2));

  return (
    <Box className="flex flex-col border p-[5px]">
      <SectionTitle title="Пребывание в санатории" />

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
          />
        }
        children={
          <ReceptionTable
            columnDefs={columnDefs}
            height="h-[200px]"
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
            />
            <AutocompleteInput
              lable="-"
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
              lable="время:"
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
            multiple={true}
            data={[watch('doctor')] || []}
            inputStyle="w-[100%]"
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
