import { Box } from '@mui/material';
import { useAppModals } from 'components/Modals';
import DefaultText from 'components/defaultText/DefaultText';

const MeasuredParametersView = () => {
    const appModals = useAppModals();

    return (
        <Box className=" h-[calc(100vh-225px)]  p-[10px] overflow-hidden ">
            <Box className=" flex h-[35px] items-start  justify-between   ">
                <DefaultText style={'text-[#000] text-[14px]'}>
                    Сводная таблица исследований
                </DefaultText>
            </Box>
            <Box className="h-[calc(100vh-280px)]  border border-[rgba(0, 0, 0, 0.23)] flex justify-between p-[5px] bg-[#fff]"></Box>
        </Box>
    );
};

export default MeasuredParametersView;