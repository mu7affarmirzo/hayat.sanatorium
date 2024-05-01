import { Box, styled, TextField, Typography } from '@mui/material';

type propsType = {
    label?: string;
    containerStyle?: string;
    inputStyle?: string;
    text?: string;
    inputBoxStyle?: string;
    customVariant?: "outlined-sm"
};

const CustomField = styled(TextField)<propsType>((props) => ({
    '& .MuiInputBase-root': props.customVariant === "outlined-sm" ?
        {
            height: 24,
            backgroundColor: "white",
            border: "1px solid #0000003B",
            borderRadius: "4px",
            textAlign: 'right',
            '& .MuiOutlinedInput-notchedOutline': {
                border: "none"
            },
            '& .Mui-active': {
                border: "none"
            },
            '& .MuiInputBase-input': {
                padding: "0 8px 0 4px",
                fontSize: "12px",
                textAlign: "right",
                color: "#000000DE",
                letterSpacing: "0.4px",
                fontFamily: `Roboto, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
            },
            '& input[type=number]::-webkit-outer-spin-button': {
                opacity: 1
            }
        }
        : {},
}));

const NumberInput = (props: propsType) => {
    let { containerStyle = 'w-full', inputStyle = 'w-full', label, text, inputBoxStyle = 'w-full' } = props;
    return (
        <Box className={`${containerStyle} flex gap-1`}>
            {label ? (
                <Typography className=" text-[14px] font-normal text-[#000]">
                    {label}
                </Typography>
            ) : null}
            <Box className={`${inputBoxStyle} flex items-center`}>
                <CustomField
                    id="outlined-number"
                    type="number"
                    customVariant={props.customVariant}
                    size="small"
                    className={`${inputStyle ? inputStyle : 'w-full'}`}
                    InputLabelProps={{
                        shrink: true,
                        sx: {
                            fontSize: '12px',
                            color: 'rgba(0, 0, 0, 0.54)',
                        },
                    }}
                />
                {text ? (
                    <Typography className="text-[14px] font-normal text-[#000] mx-[5px]">
                        {text}
                    </Typography>
                ) : null}
            </Box>
        </Box>
    );
};

export { NumberInput };
