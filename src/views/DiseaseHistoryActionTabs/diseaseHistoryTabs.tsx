import { Grid } from '@mui/material';
import { CoinsAltIcon } from 'assets/icons/icons';
import SelectButton from 'components/buttons/SelectButton';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { FC, useCallback } from 'react';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { addPatientDoctors } from 'features/patient/patientSlice';
import { AddHandler } from './components/nestDropdownMenu';
import MultiLevelDropdown from 'components/MultiLevelDropdown';
import {
  MultiLevelDropdownOption,
  options,
} from 'components/MultiLevelDropdown/options';
import NestedDropdownMenu from 'components/NestedDropdownMenu';

interface Props {
  selectData: any;
  selectData2: any;
  setActiveItem?: any;
}
const popapData = [
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
];

const DiseaseHistoryTopTabs: FC<Props> = ({ selectData, selectData2 }) => {
  const dispatch = useReduxDispatch();

  const handleClickedRowTable = useCallback(
    (id: number, title: string) => {
      dispatch(
        addPatientDoctors({
          id: id,
          name: title,
        }),
      );
    },
    [dispatch],
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

          <AddHandler handleClicked={handleClickedRowTable} data={popapData} />
          {/* <MultiLevelDropdown
            title="MultiDropdown"
            options={options}
            onChange={handleChange}
          /> */}
          {/* <NestedDropdownMenu
            title="MultiDropdown"
            options={options}
            onChange={handleChange}
          /> */}
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
