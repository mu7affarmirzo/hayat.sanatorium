import { Box, Grid, IconButton } from '@mui/material';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import DefaultText from 'components/defaultText/DefaultText';

type Props = {
    style?: string;
    titleStyle?: string;
    lable?: string;
    children?: any;
    description?: string;
    boxStyle?: string;
    checkBoxStle?: string;
};

const DiagnosticCeckboxItem = ({
    style,
    titleStyle,
    lable,
    children,
    description,
    boxStyle,
    checkBoxStle,
}: Props) => {
    return (
        <Box
            className={` ${style} flex gap-1  justify-between w-[100%] mt-[5px]`}
        >
            <Box
                className={`${
                    checkBoxStle ? checkBoxStle : 'w-[200px]'
                } flex  items-center `}
            >
                <DefaultText style={'text-[#000] text-[14px]'}>
                    {lable}
                </DefaultText>
                <Box className="">{children}</Box>
            </Box>
            <Box className={`${boxStyle} flex flex-1 gap-3`}>
                <DefaultText style={`${titleStyle} text-[#000]`}>
                    {description}
                </DefaultText>
                <Grid item className={` flex items-center gap-2`}>
                    <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        className=" bg-[#64B6F7] rounded-none"
                    >
                        <FileAltIcon stroke="white" />
                    </IconButton>
                    <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        className=" bg-[#64B6F7] rounded-none  "
                    >
                        <FilePlusAltIcon />
                    </IconButton>
                </Grid>
            </Box>
        </Box>
    );
};

export default DiagnosticCeckboxItem;
