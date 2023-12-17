import { Box } from '@mui/material';
import AutocompleteInputCheck from 'components/AutocompleteInputCheck';
type propsType = {
    data: any;
    lable?: string;
};
const TagsBox = (props: propsType) => {
    return (
        <Box className="flex py-[8px] px-[10px] border  mt-[10px] items-center">
            <AutocompleteInputCheck
                lable={props.lable}
                data={props.data}
                containerStyle={'w-[100%]  flex-col '}
                inputStyle="w-[100%]"
                lableStyle="text-[#000]"
            />
        </Box>
    );
};

export default TagsBox;
