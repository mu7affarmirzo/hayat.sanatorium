import { Box } from '@mui/material';
import CustomizedAccordions from 'components/CustomizedAccordions';
import { columnDefs, columnDefsDisabled } from 'components/columnDefs/expectedCol';
import DefaultButton from 'components/deafultButton/DefaultButton';
import ReceptionTable from 'components/receptionTable';

type FrontFooterProps = {
  disabled?: boolean
  rowData?: any
}

const FrontFooter = (props: FrontFooterProps) => {
  const { disabled, rowData } = props

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
          disabled={disabled}
          title="Добавить связь"
          classStyle="bg-[#4CAF50] h-[40px] mt-[10px]"
        />
        <Box className="mt-[5px]">
          <ReceptionTable columnDefs={disabled ? columnDefsDisabled : columnDefs} rowData={rowData ?? []} />
        </Box>
      </Box>
    </CustomizedAccordions>
  );
};

export default FrontFooter;
