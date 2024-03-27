import { Grid } from '@mui/material';
import { CoinsAltIcon, VuesaxLinearPrinterIcon } from 'assets/icons/icons';
import SelectButton from 'components/buttons/SelectButton';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { FC, useCallback } from 'react';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { addPatientDoctors } from 'features/patient/patientSlice';
import { MultiLevelDropdownOption } from 'components/MultiLevelDropdown/options';
import Dropdown from 'components/NestedDropdownMenu/ReuseableDropdown';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';

interface Props {
  selectData: any;
  selectData2: any;
  setActiveItem?: any;
}

export type DropdownMenuItem = {
  id: number;
  title: string;
  subMenu?: DropdownMenuItem[];
};

const newPopapData: DropdownMenuItem[] = [
  {
    id: 1,
    title: 'Первичный прием лечащего врача',
  },
  {
    id: 2,
    title: 'Без назначения',
    subMenu: [
      {
        id: 1,
        title: 'Заключительный прием лечащего врача',
      },
      {
        id: 2,
        title: 'Консультация кардиолога первичная',
      },
      {
        id: 3,
        title: 'Консультация невролога первичная',
      },
      {
        id: 4,
        title: ' Осмотр дежурного врача при поступлении',
      },
      {
        id: 5,
        title: 'Повторный приём лечащего врача',
      },
      {
        id: 6,
        title: 'Прием дежурного врача',
      },
      {
        id: 7,
        title: 'ЭКГ(Электрокардиограмма)',
      },
      {
        id: 8,
        title: 'Первичный прием лечащего врача',
      },
    ],
  },
];

const DiseaseHistoryTopTabs: FC<Props> = ({ selectData, selectData2 }) => {
  const dispatch = useReduxDispatch();

  const handleClickedRowTable = useCallback(
    (item: { id: number; title: string }) => {
      // dispatch(
      //   addPatientDoctors({
      //     id: item.id,
      //     name: item.title,
      //   }),
      // );
      console.log(item, 'item');
    },
    [],
  );
  const handleChange = (selectedValue: MultiLevelDropdownOption) => {
    console.log(selectedValue);
  };

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
            classStyle="h-[46px] text-[#fff] mr-[10px] bg-green-500  "
            submitType="submit"
          />
          <Dropdown
            title="Начало приёма"
            handleClicked={(item) => handleClickedRowTable(item)}
            data={newPopapData}
            styles="bg-[#2196F3] max-h-[46px] mx-1 h-[46px] w-[200px] min-w-[120px]"
            startIcon={<VuesaxLinearPrinterIcon />}
            endIcon={<ArrowDropDownIcon sx={{ color: '#000' }} />}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          />
          <SelectButton
            data={selectData2}
            defaultValue="Экспортировать документы"
          />
          <DefaultButton
            title="Закрыть историю болезни"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
          />
          <DefaultButton
            title="Удалить историю болезни"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
          />
          <DefaultButton
            title="Диспечеризовать все"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
          />
          <DefaultButton
            title="Отменить все диспетчеризации"
            classStyle="bg-[#2196F3] h-[46px] text-[#fff] mr-[5px] "
          />
        </div>
        <DefaultButton
          icon={<CoinsAltIcon stroke="black" />}
          title="0,00 сум"
          classStyle="bg-[#F5F5F5] h-[46px] text-[#000] py-[10px]"
          variant={'none'}
        />
      </Grid>
    </Grid>
  );
};
export default DiseaseHistoryTopTabs;
