/* eslint-disable react/style-prop-object */
import { Box } from '@mui/material';
import SelectButton from 'components/Buttons/selectButton';
import { ChangelolCol } from 'components/ColumnDefs/changelogCol';
import DefaultText from 'components/DefaultText/DefaultText';
import ReceptionTableGroup from 'components/ReceptionTableGroup/receptionTableGroup';
import SearchInput from 'components/SearchField/searchInput';
import { useState } from 'react';
const data = [
  {
    id: 1,
    title: 'Добавить параметр',
  },
  {
    id: 2,
    title: 'Добавить параметр',
  },
];

const ChangelogView = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);

  function valuetext(value: number) {
    setSliderValue(value);
    return `${value}`;
  }

  return (
    <Box className=" h-[calc(100vh-225px)]  p-[10px] overflow-hidden bg-[#F5F5F5] ">
      <Box className="flex  items-center justify-between">
        <DefaultText>Измеряемые параметры</DefaultText>
        <SelectButton
          defaultValue="Добавить параметр"
          data={data}
          style="h-[38px]"
        />
      </Box>
      <Box className="border w-[100%] h-[calc(100vh-285px)] mt-[10px] overflow-scroll">
        <Box className="mb-[10px]">
          <SearchInput />
        </Box>
        <ReceptionTableGroup
          columnDefs={ChangelolCol}
          height="h-[calc(100%-50px)]"
        />
      </Box>
    </Box>
  );
};

export default ChangelogView;
