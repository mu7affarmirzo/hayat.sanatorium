import { Box } from '@mui/material';
import AutocompleteInput from 'components/AutoCompleteInput/autocompleteInput';
import DefaultButton from 'components/DeafultButton/DefaultButton';
import DefaultText from 'components/DefaultText/DefaultText';
import { useAppModals } from 'components/Modals';
import { FC } from 'react';

type Props = {
  dropdownData: any[];
};

const HarmFactors: FC<Props> = ({ dropdownData }) => {
  const appModals = useAppModals();

  return (
    <Box className="w-fill  py-[5px] px-[10px]  border mt-[10px] ">
      <DefaultText style={'mb-[10px] text-[#000]'}>
        Факторы вредности
      </DefaultText>
      <Box className="flex">
        <DefaultButton
          onClick={() => appModals?.show('createPayment')}
          title="Добавить фактор"
          classStyle="h-[40px] bg-[#4CAF50] mr-[10px]"
        />
        <DefaultButton
          onClick={() => appModals?.show('professionalRoute')}
          title="Создать профосмотр"
          classStyle="h-[40px] bg-[#4CAF50] mr-[10px]"
        />
        <DefaultButton
          title="Отменить фактор"
          classStyle="h-[40px] bg-[#3397FF]"
        />
      </Box>
      <Box className="flex py-[8px] px-[10px] border  mt-[10px] items-center">
        <AutocompleteInput
          label="Профессия"
          data={dropdownData}
          containerStyle={'w-[80%]  flex-col '}
          inputStyle="w-[100%]"
          labelStyle="text-[#000]"
        />
        <DefaultButton
          title="Синхронизировать"
          classStyle="h-[40px] bg-[#3397FF] mt-[20px] ml-[10px]"
        />
      </Box>
    </Box>
  );
};

export default HarmFactors;
