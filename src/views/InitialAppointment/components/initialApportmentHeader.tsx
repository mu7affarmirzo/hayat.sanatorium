/* eslint-disable react/style-prop-object */
import { Box, Typography } from '@mui/material';
import AutocompleteInput from 'components/autocompleteInput';
import SelectButton from 'components/buttons/SelectButton';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import { FC } from 'react';

interface Props {
  data: {
    label: string;
    year: number;
  }[];
}

const InitialApportmentHeaderSection: FC<Props> = ({ data }) => {
  return (
    <Box className=" flex h-[90px] flex-col justify-around">
      <Box className="flex items-center justify-between h-[30%] ">
        <Box className="">
          <DefaultText style={'text-[#000] '}>
            Прием дежурного врача, Очилов Ибрагим Азамович
          </DefaultText>
        </Box>
        <Box className=" flex items-center w-[80%]  justify-end ">
          <AutocompleteInput
            label="время:"
            data={data}
            labelStyle="text-[#000]"
            containerStyle={
              'w-[20%]  flex-row items-center  h-[35px] mr-[10px]'
            }
            inputStyle="w-[100%]"
          />
          <DefaultButton
            title="Разблокировать"
            classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
          />
          <DefaultButton
            title="Отменить начатый приём"
            classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
            disabled={true}
          />
          <SelectButton
            data={data}
            style="h-[38px] bg-[#2196F3]"
            defaultValue="Шаблоны"
          />
          <DefaultButton
            title="Просмотр документа"
            classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
          />
        </Box>
      </Box>
      <hr />
      <Box className="px-4 flex flex-row justify-between ">
        <Typography className="text-red-500 text-sm font-medium ">
          Не завершено
        </Typography>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default InitialApportmentHeaderSection;
