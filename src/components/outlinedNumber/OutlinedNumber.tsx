import { Box, TextField, Typography } from '@mui/material';
type propsType = {
  label?: string;
  containerStyle?: string;
  inputStyle?: string;
  text?: string;
  inputBoxStyle?: string;
};
const OutlinedNumber = (props: propsType) => {
  let { containerStyle, inputStyle, label, text, inputBoxStyle } = props;
  return (
    <Box className={` ${containerStyle} flex gap-1`}>
      {label ? (
        <Typography className=" text-[14px] font-normal text-[#000]">
          {label}
        </Typography>
      ) : null}
      <Box className={`${inputBoxStyle} flex items-center`}>
        <TextField
          id="outlined-number"
          type="number"
          size="small"
          className={` ${inputStyle ? inputStyle : 'w-[50%]'}`}
          InputLabelProps={{
            shrink: true,
            sx: {
              fontSize: '12px',
              color: 'rgba(0, 0, 0, 0.54)',
            },
          }}
        />
        {text ? (
          <Typography className="text-[14px] font-normal text-[#000] mx-[5px] ">
            {text}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default OutlinedNumber;
