import { Box, TextField } from '@mui/material';
import { ArrowDropSownIcon } from 'assets/icons/icons';
import DefaultText from 'components/defaultText/DefaultText';

const Comment = () => {
  return (
    <Box className="w-fill  bg-[#F5F5F5] py-[8px] px-[10px] mt-[10px]">
      <Box className="flex items-center mb-[10px]">
        <ArrowDropSownIcon />
        <DefaultText style={'ml-[10px] text-[#000]'}>Комментарий</DefaultText>
      </Box>
      <TextField
        id="filled-multiline-static"
        multiline
        rows={1}
        className="w-[100%] bg-[white] "
      />
    </Box>
  );
};

export default Comment;
