import { Box, Checkbox, FormControlLabel } from '@mui/material';
type propsType = {
    style?: string;
    label?: string;
};
const DefaulCheckbox = (props: propsType) => {
    let { style, label } = props;
    return (
        <Box className={`${style} flex`}>
            <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={label}
                className="text-[#8d8c8c] "
            />
        </Box>
    );
};

export default DefaulCheckbox;
