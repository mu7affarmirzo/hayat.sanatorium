import { Box, Grid, TextField, Typography } from '@mui/material';
import { ArrowDropSownIcon } from 'assets/icons/icons';
import { useAppModals } from 'components/Modals';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import { PhonePush } from 'components/columnDefs/phonePush';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import FrontFooter from 'components/frontFooter/FrontFooter';
import { SubmitHandler, useForm } from 'react-hook-form';
import DocumentationForm from './components/DocumentationForm';
import HomeAddressForm from './components/HomeAddressForm';
import HospitalStayForm from './components/HospitalStayForm';
import PatientForm from './components/PatientForm';
import PhonePushForm from './components/PhonePushForm';
import TravelPackageForm from './components/TravelPackageForm';
interface IFormInput {
    lastName: string;
    name: string;
    surName: string;
    appeal: string;
}
const polData = [
    {
        id: 0,
        name: '[М] Мужской',
    },
    {
        id: 1,
        name: '[Ж] Женский',
    },
];

export const rowData = [
    {
        number: '137',
        name: 'Ferd Banbrook Connolly',
        group: [],
        arrivalData: '2023-12-06',
        departureDate: '2023-12-15',
        roomType: 'Lyuks A',
        room: '51-929-6443',
        numberOfGuest: 2,
        level: 3,
        howManyTimesUsed: 4,
        capacity: 1,
        occupied: false,
        tariff: 5,
        duration: 9,
        balance: 0,
        paid: 0,
        discount: 0,
        statusRoom: 'clean',
    },
    {
        number: '117',
        name: 'Levi Syde ',
        group: [],
        arrivalData: '2023-12-05',
        departureDate: '2023-12-13',
        roomType: 'Lyuksbk',
        room: '34-631-7219',
        numberOfGuest: 5,
        level: 1,
        howManyTimesUsed: 1,
        capacity: 1,
        occupied: true,
        tariff: 6,
        duration: 8,
        balance: 0,
        paid: 0,
        discount: 0,
        statusRoom: 'clean',
    },
    {
        number: '139',
        name: 'Griffie Pendrey ',
        group: [],
        arrivalData: '2023-12-06',
        departureDate: '2023-12-14',
        roomType: 'Lyuksbk',
        room: '03-447-1912',
        numberOfGuest: 5,
        level: 2,
        howManyTimesUsed: 6,
        capacity: 1,
        occupied: false,
        tariff: 5,
        duration: 8,
        balance: 0,
        paid: 0,
        discount: 0,
        statusRoom: 'clean',
    },
    {
        number: '141',
        name: 'Arlinda Hamm Pimer',
        group: [],
        arrivalData: '2023-12-06',
        departureDate: '2023-12-14',
        roomType: 'Lyuks B',
        room: '53-821-3131',
        numberOfGuest: 6,
        level: 2,
        howManyTimesUsed: 2,
        capacity: 2,
        occupied: true,
        tariff: 6,
        duration: 8,
        balance: 0,
        paid: 0,
        discount: 0,
        statusRoom: 'clean',
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
type propsType = {};

const FrontPageView = (props: propsType) => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    const appModals = useAppModals();

    const Comment = () => {
        return (
            <Box className="w-fill  bg-[#F5F5F5] py-[8px] px-[10px] mt-[10px]">
                <Box className="flex items-center mb-[10px]">
                    <ArrowDropSownIcon />
                    <DefaultText style={'ml-[10px] text-[#000]'}>
                        Комментарий
                    </DefaultText>
                </Box>
                <TextField
                    id="filled-multiline-static"
                    multiline
                    rows={1}
                    className="w-[100%] bg-[white] "
                />
            </Box>
        );
    };

    const HarmFactors = () => {
        return (
            <Box className="w-fill  py-[5px] px-[10px]  border mt-[10px] ">
                <DefaultText style={'mb-[10px] text-[#000]'}>
                    Факторы вредности
                </DefaultText>
                <Box className="flex">
                    <DefaultButton
                        onClick={() => appModals?.show('createPayment')}
                        title="Добавить фактор"
                        style="h-[40px] bg-[#4CAF50] mr-[10px]"
                    />
                    <DefaultButton
                        title="Создать профосмотр"
                        style="h-[40px] bg-[#4CAF50] mr-[10px]"
                    />
                    <DefaultButton
                        title="Отменить фактор"
                        style="h-[40px] bg-[#3397FF]"
                    />
                </Box>
                <Box className="flex py-[8px] px-[10px] border  mt-[10px] items-center">
                    <AutocompleteInput
                        lable="Профессия"
                        data={top100Films}
                        containerStyle={'w-[80%]  flex-col '}
                        inputStyle="w-[100%]"
                        lableStyle="text-[#000]"
                    />
                    <DefaultButton
                        title="Синхронизировать"
                        style="h-[40px] bg-[#3397FF] mt-[20px] ml-[10px]"
                    />
                </Box>
            </Box>
        );
    };

    const TagsBox = () => {
        return (
            <Box className="flex py-[8px] px-[10px] border  mt-[10px] items-center">
                <AutocompleteInput
                    lable="Профессия"
                    data={top100Films}
                    containerStyle={'w-[100%]  flex-col '}
                    inputStyle="w-[100%]"
                    lableStyle="text-[#000]"
                />
            </Box>
        );
    };

    return (
        <Grid container className=" felx">
            <Grid item xs={12} md={12} className=" flex ">
                <Box className="flex w-[50%] justify-end  items-center ">
                    <Typography>История болезни №</Typography>
                    <Box className=" w-[60px] h-[30px] ml-[10px] ">
                        <input className=" bg-[#fff] w-full h-full border-none outline-none  " />
                    </Box>
                </Box>
                <Box className=" flex w-[50%] justify-end  items-center ">
                    <DefaultButton title="новая" />
                </Box>
            </Grid>
            <Grid item xs={12} md={12} className="bg-[white] m-[5px] border">
                <form
                    className="flex   p-[5px] bg-[white]  justify-between  min-h-[calc(100vh-420px)]  h-[calc(100vh-420px)] overflow-scroll  "
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="w-[35%]  ">
                        <Box className="border p-[5px]">
                            <PatientForm
                                polData={polData}
                                avtoCaplektData={top100Films}
                                register={register}
                            />
                            <HomeAddressForm
                                avtoCaplektData={top100Films}
                                register={register}
                            />
                            <PhonePushForm
                                phonePush={PhonePush}
                                avtoCaplektData={top100Films}
                                register={register}
                                rowData={rowData}
                            />
                        </Box>
                        <DocumentationForm
                            avtoCaplektData={top100Films}
                            register={register}
                        />
                    </div>
                    <Box className="w-[64%]">
                        <TravelPackageForm
                            avtoCaplektData={top100Films}
                            register={register}
                            rowData={rowData}
                        />
                        <HospitalStayForm
                            avtoCaplektData={top100Films}
                            register={register}
                        />
                        <Comment />
                        <HarmFactors />
                        <TagsBox />
                    </Box>
                </form>
                <FrontFooter />
            </Grid>
        </Grid>
    );
};

export default FrontPageView;
