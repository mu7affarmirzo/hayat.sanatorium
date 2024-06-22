import { Box } from '@mui/material';
import TagAutoCompleateBox from 'components/TagAutoCompleateBox/tagAutoCompleateBox';

type Props = {
  mockData: any;
  disabled?: boolean
};

const RiskFactorsAndTags = ({ mockData, disabled }: Props) => {
  return (
    <Box className="flex justify-between">
      <Box className="w-[35%]">
        <TagAutoCompleateBox disabled={disabled} data={mockData} label="Факторы риска" />
      </Box>
      <Box className="w-[64.5%]">
        <TagAutoCompleateBox disabled={disabled} data={mockData} label="Метки" />
      </Box>
    </Box>
  );
};

export default RiskFactorsAndTags;
