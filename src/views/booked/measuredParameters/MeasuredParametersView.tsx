import { Box, duration } from '@mui/material';
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
      <Box className=" flex h-[35px] items-start  justify-between   ">
        <DefaultText style={'text-[#000] text-[14px]'}>
          Измеряемые параметры
        </DefaultText>
      </Box>
      <Box className="h-[calc(100vh-280px)] max-h-[calc(100vh-280px)] bg-[#fff] pt-[5px]">
        <BookingScreenTabs content={content} />
      </Box>
    </Box>
  );
};

export default MeasuredParametersView;
