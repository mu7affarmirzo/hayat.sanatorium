import { Grid } from '@mui/material';
import { CoinsAltIcon } from 'assets/icons/icons';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { useCallback } from 'react';

import {
  StartOfReceptionData,
  StartOfReceptionDataType,
} from './diseaseHistoryTabs.constants';

import { useReduxSelector } from 'hooks/useReduxHook';

import { useRemoveIllnessHistoryMutation } from 'features/DoctorsRoleService/service/doctorService';
import { StartOfReceptionButton } from './components/startOfRecaptionAction';

export const mockSelectData = [
  {
    id: 0,
    title: 'Начало приёма',
  },
  {
    id: 1,
    title: 'Начало приём2',
  },
];

export type DropdownMenuItem = {
  id?: number;
  title: StartOfReceptionDataType | string;
  subMenu?: DropdownMenuItem[];
  child?: {
    id: number;
    title: string;
  }[];
};

const DiseaseHistoryTopTabs = () => {
  const { activePatient } = useReduxSelector(
    (state) => state.patientIllnesHistory,
  );

  const [fetchRemove] = useRemoveIllnessHistoryMutation();
  const [fetchClose] = useRemoveIllnessHistoryMutation();

  const { id } = activePatient;

  const hanleRemoveIllnessHistory = useCallback(
    (id: number) => {
      console.log('remove illness history', id);
      fetchRemove(id);
    },
    [fetchRemove],
  );

  const hanleCloseIllnessHistory = useCallback(
    (id: number) => {
      console.log('close illness history', id);
      fetchClose(id);
    },
    [fetchClose],
  );

  return (
    <Grid
      container
      className="min-h-[70px] flex justify-between flex-wrap py-[5px] bg-[#fff]">
      <Grid
        item
        xs={12}
        md={12}
        className="flex  items-center justify-between flex-wrap ">
        <div className="flex justify-between items-center py-[10px] ">
          <DefaultButton
            title="Сохранить"
            classStyle="h-[46px] text-[#fff] mr-[10px] bg-green-500 "
            submitType="submit"
          />
          <StartOfReceptionButton data={StartOfReceptionData} />
          <DefaultButton
            title="Экспортировать документы"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
          />
          <DefaultButton
            title="Закрыть историю болезни"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
            onClick={() => hanleCloseIllnessHistory(id)}
          />

          <DefaultButton
            title="Удалить историю болезни"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
            onClick={() => hanleRemoveIllnessHistory(id)}
          />

          <DefaultButton
            title="Диспечеризовать все"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
            disabled
          />
        </div>
        <DefaultButton
          icon={<CoinsAltIcon stroke="black" />}
          title="0,00 сум"
          classStyle="bg-[#F5F5F5] h-[46px] text-[#000] py-[10px]"
          color="black"
        />
      </Grid>
    </Grid>
  );
};
export default DiseaseHistoryTopTabs;
