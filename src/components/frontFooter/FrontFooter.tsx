import { Box } from '@mui/material';
import CustomizedAccordions from 'components/CustomizedAccordions';
import { columnDefs } from 'components/columnDefs/expectedCol';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import ReceptionTable from 'components/receptionTable/ReceptionTable';

import { rowData } from 'views/booked/frontPage/FrontPageView';

const FrontFooter = () => {
    return (
        <CustomizedAccordions
            title="Связанные истории болезни"
            childrenStyle={{
                background: '#fff',
                display: 'flex',
            }}
            topBoxStyle={{ background: '#F5F5F5', marginTop: '10px' }}
        >
            <Box className=" bg-[#fff] w-full ">
                <DefaultButton
                    title="Добавить связь"
                    style="bg-[#4CAF50] h-[40px] mt-[10px]"
                />
                <Box className="mt-[5px]">
                    <ReceptionTable columnDefs={columnDefs} rowData={rowData} />
                </Box>
            </Box>
        </CustomizedAccordions>
    );
};

export default FrontFooter;
