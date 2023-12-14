import { Box, Checkbox, FormControlLabel } from '@mui/material';
import DefaultText from 'components/defaultText/DefaultText';
type propsType = {
    style?: string;
    label?: string;
    leftLable?: string;
};
const DefaulCheckbox = (props: propsType) => {
    let { style, label, leftLable } = props;
    return (
        <Box className={`${style} flex items-center justify-between`}>
            {leftLable ? (
                <DefaultText style={'text-[#000] text-[14px]'}>
                    {leftLable}
                </DefaultText>
            ) : null}
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={label}
                className="text-[#8d8c8c]"
            />
        </Box>
    );
};

export default DefaulCheckbox;
