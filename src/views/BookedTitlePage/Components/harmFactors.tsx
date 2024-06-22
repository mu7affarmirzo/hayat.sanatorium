import { Box } from '@mui/material';

import { useAppModals } from 'components/Modals';
import AutocompleteInput from 'components/autocompleteInput';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import { FC } from 'react';

type Props = {
  dropdownData: any[];
  disabled?: boolean
};

const HarmFactors: FC<Props> = ({ dropdownData, disabled }) => {
  const appModals = useAppModals();

  return (
    <Box className="w-fill  py-[5px] px-[10px]  border mt-[10px] ">
      <DefaultText style={'mb-[10px] text-[#000]'}>
        Факторы вредности
      </DefaultText>
      <Box className="flex">
        <DefaultButton
          disabled={disabled}
          onClick={() => appModals?.show('createPayment')}
          title="Добавить фактор"
          classStyle="h-[40px] bg-[#4CAF50] mr-[10px]"
        />
        <DefaultButton
          disabled={disabled}
          onClick={() => appModals?.show('professionalRoute')}
          title="Создать профосмотр"
          classStyle="h-[40px] bg-[#4CAF50] mr-[10px]"
        />
        <DefaultButton
          disabled={disabled}
          title="Отменить фактор"
          classStyle="h-[40px] bg-[#3397FF]"
        />
      </Box>
      <Box className="flex py-[8px] px-[10px] border  mt-[10px] items-center">
        <AutocompleteInput
          disabled={disabled}
          label="Профессия"
          data={dropdownData}
          containerStyle={'w-[80%]  flex-col '}
          inputStyle="w-[100%]"
          labelStyle="text-[#000]"
        />
        <DefaultButton
          disabled={disabled}
          title="Синхронизировать"
          classStyle="h-[40px] bg-[#3397FF] mt-[20px] ml-[10px]"
        />
      </Box>
    </Box>
  );
};

export default HarmFactors;
