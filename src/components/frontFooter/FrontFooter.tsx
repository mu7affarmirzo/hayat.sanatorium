import { Box } from '@mui/material';
import { columnDefs } from 'components/columnDefs/expectedCol';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import ReceptionTable from 'components/receptionTable/ReceptionTable';

import { rowData } from 'views/booked/frontPage/FrontPageView';

const FrontFooter = () => {
    return (
        <Box className="border py-[8px] px-[10px] bg-[#fff] my-[10px] ">
            <DefaultText style={'text-[#000]'}>
                Связанные истории болезни
            </DefaultText>
            <DefaultButton
                title="Добавить связь"
                style="bg-[#4CAF50] h-[40px] mt-[10px]"
            />
            <Box className="mt-[5px]">
                <ReceptionTable columnDefs={columnDefs} rowData={rowData} />
            </Box>
        </Box>
    );
};

export default FrontFooter;
