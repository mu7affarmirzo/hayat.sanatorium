import { Box } from '@mui/material';
import TagAutoCompleateBox from 'components/TagAutoCompleateBox/tagAutoCompleateBox';

type Props = {
  mockData: any;
};

const RiskFactorsAndTags = ({ mockData }: Props) => {
  return (
    <Box className="flex justify-between">
      <Box className="w-[35%]">
        <TagAutoCompleateBox data={mockData} label="Факторы риска" />
      </Box>
      <Box className="w-[64.5%]">
        <TagAutoCompleateBox data={mockData} label="Метки" />
      </Box>
    </Box>
  );
};

export default RiskFactorsAndTags;
