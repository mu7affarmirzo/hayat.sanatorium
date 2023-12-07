import { Box, TextField, Typography } from '@mui/material';
type propsType = {
    lable?: string;
    containerStyle?: string;
    inputStyle?: string;
    text?: string;
    inputBoxStyle?: string;
};
const OutlinedNumber = (props: propsType) => {
    let { containerStyle, inputStyle, lable, text, inputBoxStyle } = props;
    return (
        <Box className={` ${containerStyle} flex gap-1`}>
            {lable ? (
                <Typography className=" text-[14px] font-normal text-[#000]">
                    {lable}
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
