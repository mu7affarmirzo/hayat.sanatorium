import { Box, IconButton, Typography } from '@mui/material';
import { FilePlusAltIcon } from 'assets/icons/icons';
import { useAppModals } from 'components/Modals';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];
const ResearchSummaryTableView = () => {
    const appModals = useAppModals();

    return (
        <Box className=" h-[calc(100vh-225px)]  p-[10px] overflow-hidden ">
            <Box className=" flex h-[35px] items-start  justify-between   ">
                <DefaultText style={'text-[#000] text-[14px]'}>
                    Сводная таблица исследований
                </DefaultText>
            </Box>
            <Box className="h-[calc(100vh-280px)]  border border-[rgba(0, 0, 0, 0.23)] flex justify-between p-[5px] bg-[#fff]">
                <Box className="w-[30%] h-full p-[6px] bg-[#F5F5F5]">
                    <Box className="w-[100%] h-full bg-[#fff]">
                        <Box className="flex w-[100%]">
                            <AutocompleteInput
                                data={top100Films}
                                placeholder="Выбрать профиль"
                                containerStyle="w-[calc(100%-40px)] "
                                inputStyle="w-[100%]"
                            />
                            <IconButton
                                color="primary"
                                aria-label="add to shopping cart"
                                className=" bg-[#64B6F7] rounded-none  ml-[6px]"
                            >
                                <FilePlusAltIcon />
                            </IconButton>
                        </Box>
                        <Box className="mt-[5px]  border flex w-[100%]">
                            <DefaultCheckbox
                                checkboxStyle={{
                                    padding: '0 3px',
                                    bacgroundColor: '#fff',
                                }}
                            />
                            <Box className=" bg-[#F8ED8D]  py-[3px] h-full w-[calc(100%-30px)]">
                                <Typography className="text-[14px] text-[#000] ml-[5px]">
                                    Исследование
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="w-[calc(70%-6px)] h-full p-[6px] bg-[#F5F5F5]">
                    <Box className="flex w-full items-center">
                        <DefaultButton
                            title="Создать назначения"
                            style="bg-[#4CAF50] h-[35px] mr-[10px]"
                            onClick={() =>
                                appModals?.show('create_destinations')
                            }
                        />
                        <DefaultCheckbox
                            checkboxStyle={{ padding: '0 5px' }}
                            label="Показать только отклонения"
                        />
                    </Box>
                    <Box className="mt-[10px]">
                        <DefaultText>
                            В данной ИБ нет проведенных исследований
                        </DefaultText>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ResearchSummaryTableView;
