import { Box } from '@mui/material';
import { MemoIcon } from 'assets/icons/icons';
import SelectButton from 'components/Buttons/SelectButton';
import { NutritionCol } from 'components/ColumnDefs/nutritionCol';
import DefaultButton from 'components/DeafultButton/DefaultButton';
import ReceptionTable from 'components/ReceptionTable/ReceptionTable';
import { rowData } from '../../BookedTitlePageTab/FrontPageView';
import DefaultText from 'components/DefaultText/DefaultText';
import NutritionItem from 'components/NutritionItem/NutritionItem';

const data = [
  {
    id: 1,
    title: 'Осмотр дежурного врача при поступлении',
  },
  {
    id: 2,
    title: 'Прием дежурного врача',
  },
];
const NutritionView = () => {
  return (
    <Box className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)] bg-[#fff] p-[10px]">
      <Box className=" flex h-[60px] ">
        <Box className=" flex items-center w-[80%]">
          <DefaultButton
            title="Добавить счёт"
            classStyle="h-[35px] bg-[#4CAF50] text-[#fff] mr-[8px]"
            disabled={true}
          />
          <DefaultButton
            title="Добавить дополнение"
            classStyle="h-[35px] bg-[#4CAF50] text-[#fff] mr-[8px]"
          />
          <DefaultButton
            title="Добавить исключение"
            classStyle="h-[35px] bg-[#4CAF50] text-[#fff] mr-[8px]"
          />
          <DefaultButton
            title="Добавить пищевой аллерген"
            classStyle="h-[35px] bg-[#4CAF50] text-[#fff] mr-[8px]"
          />
        </Box>
        <Box className=" flex items-center justify-end w-[20%]">
          <SelectButton
            data={data}
            style="h-[35px]"
            defaultValue="Применить шаблон"
            icon={<MemoIcon />}
          />
        </Box>
      </Box>
      <Box className=" ">
        <ReceptionTable columnDefs={NutritionCol} rowData={rowData} />
      </Box>
      <Box className="flex flex-col gap-1 border-l-[1px] border-r-[1px] border-b-[1px] border-[#b0afaf] p-[3px]">
        <DefaultText style={'text-[14px] text-[#000]'}>Дополнения</DefaultText>

        <NutritionItem data={data} />
      </Box>
      <Box className="flex flex-col gap-1 border-l-[1px] border-r-[1px] border-b-[1px] border-[#b0afaf] p-[3px]">
        <DefaultText style={'text-[14px] text-[#000]'}>Исключения</DefaultText>

        <NutritionItem data={data} />
      </Box>
    </Box>
  );
};

export default NutritionView;
