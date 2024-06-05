import { Box, duration, Stack } from '@mui/material';
import DefaultText from 'components/defaultText/DefaultText';
import { ArterialPressure } from './ArterialPressure';
import BookingScreenTabs, {
  TabsItem,
} from 'components/Tabs/BookedPageTabs/bookedTabs';
import { CloseIcon } from 'assets/icons/icons';
import { BloodGlucose } from './BloodGlucose';
import { Pulse } from './Pulse';
import { Saturation } from './Saturation';
import { Temperature } from './Temperature';
import { useState } from 'react';
import Dropdown from 'components/NestedDropdownMenu/ReuseableDropdown';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';

const MeasuredParametersView = () => {
  const content: TabsItem[] = [
    {
      title: 'Артериальное давление',
      component: ArterialPressure,
      icon: CloseIcon,
    },
    {
      title: 'Глюкоза крови (глюкометр)',
      component: BloodGlucose,
      icon: CloseIcon,
    },
    {
      title: 'Пульс',
      component: Pulse,
      icon: CloseIcon,
    },
    {
      title: 'Сатурация',
      component: Saturation,
      icon: CloseIcon,
    },
    {
      title: 'Температура',
      component: Temperature,
      icon: CloseIcon,
    },
  ];


  return (
    <Box className=" h-[calc(100vh-225px)]  p-[10px] overflow-hidden ">
      <Stack direction={'row'} alignItems={'center'} minHeight={'40px'} justifyContent={'space-between'} mb={'4px'}>
        <DefaultText style={'text-[#000] text-[14px] max-h-[14px]'}>
          Измеряемые параметры
        </DefaultText>
        <Dropdown
          handleClicked={() => { }}
          endIcon={<ArrowDropDownIcon sx={{ fill: '#fff' }} />}
          title="Добавить параметр"
          data={[{
            id: 1,
            title: 'Консультацию',
          },
          {
            id: 2,
            title: 'Исследование',
          }]}
          styles="bg-[#2196F3] text-[#fff] h-[30px]"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        />
      </Stack>
      <Box className="h-[calc(100vh-280px)] max-h-[calc(100vh-280px)] bg-[#fff] pt-[5px]">
        <BookingScreenTabs content={content} />
      </Box>
    </Box>
  );
};

export default MeasuredParametersView;
