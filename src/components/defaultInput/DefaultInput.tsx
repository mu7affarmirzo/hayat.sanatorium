import { Box, IconButton, OutlinedInput, OutlinedInputProps, Typography } from '@mui/material';

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
};

const DefaultInput = (props: propsType) => {
  let {
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
  } = props;
  return (
    <Box
      className={`${containerStile ? containerStile : 'flex-col w-[100%]'
        } flex gap-1 `}>
      {label ? (
        <Typography className={`${labelStyle} text-[14px] text-[#858585] `}>
          {label}
        </Typography>
      ) : null}

      <OutlinedInput
        className={`${inputStyle ? inputStyle : 'w-[100%]'
          } bg-[#fff] h-[40px] `}
        {...register(`${inputType}`, { required: true })}
        placeholder={placeholder}
      />

      {icon ? (
        <>
          <IconButton
            onClick={onClick}
            color="primary"
            aria-label="add to shopping cart"
            className={`${iconBg ? iconBg : 'bg-[#64B6F7]'
              }  rounded-none  mx-[3px]`}>
            {icon}
          </IconButton>
        </>
      ) : null}
    </Box>
  );
};

export default DefaultInput;
