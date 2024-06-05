import { Grid } from '@mui/material';
import { CoinsAltIcon, VuesaxLinearPrinterIcon } from 'assets/icons/icons';
// import SelectButton from 'components/buttons/SelectButton';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { useCallback } from 'react';
import Dropdown from 'components/NestedDropdownMenu/ReuseableDropdown';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';

import {
  StartOfReceptionData,
  StartOfReceptionDataType,
} from './diseaseHistoryTabs.constants';

import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';

import { setDynamicSidebar } from 'features/slices/doctorsPatientSidebarSlice';
import generateUniqueId from 'utils/generateID';
import { useRemoveIllnessHistoryMutation } from 'features/DoctorsRoleService/service/doctorService';

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
  const dispatch = useReduxDispatch();

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

  const handleClicked = useCallback(
    (item: any) => {
      dispatch(
        setDynamicSidebar({
          id: generateUniqueId(),
          title: item.title,
        }),
      );
    },
    [dispatch],
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
          <Dropdown
            title="Начало приёма"
            handleClicked={(item) => handleClicked(item)}
            data={StartOfReceptionData}
            styles="bg-[#2196F3] max-h-[46px] mx-1 h-[46px] w-[200px] min-w-[120px]"
            startIcon={<VuesaxLinearPrinterIcon />}
            endIcon={<ArrowDropDownIcon fill="white" />}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          />
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

          {/* <DefaultButton
            title="Отменить все диспетчеризации"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
          /> */}
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
