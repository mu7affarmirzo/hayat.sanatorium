import React, { ReactNode } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import { CloseCircleIcon } from 'assets/icons/icons';
import { Typography } from '@mui/material';

interface AdvancedModalProps {
  open: boolean;
  onClose: () => void;
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  classNameStyle?: string;
  primaryButtonProps?: ButtonProps;
  secondaryButtonProps?: ButtonProps;
  modalTitle: string;
}

const getModalStyle = (size: 'small' | 'medium' | 'large') => ({
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'absolute' as 'absolute',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  maxWidth: size === 'small' ? 400 : size === 'large' ? 1024 : 600,
  width: '100%',
  maxHeight: '80vh',
  overflowY: 'auto',
  borderRadius: '10px',
});

const AdvancedModal: React.FC<AdvancedModalProps> = ({
  open,
  onClose,
  size = 'medium',
  children,
  classNameStyle,
  primaryButtonProps,
  secondaryButtonProps,
  modalTitle,
}) => {
  const modalStyle = getModalStyle(size);

  const renderPrimaryButton = () => (
    <Button
      onClick={onClose}
      variant="contained"
      sx={{
        backgroundColor: '#007DFF',
        color: 'white',
        '&:hover': {
          backgroundColor: '#005cb2',
        },
        '&:active': {
          backgroundColor: '#004080',
        },
        px: 4,
      }}
      {...primaryButtonProps}>
      ОК
    </Button>
  );

  const renderSecondaryButton = () => (
    <Button
      onClick={onClose}
      variant="contained"
      sx={{
        backgroundColor: '#EEEEEE',
        color: '#000',
        '&:hover': {
          backgroundColor: '#e0e0e0',
        },
        '&:active': {
          backgroundColor: '#b3b3b3',
        },
      }}
      {...secondaryButtonProps}>
      Отмена
    </Button>
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
          }}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'semiBold',
              color: '#000',
            }}
            className="text-xl font-bold font-roboto text-red-500">
            {modalTitle}
          </Typography>
          <Button
            onClick={onClose}
            sx={{
              width: '35px',
              height: '35px',
              padding: '5px',
            }}>
            <CloseCircleIcon />
          </Button>
        </Box>
        <Box
          sx={{
            background: '#F5F5F5',
            border: '1px solid rgba(0, 0, 0, 0.23)',
          }}>
          {children}
        </Box>
        <Box
          sx={{
            display: 'flex',
            py: 2,
            itemAlign: 'center',
            justifyContent: 'end',
            gap: 2,
          }}>
          {renderPrimaryButton()}
          {renderSecondaryButton()}
        </Box>
      </Box>
    </Modal>
  );
};

export default React.memo(AdvancedModal);
