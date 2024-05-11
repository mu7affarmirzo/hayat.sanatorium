import { Box, IconButton } from '@mui/material';
import { CloseIcon } from 'assets/icons/icons';
import { NumberInput } from '../components/NumberInput';

interface ItemProps {
  close?: (id: number) => void;
  id?: number;
}

export const TableItem = (props: ItemProps) => {
  const { close, id } = props;

  const handleCloseBtn = () => {
    if (!id) {
      return;
    }
    close && close(id);
  };

  return (
    <Box className="flex bg-[#fff] w-full border items-center z-0">
      <Box className="border-r-[1px] border-[#605e5e] w-[30px] h-[30px] flex justify-center items-center">
        <IconButton
          onClick={handleCloseBtn}
          className="bg-[#F79E98] z-[1000] w-[18px] h-[18px] rounded-full flex justify-center items-center ml-[0px] p-0">
          <CloseIcon color="red" stroke={'#fff'} fill={'#fff'} />
        </IconButton>
      </Box>
      <Box className="w-[calc(20%+30px)] h-[30px] px-1 flex flex-col justify-center">
        <NumberInput customvariant="outlined-sm" />
      </Box>
      <Box className="border-l-[1px] border-[#605e5e] w-[35%] h-[30px] px-1 flex flex-col justify-center">
        <NumberInput customvariant="outlined-sm" />
      </Box>
      <Box className="border-l-[1px] border-[#605e5e] w-[15%] h-[30px] px-1 flex flex-col justify-center">
        <NumberInput customvariant="outlined-sm" />
      </Box>
      <Box className="border-l-[1px] border-[#605e5e] w-[15%] h-[30px] px-1 flex flex-col justify-center">
        <NumberInput customvariant="outlined-sm" />
      </Box>
    </Box>
  );
};
