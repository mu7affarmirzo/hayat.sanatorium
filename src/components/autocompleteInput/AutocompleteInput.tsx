import { Autocomplete, Box, TextField, Typography } from '@mui/material';

type propsType = {
    data?: any;
    lable?: string;
    containerStyle?: string;
    inputStyle?: string;
    lableStyle?: string;
    placeholder?: string;
    multiple?: boolean;
};
const AutocompleteInput = (props: propsType) => {
    let { data, lable, containerStyle, inputStyle, lableStyle, multiple } =
        props;
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
            {multiple ? (
                <Autocomplete
                    multiple
                    id="size-small-outlined-multi"
                    size="small"
                    options={data}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[data[1]]}
                    renderInput={(params) => <TextField {...params} />}
                    className={`${inputStyle ? inputStyle : ' w-[70%] '} `}
                    limitTags={3}
                />
            ) : (
                <Autocomplete
                    placeholder={props.placeholder}
                    size="small"
                    id="free-solo-2-demo"
                    disableClearable
                    options={data}
                    renderInput={(params) => <TextField {...params} />}
                    className={`${inputStyle ? inputStyle : ' w-[70%] '} `}
                />
            )}
        </Box>
    );
};

export default AutocompleteInput;
