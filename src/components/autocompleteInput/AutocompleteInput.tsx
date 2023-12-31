import { Autocomplete, Box, TextField, Typography } from '@mui/material';

type propsType = {
    data?: any;
    lable?: string;
    containerStyle?: string;
    inputStyle?: string;
    lableStyle?: string;
    placeholder?: string;
};
const AutocompleteInput = (props: propsType) => {
    let { data, lable, containerStyle, inputStyle, lableStyle } = props;
    return (
        <Box
            className={`${
                containerStyle ? containerStyle : 'flex-row w-[100%]'
            } flex  gap-1 z-[100]  `}
        >
            {lable ? (
                <Box className={` ${lableStyle} text-[#8d8c8c]`}>
                    <Typography className="text-[14px] font-normal  mr-[5px]">
                        {lable}
                    </Typography>
                </Box>
            ) : null}

            <Autocomplete
                placeholder={props.placeholder}
                size="small"
                id="free-solo-2-demo"
                disableClearable
                options={data}
                renderInput={(params) => <TextField {...params} />}
                className={`${inputStyle ? inputStyle : ' w-[70%] '} `}
            />
        </Box>
    );
};

export default AutocompleteInput;
