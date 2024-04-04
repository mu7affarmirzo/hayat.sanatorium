import { Box, IconButton, TextField } from '@mui/material';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import { FC } from 'react';

interface Props {
  isActions?: boolean;
  isDisabled?: boolean;
}

const TextareActionBoxView: FC<Props> = ({
  isActions = false,
  isDisabled = true,
}) => {
  return (
    <Box className="flex flex-row justify-between gap-3">
      <Box className="w-full">
        <TextField
          multiline
          rows={4}
          variant="outlined"
          disabled={isDisabled}
          className="w-full outline-none text-[#000] text-[14px] font-roboto"
        />
      </Box>
      {isActions && (
        <Box className="flex flex-col gap-2">
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className="bg-[#64B6F7] rounded-none">
            <FileAltIcon stroke="white" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className="bg-[#64B6F7] rounded-none">
            <FilePlusAltIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default TextareActionBoxView;
