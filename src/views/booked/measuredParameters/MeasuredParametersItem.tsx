import { Box } from '@mui/material';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';

const MeasuredParametersItem = () => {
    return (
        <Box className="w-[100%] border border-t-0 p-[5px] bg-[#fff] flex justify-between h-[calc(100vh-340px)] max-h-[calc(100vh-340px)]">
            <Box className="w-[40%]  h-[100%] ">
                <Box>
                    <DefaultButton
                        title="Добавить"
                        style="w-[100%] bg-[#4CAF50] text-[#fff] h-[40px] mt-[5px]"
                    />
                </Box>
                <Box className="border w-[100%] h-[calc(100%-50px)] mt-[5px]">
                    <Box className="flex flex-col items-start justify-start max-h-[400px] h-[400px] overflow-scroll w-[100%]">
                        <Box className="flex bg-[#64B6F7] w-full border items-center z-0">
                            {/* <Box className="w-[30px] h-[30px] border-r-[1px] border-[#605e5e] "></Box> */}
                            <Box className="border-r-[1px] border-[#605e5e] w-[30px] h-[30px] flex justify-center items-center"></Box>
                            <Box className="w-[calc(20%+30px)] h-[30px] flex flex-col justify-center">
                                <DefaultText
                                    style={'text-[14px] text-[#000] ml-[10px]'}
                                >
                                    Систолическое
                                </DefaultText>
                            </Box>
                            <Box className="border-l-[1px] border-[#605e5e] w-[35%] h-[30px] flex flex-col justify-center">
                                <DefaultText
                                    style={'text-[14px] text-[#000] ml-[10px]'}
                                >
                                    Диастолическое
                                </DefaultText>
                            </Box>
                            <Box className="border-l-[1px] border-[#605e5e] w-[15%] h-[30px] flex flex-col justify-center">
                                <DefaultText
                                    style={'text-[14px] text-[#000] ml-[10px]'}
                                >
                                    Дата
                                </DefaultText>
                            </Box>
                            <Box className="border-l-[1px] border-[#605e5e] w-[15%] h-[30px] flex flex-col justify-center">
                                <DefaultText
                                    style={'text-[14px] text-[#000] ml-[10px]'}
                                >
                                    Добавить
                                </DefaultText>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="w-[calc(60%-10px)] h-[100%] border flex justify-center items-center ">
                <DefaultText>Данные по измерениям не введены</DefaultText>
            </Box>
        </Box>
    );
};

export default MeasuredParametersItem;
