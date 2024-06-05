import {
  Box,
  IconButton,
  OutlinedInput,
  OutlinedInputProps,
  Typography,
} from '@mui/material';

interface propsType extends OutlinedInputProps {
  register: any;
  inputType: string;
  label?: string;
  labelStyle?: string;
  placeholder?: string;
  containerStile?: string;
  inputStyle?: string;
  icon?: any;
  iconBg?: string;
  onClick?: () => void;
  dataPicker?: any;
  labelPosition?: 'above' | 'right'; // Add the labelPosition prop
}

const DefaultInput = (props: propsType) => {
  const {
    register,
    inputType,
    label,
    labelStyle,
    placeholder,
    containerStile,
    inputStyle,
    icon,
    iconBg,
    onClick,
    labelPosition = 'above', // Default position is 'above'
  } = props;

  return (
    <Box
      className={`flex my-1  ${containerStile ? containerStile : 'w-full'} ${labelPosition === 'above' ? 'flex-col mx-1' : 'flex-row items-center box-content'} `}>
      <Typography
        className={`${labelStyle} text-[14px] text-[#858585] font-roboto`}>
        {label}
      </Typography>

      <Box className={`flex gap-1 w-full `}>
        <OutlinedInput
          className={`${
            inputStyle ? inputStyle : 'w-[100%]'
          } bg-[#fff] h-[40px]`}
          {...register(`${inputType}`, { required: true })}
          placeholder={placeholder}
        />

        {icon && (
          <IconButton
            onClick={onClick}
            color="primary"
            aria-label="add to shopping cart"
            className={`${
              iconBg ? iconBg : 'bg-[#64B6F7]'
            } rounded-none mx-[3px]`}>
            {icon}
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default DefaultInput;
