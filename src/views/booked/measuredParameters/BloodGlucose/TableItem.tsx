import { Box, IconButton } from '@mui/material';
import { CloseIcon } from 'assets/icons/icons';
import { NumberInput } from '../components/NumberInput';
import DefaultText from 'components/defaultText/DefaultText';
import SelectButton from 'components/buttons/SelectButton';

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

  const data = [
    {
      id: 1,
      title: '10.06.2023',
    },
    {
      id: 2,
      title: '10.06.2024',
    },
  ];
  return (
    <Box className="flex bg-[#fff] w-full border items-center z-0">
      <Box className="border-r-[1px] border-[#605e5e] w-[30px] h-[30px] flex justify-center items-center">
        <IconButton
          onClick={handleCloseBtn}
          className="bg-[#F79E98] z-[1000] w-[18px] h-[18px] rounded-full flex justify-center items-center ml-[0px] p-0">
          <CloseIcon color="red" stroke={'#fff'} fill={'#fff'} />
        </IconButton>
      </Box>
      <Box className="w-[calc(25%+30px)] h-[30px] px-1 flex flex-col justify-center">
        <NumberInput customVariant="outlined-sm" />
      </Box>
      <Box className="border-l-[1px] border-[#605e5e] w-[30%] h-[30px] px-1 flex flex-col justify-center">
        <SelectButton
          defaultValue="10.06.2023"
          data={data}
          style={`bg-[#fff] rounded-1 h-6 !text-[12px] w-[120px] border-[#0000003B] border-[1px]`}
          itemStyle="!text-[#000000DE] !font-roboto !text-[12px] w-[80px] leading-6"
        />
      </Box>
      <Box className="border-l-[1px] border-[#605e5e] w-[30%] h-[30px] px-1 flex flex-col justify-center">
        <DefaultText style={'text-[14px] font-medium text-[#000] ml-[10px]'}>
          Хусанов А.С
        </DefaultText>
      </Box>
    </Box>
  );
};
