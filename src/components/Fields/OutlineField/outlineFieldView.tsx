import { Box, OutlinedInput } from '@mui/material';
import { Path, UseFormReturn } from 'react-hook-form';

interface Props<T extends {}> {
  inputHeight?: string;
  inputWidth?: string;
  medhods: UseFormReturn<T, any, T>;
  name: Path<T>;
  required?: boolean;
}

export const OutlineField = <T extends {}>({
  medhods,
  name,
  required = false,
  inputWidth = '70px',
}: Props<T>) => {
  return (
    <Box>
      <OutlinedInput
        sx={{
          width: inputWidth,
          height: '30px',
          '& .MuiOutlinedInput-input': {
            py: '3px', // Vertical padding to center the text vertically
          },
        }}
        className="mx-2"
        size="small"
        {...medhods.register(name, { required })}
      />
    </Box>
  );
};
