import { Box, TextField, TextFieldProps, Typography } from '@mui/material';
import { forwardRef, HTMLProps, Ref } from 'react';
import styled from 'styled-components';

interface IInputProps extends React.ComponentProps<'input'> { }

const CustomField = styled('input')<IInputProps>(() => ({
  height: 24,
  backgroundColor: 'white',
  border: '1px solid #0000003B',
  borderRadius: '4px',
  textAlign: 'right',
  padding: '0 8px 0 4px',
  fontSize: '12px',
  color: '#000000DE',
  letterSpacing: '0.4px',
  width: '100%',
  flex: 1,
  fontFamily: `Roboto, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
}
));

const NumberInput = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  let {
    ...rest
  } = props;
  return (
    <CustomField
      // type="number"
      {...rest}
      ref={ref}
      onKeyDown={(e) => {
        if (e.currentTarget.valueAsNumber < 0) {
          e.preventDefault()
        }
      }}
      type='number'
    />
  );
});

export { NumberInput };
