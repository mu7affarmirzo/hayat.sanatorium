import { Box, IconButton } from '@mui/material';
import { FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import OutlinedNumber from 'components/outlinedNumber/OutlinedNumber';
type propsType = {
    title?: string;
    btnTitle?: string;
    onClick?: () => void;
    text?: string;
    message?: string;
    outline?: boolean;
    children?: any;
    style?: string;
    messageStyle?: string;
    titleStyle?: string;
    btnStyle?: string;
    disabled?: boolean;
};
const DiagnostikaItem = (props: propsType) => {
    return (
        <Box
            className={` ${props.style} border px-[10px] py-[10px] flex flex-col gap-1 mb-[10px]`}
        >
            <DefaultText style={`${props.titleStyle} text-[#000]  mb-[10px]`}>
                {props.title}
            </DefaultText>
            {props.message ? (
                <Box className="flex justify-between">
                    <Box
                        className={`${props.messageStyle} border rounded-[4px] p-[10px] w-full min-h-[110px]`}
                    >
                        <DefaultText style={'text-[#0057B2]'}>
                            {props.message}
                        </DefaultText>
                    </Box>
                    <Box className="flex flex-col  ml-[10px]">
                        <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                            className=" bg-[#64B6F7] rounded-none  mx-[3px]"
                        >
                            <FileAltIcon stroke="white" />
                        </IconButton>
                        <IconButton
                            color="primary"
                            aria-label="add to shopping cart"
                            className=" bg-[#64B6F7] rounded-none  mx-[3px] mt-[5px]"
                        >
                            <FilePlusAltIcon />
                        </IconButton>
                    </Box>
                </Box>
            ) : null}
            <Box
                className={`flex items-center  w-[100%] ${props.outline ? 'mt-[10px] ' : 'mt-[0px]'
                    }  `}
            >
                {props.text ? (
                    <DefaultText style={'text-[#000] text-[14px]'}>
                        {props.text}
                    </DefaultText>
                ) : null}

                {props?.btnTitle ? (
                    <DefaultButton
                        onClick={props.onClick}
                        title={props.btnTitle}
                        style={` ${props.btnStyle} bg-[#4CAF50]  ml-[10px] text-[#fff]`}
                        disabled={props.disabled}
                    />
                ) : null}
                {props.outline ? (
                    <Box className="flex w-[70%]  ">
                        <OutlinedNumber
                            containerStyle="flex-col w-[100px] ml-[10px] "
                            inputStyle="w-[100%]"
                            inputBoxStyle="flex-row-reverse"
                        />
                        <OutlinedNumber
                            containerStyle="flex w-[100px]  "
                            inputStyle="w-[90%]"
                            text="/"
                            inputBoxStyle="flex-row-reverse"
                        />
                        <OutlinedNumber
                            containerStyle="flex-col w-[230px]  "
                            inputStyle="w-[50%]"
                            text="ЧСС (уд./мин):"
                            inputBoxStyle="flex-row-reverse"
                        />
                        <OutlinedNumber
                            containerStyle="flex-col w-[250px]  "
                            inputStyle="w-[45%]"
                            text="температура тела:"
                            inputBoxStyle="flex-row-reverse"
                        />
                    </Box>
                ) : null}
            </Box>
            {props.children ? <Box>{props.children}</Box> : null}
        </Box>
    );
};

export default DiagnostikaItem;
