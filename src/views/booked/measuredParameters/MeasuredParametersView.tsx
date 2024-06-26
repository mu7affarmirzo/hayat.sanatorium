import { Box, Stack } from '@mui/material';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import { CloseIcon } from 'assets/icons/icons';
import Dropdown from 'components/NestedDropdownMenu/ReuseableDropdown';
import BookingScreenTabs, {
  TabsItem,
} from 'components/Tabs/BookedPageTabs/bookedTabs';
import DefaultText from 'components/defaultText/DefaultText';
import { ArterialPressure } from './ArterialPressure';
import { BloodGlucose } from './BloodGlucose';
import { Pulse } from './Pulse';
import { Saturation } from './Saturation';
import { Temperature } from './Temperature';
import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { addTab, removeTab, setActiveTab } from 'features/MeasuredParams/slice/measuredParamsSlice';
import { useMemo } from 'react';
import { MeasuredParamsTab } from 'features/MeasuredParams/types/measuredParamsTypes';

const MeasuredParametersView = () => {
  const { currentTabId: activeTabId, tabsList, removedTabs } = useReduxSelector((s) => s.measuredParametersSlice)

  const content: TabsItem[] = useMemo(() => {
    return [
      {
        title: 'Артериальное давление',
        id: 0,
        component: ArterialPressure,
        icon: CloseIcon,
      },
      {
        title: 'Глюкоза крови (глюкометр)',
        id: 1,
        component: BloodGlucose,
        icon: CloseIcon,
      },
      {
        title: 'Пульс',
        id: 3,
        component: Pulse,
        icon: CloseIcon,
      },
      {
        title: 'Сатурация',
        id: 4,
        component: Saturation,
        icon: CloseIcon,
      },
      {
        title: 'Температура',
        id: 5,
        component: Temperature,
        icon: CloseIcon,
      },
    ].filter((curTab) => !!tabsList.find(tab => tab.id === curTab.id))
  }, [tabsList]);
  console.log({ tabsList, content, activeTabId })
  const dispatch = useReduxDispatch()
  const handleClickActive = (id?: number, title?: string) => {
    if (typeof id === 'number' && !!title) {
      dispatch(setActiveTab({ id, title }))
    }
  }
  const handleRemove = (id: number, title: string) => {
    dispatch(removeTab({ id, title }))
  }

  const handleAddTab = (tab: MeasuredParamsTab) => {
    dispatch(addTab(tab))
  }

  return (
    <Box className=" h-[calc(100vh-225px)]  p-[10px] overflow-hidden ">
      <Stack
        direction={'row'}
        alignItems={'center'}
        minHeight={'40px'}
        justifyContent={'space-between'}
        mb={'4px'}>
        <DefaultText style={'text-[#000] text-[14px] max-h-[14px]'}>
          Измеряемые параметры
        </DefaultText>
        <Dropdown
          handleClicked={handleAddTab}
          endIcon={<ArrowDropDownIcon sx={{ fill: '#fff' }} />}
          title="Добавить параметр"
          data={removedTabs}
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
        <BookingScreenTabs isContentDynamic activeTabId={activeTabId} handleClickActive={handleClickActive} handleRemove={handleRemove} content={content} />
      </Box>
    </Box>
  );
};

export default MeasuredParametersView;
