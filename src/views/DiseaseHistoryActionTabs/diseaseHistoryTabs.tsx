import { Grid } from '@mui/material';
import { VuesaxLinearPrinterIcon, CoinsAltIcon } from 'assets/icons/icons';
import SelectButton from 'components/Buttons/SelectButton';
import DefaultButton from 'components/DeafultButton/DefaultButton';
import { FC } from 'react';

interface Props {
  selectData: any;
  selectData2: any;
}

const DiseaseHistoryTopTabs: FC<Props> = ({ selectData, selectData2 }) => {
  return (
    <Grid
      container
      className="min-h-[70px] flex justify-between flex-wrap py-[5px] ">
      <Grid
        item
        xs={12}
        md={12}
        className="flex  items-center justify-between flex-wrap ">
        <div className="flex justify-between items-center py-[10px]  ">
          <DefaultButton
            title="Сохранить"
            classStyle="bg-[#4CAF50] h-[46px] text-[#fff] mr-[10px]  "
          />
          <SelectButton
            data={selectData}
            defaultValue="Начало приёма"
            icon={<VuesaxLinearPrinterIcon />}
          />
          <SelectButton
            data={selectData2}
            defaultValue="Экспортировать документы"
          />
          <DefaultButton
            title="Закрыть историю болезни"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
          />
          <DefaultButton
            title="Удалить историю болезни"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
          />
          <DefaultButton
            title="Диспечеризовать все"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
          />
          <DefaultButton
            title="Отменить все диспетчеризации"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[10px] "
          />
        </div>
        <DefaultButton
          icon={<CoinsAltIcon stroke="black" />}
          title="  0,00 сум"
          classStyle="bg-[#F5F5F5] h-[46px] text-[#000]  py-[10px]"
          variant={'none'}
        />
      </Grid>
    </Grid>
  );
};
export default DiseaseHistoryTopTabs;
