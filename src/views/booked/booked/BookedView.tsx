import { Box, Grid } from '@mui/material';
import { CloseIcon, SearchAltIcon } from 'assets/icons/icons';
import { useAppModals } from 'components/Modals';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import { BookedCol } from 'components/columnDefs/bookedCol';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultInput from 'components/defaultInput/DefaultInput';
import DefaultText from 'components/defaultText/DefaultText';
import ReceptionTable from 'components/receptionTable/ReceptionTable';
import SearchInput from 'components/search/SearchInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { rowData } from '../frontPage/FrontPageView';
interface IFormInput {
    phone: string;
    email: string;
    company: string;
    manager: string;
}
const currencies = [
    {
        value: '1',
        label: '07.04.1997',
    },
    {
        value: '2',
        label: '07.04.1997',
    },
    {
        value: '3',
        label: '07.04.1997',
    },
    {
        value: '4',
        label: '07.04.1997',
    },
];
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
];
const BookedView = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    const appModals = useAppModals();

    return (
        <Grid className=" " container>
            <Grid item xs={12} md={12}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" flex justify-between items-center  my-[10px] "
                >
                    <DefaultInput
                        register={register}
                        inputType={'phone'}
                        placeholder="ФИО пациента"
                        containerStile="w-[50%]"
                    />
                    <Box className=" flex justify-between items-center  ">
                        <AutocompleteInput
                            lable="Приезд с:"
                            data={top100Films}
                            containerStyle={'flex-row items-center '}
                            inputStyle="w-[150px]"
                        />
                        <AutocompleteInput
                            lable="по:"
                            data={top100Films}
                            containerStyle={'flex-row items-center ml-[10px] '}
                            inputStyle="w-[150px]"
                        />
                    </Box>

                    <Box>
                        <DefaultButton
                            title=" Поиск"
                            icon={<SearchAltIcon stroke="white" />}
                            style="bg-[#2196F3] h-[46px] text-[#fff] text-[14px]  capitalize  mr-[10px]"
                        />
                        <DefaultButton
                            title="Очистить фильтр"
                            icon={<CloseIcon stroke="white" />}
                        />
                    </Box>
                </form>
            </Grid>
            <Grid item xs={12} md={12}>
                <Grid
                    item
                    xs={12}
                    md={12}
                    className="  flex justify-between items-center  "
                >
                    <DefaultText style="  text-[16px]  font-normal text-[#000] ">
                        Найдено записей: 1
                    </DefaultText>
                </Grid>

                <Grid item xs={12} md={12} className="mt-[10px] bg-[#F5F5F5] ">
                    <SearchInput placeholder="Искать в таблице" />
                </Grid>
                <Grid item xs={12} md={12} className=" bg-[#F5F5F5]">
                    <ReceptionTable
                        columnDefs={BookedCol}
                        rowData={rowData}
                        height="h-[65vh]"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default BookedView;
