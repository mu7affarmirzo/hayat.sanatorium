import { IconButton } from '@mui/material';
import { CloseIcon } from 'assets/icons/icons';
import { FC } from 'react';

interface CloseIconBoxViewProps {
  handleCloseBtn: () => void;
  iconSize?: string;
}

export const CloseIconBoxView: FC<CloseIconBoxViewProps> = ({
  handleCloseBtn,
  iconSize = '22px',
}) => {
  return (
    <IconButton
      onClick={handleCloseBtn}
      sx={{
        backgroundColor: '#F79E98',
        zIndex: 1000,
        width: iconSize,
        height: iconSize,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px',
        padding: '0',
      }}>
      <CloseIcon stroke="white" />
    </IconButton>
  );
};
