import { Box, Checkbox, FormControlLabel } from '@mui/material';
import DefaultText from 'components/defaultText/DefaultText';
type propsType = {
    style?: string;
    label?: string;
    leftLable?: string;
    checkboxStyle?: any;
};
const DefaultCheckbox = (props: propsType) => {
    let { style, label, leftLable, checkboxStyle } = props;
    return (
        <Box className={`${style} flex items-center justify-between `}>
            {leftLable ? (
                <DefaultText style={`${style} text-[#000] text-[14px]`}>
                    {leftLable}
                </DefaultText>
            ) : null}
            <FormControlLabel
                sx={{ padding: 0 }}
                control={<Checkbox defaultChecked sx={props.checkboxStyle} />}
                label={label}
                className="text-[#8d8c8c] p-0 m-0"
            />
        </Box>
    );
};

export default DefaultCheckbox;
