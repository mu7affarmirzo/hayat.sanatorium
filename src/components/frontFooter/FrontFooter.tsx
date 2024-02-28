import { Box } from '@mui/material';
import CustomizedAccordions from 'components/CustomizedAccordions';
import { columnDefs } from 'components/ColumnDefs/expectedCol';
import DefaultButton from 'components/DeafultButton/DefaultButton';
import ReceptionTable from 'components/ReceptionTable/receptionTable';

import { rowData } from 'views/BookedTitlePageTab/FrontPageView';

const FrontFooter = () => {
  return (
    <CustomizedAccordions
      title="Связанные истории болезни"
      childrenStyle={{
        background: '#fff',
        display: 'flex',
      }}
      topBoxStyle={{ background: '#F5F5F5', marginTop: '10px' }}>
      <Box className=" bg-[#fff] w-full ">
        <DefaultButton
          title="Добавить связь"
          classStyle="bg-[#4CAF50] h-[40px] mt-[10px]"
        />
        <Box className="mt-[5px]">
          <ReceptionTable columnDefs={columnDefs} rowData={rowData} />
        </Box>
      </Box>
    </CustomizedAccordions>
  );
};

export default FrontFooter;
