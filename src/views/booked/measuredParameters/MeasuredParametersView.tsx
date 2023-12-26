import { Box } from '@mui/material';
import DefaultText from 'components/defaultText/DefaultText';
import MeasuredParametersItem from './MeasuredParametersItem';
import BookingScreenTabs, { TabsItem } from 'components/bookingTabs';
import { CloseIcon } from 'assets/icons/icons';

const MeasuredParametersView = () => {
    const content: TabsItem[] = [
        {
            title: 'Артериальное давление',
            component: MeasuredParametersItem,
            icon: CloseIcon,
        },
        {
            title: 'Глюкоза крови (глюкометр)',
            component: MeasuredParametersItem,
            icon: CloseIcon,
        },
        {
            title: 'Пульс',
            component: MeasuredParametersItem,
            icon: CloseIcon,
        },
        {
            title: 'Сатурация',
            component: MeasuredParametersItem,
            icon: CloseIcon,
        },
        {
            title: 'Температура',
            component: MeasuredParametersItem,
            icon: CloseIcon,
        },
    ];

    return (
        <Box className=" h-[calc(100vh-225px)]  p-[10px] overflow-hidden ">
            <Box className=" flex h-[35px] items-start  justify-between   ">
                <DefaultText style={'text-[#000] text-[14px]'}>
                    Сводная таблица исследований
                </DefaultText>
            </Box>
            <Box className="h-[calc(100vh-280px)] max-h-[calc(100vh-280px)] bg-[#fff] pt-[5px]">
                <BookingScreenTabs content={content} />
            </Box>
        </Box>
    );
};

export default MeasuredParametersView;
