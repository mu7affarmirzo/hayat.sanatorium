import { Box, IconButton, TextField } from '@mui/material';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import { FC } from 'react';

interface Props {
  isActions: boolean;
  isDisabled: boolean;
  title: string;
}

const TextareActionBoxView: FC<Partial<Props>> = ({
  isActions = false,
  isDisabled = true,
  title,
}) => {
  return (
    <Box>
      <SectionTitle
        title={title as ''}
        className="text-base font-medium font-roboto"
      />
      <Box className="flex flex-row justify-between gap-3">
        <TextField
          multiline
          rows={3}
          variant="outlined"
          disabled={isDisabled}
          className="w-full outline-none text-[#000] text-[14px] font-roboto"
        />
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
    </Box>
  );
};

export default TextareActionBoxView;
