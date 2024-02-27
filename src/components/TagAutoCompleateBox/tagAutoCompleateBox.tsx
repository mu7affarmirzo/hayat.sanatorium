import { Box } from '@mui/material';
import AutocompleteInputCheck from 'components/AutocompleteInputCheck';
type propsType = {
  data: any;
  label?: string;
};

const TagAutoCompleateBox = (props: propsType) => {
  return (
    <Box className="flex py-[8px] px-[10px] border  mt-[10px] items-center">
      <AutocompleteInputCheck
        label={props.label}
        data={props.data}
        containerStyle={'w-[100%]  flex-col '}
        inputStyle="w-[100%]"
      />
    </Box>
  );
};

export default TagAutoCompleateBox;
