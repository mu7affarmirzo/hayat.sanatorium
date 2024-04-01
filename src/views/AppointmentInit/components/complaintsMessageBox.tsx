/* eslint-disable react/style-prop-object */
import { Box, IconButton } from '@mui/material';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import DefaultText from 'components/defaultText/DefaultText';
import { FC } from 'react';

interface Props {
  cardStyle?: string;
  titleStyle?: string;
  messageIconStyle?: string;
  message?: string;
  title: string;
}

const ComplaintsMessageBox: FC<Props> = ({
  cardStyle,
  message,
  titleStyle,
  title,
  messageIconStyle,
}) => {
  return (
    <Box
      className={` ${cardStyle} border px-[10px] py-[10px] flex flex-col gap-1 mb-[10px]`}>
      <DefaultText style={`${titleStyle} text-[#000]  mb-[10px]`}>
        {title}
      </DefaultText>
      <Box className="flex justify-between">
        <Box className={`border rounded-[4px] p-[10px] w-full min-h-[110px]`}>
          <DefaultText style={'text-[#0057B2]'}>{message}</DefaultText>
        </Box>
        <Box
          className={` ${
            messageIconStyle ? messageIconStyle : 'flex  flex-col  ml-[10px]'
          } `}>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className=" bg-[#64B6F7] rounded-none  mx-[3px]">
            <FileAltIcon stroke="white" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className={`bg-[#64B6F7] rounded-none  mx-[3px] ${
              messageIconStyle ? 'mt-[0]' : ' mt-[5px]'
            }`}>
            <FilePlusAltIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ComplaintsMessageBox;
