import { Box } from '@mui/material';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
type propsType = {
    title?: string;
    btnTitle?: string;
    onClick?: () => void;
    text?: string;
};
const DiagnostikaItem = (props: propsType) => {
    return (
        <Box className="border my-[5px] px-[10px] py-[8px]">
            <DefaultText style={'text-[#000] text-[14px] mb-[5px]'}>
                {props.title}
            </DefaultText>
            <Box className="flex items-end ">
                <DefaultText>{props.text}</DefaultText>
                {props?.btnTitle ? (
                    <DefaultButton
                        onClick={props.onClick}
                        title={props.btnTitle}
                        style=" bg-[#4CAF50] ml-[10px] "
                    />
                ) : null}
            </Box>
        </Box>
    );
};

export default DiagnostikaItem;
