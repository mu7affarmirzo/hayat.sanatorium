/* eslint-disable react/style-prop-object */
import { Box, Grid, IconButton } from '@mui/material';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import DefaultText from 'components/defaultText/DefaultText';

type Props = {
  style?: string;
  titleStyle?: string;
  label?: string;
  children?: any;
  description?: string;
  boxStyle?: string;
  checkBoxStle?: string;
  actions?: boolean;
};

const DiagnosticCeckboxItem = ({
  style,
  titleStyle,
  label,
  children,
  description,
  boxStyle,
  checkBoxStle,
  actions = true,
}: Props) => {
  return (
    <Box className={` ${style} flex gap-1  justify-between w-[100%] mt-[3px]`}>
      <Box
        className={`${
          checkBoxStle ? checkBoxStle : 'w-[200px]'
        } flex  items-center `}>
        <DefaultText style={'text-[#000] text-[14px]'}>{label}</DefaultText>
        <Box className="">{children}</Box>
      </Box>
      {description && (
        <Box className={`${boxStyle} flex flex-1 gap-3 h-[35px] `}>
          <DefaultText style={`${titleStyle} text-[#000]`}>
            {description}
          </DefaultText>
          {actions && (
            <Grid item className={`flex items-center gap-2`}>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                className=" bg-[#64B6F7] rounded-none">
                <FileAltIcon stroke="white" />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                className=" bg-[#64B6F7] rounded-none  ">
                <FilePlusAltIcon />
              </IconButton>
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
};

export default DiagnosticCeckboxItem;
