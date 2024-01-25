import { Box, Grid, TextField, Typography } from '@mui/material';
import { ArrowDropSownIcon } from 'assets/icons/icons';
import { useAppModals } from 'components/Modals';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import { PhonePush } from 'components/columnDefs/phonePush';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import FrontFooter from 'components/frontFooter/FrontFooter';
import { SubmitHandler, useForm } from 'react-hook-form';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import RadioForm from 'components/RadioForm';

import DefaulCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnostikaItem from 'views/booked/frontPage/components/DiagnostikaItem';
import DocumentationForm from 'views/booked/frontPage/components/DocumentationForm';
import HomeAddressForm from 'views/booked/frontPage/components/HomeAddressForm';
import HospitalStayForm from 'views/booked/frontPage/components/HospitalStayForm';
import PatientForm from 'views/booked/frontPage/components/PatientForm';
import PhonePushForm from 'views/booked/frontPage/components/PhonePushForm';
import TagsBox from 'views/booked/frontPage/components/TagsBox';
import StaySanatorium from 'views/dispatching/components/StaySanatorium';
import CustomizedAccordions from 'components/CustomizedAccordions';
import PhoneAddForm from 'views/dispatching/components/PhoneAddForm';

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

const radioForm = [
    {
        id: 0,
        value: 'gentle',
        label: 'Щадящий',
    },
    {
        id: 1,
        value: 'bed',
        label: 'Постельный',
    },
    {
        id: 2,
        value: 'tonic',
        label: 'Тонизирующий',
    },
    {
        id: 3,
        value: 'coaching',
        label: 'Тренирующий',
    },
];
const radioForm2 = [
    {
        id: 0,
        value: 'shown',
        label: 'Показан',
    },
    {
        id: 1,
        value: 'notShown',
        label: 'Не показан',
    },
    {
        id: 2,
        value: 'contraindicated',
        label: 'Противопоказан',
    },
];

const DispatchFrontPage = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    const appModals = useAppModals();

    const Comment = () => {
        return (
            <CustomizedAccordions
                title="Комментарий"
                childrenStyle={{
                    background: '#F5F5F5',
                    display: 'flex',
                    padding: '10px',
                }}
                topBoxStyle={{ background: '#F5F5F5', marginTop: '10px' }}
            >
                <TextField
                    id="filled-multiline-static"
                    multiline
                    rows={1}
                    className="w-[100%] bg-[white] "
                />
            </CustomizedAccordions>
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
                        onClick={() => appModals?.show('professionalRoute')}
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

    const ModeHandler = () => {
        return (
            <Box className="flex justify-between">
                <Box className=" border  w-[35%] px-[10px] py-[8px]">
                    <DefaultText style={'text-[14px] text-[#000]'}>
                        Режим
                    </DefaultText>
                    <Box className="flex">
                        <Box className="w-[60%] ">
                            <RadioForm data={radioForm} />
                        </Box>
                        <Box className=" mt-[5px]">
                            <DefaultButton
                                onClick={() => appModals?.show('add_reason')}
                                title="Добавить причину"
                                style=" bg-[#4CAF50] "
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className=" border  w-[64.5%] px-[10px] py-[8px] ">
                    <DefaultText style={'text-[14px] text-[#000]'}>
                        Режим
                    </DefaultText>
                    <Box className="flex  justify-between">
                        <Box className="w-[60%] ">
                            <RadioForm data={radioForm2} />
                        </Box>
                        <Box className=" mt-[5px]">
                            <DefaultButton
                                onClick={() => appModals?.show('add_reason')}
                                title="Добавить причину"
                                style=" bg-[#4CAF50] "
                            />
                        </Box>
                    </Box>
                    <Box className="mt-[10px]">
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={1}
                            className="w-[100%] bg-[white] "
                        />
                    </Box>
                </Box>
            </Box>
        );
    };

    const DiagnostHandler = () => {
        return (
            <>
                <DiagnostikaItem
                    title="Диагноз с места отбора"
                    text="Диагноз не задан."
                    btnTitle="Добавить диагноз"
                    onClick={() => appModals?.show('choosingDiagnosis')}
                />
                <DiagnostikaItem
                    title="Диагноз стационара при поступлении"
                    text="Диагноз не определен"
                />
                <DiagnostikaItem
                    title="Диагноз стационара при выписке"
                    text="Диагноз не определен"
                />
            </>
        );
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container className=" felx">
                <Grid item xs={12} md={12} className=" flex ">
                    <Box className="flex w-[50%] justify-end  items-center ">
                        <Typography>История болезни №</Typography>
                        <Box className=" w-[60px] h-[30px] ml-[10px] ">
                            <input className=" bg-[#fff] w-full h-full border-none outline-none  " />
                        </Box>
                    </Box>
                    <Box className=" flex w-[50%] justify-end  items-center pr-[10px] py-[5px] ">
                        <DefaultButton
                            title="ИБ открыта"
                            style="bg-[#2196F3] w-[100px] h-[40px] text-[#fff] text-[14px] p-[0]"
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    className="bg-[white] m-[5px] border min-h-[calc(100vh-280px)]  h-[calc(100vh-280px)] overflow-scroll  p-[5px]"
                >
                    <form
                        className="flex   bg-[white]  justify-between  "
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
                                <PhoneAddForm
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
                            <StaySanatorium
                                avtoCaplektData={top100Films}
                                register={register}
                                rowData={rowData}
                            />

                            <Comment />
                            <HarmFactors />
                        </Box>
                    </form>
                    <FrontFooter />
                    {/* <ModeHandler />
                    <DiagnostHandler />
                    <Box className="flex justify-between">
                        <Box className="w-[35%]">
                            <TagsBox
                                data={top100FilmsChack}
                                lable="Факторы риска"
                            />
                        </Box>
                        <Box className="w-[64.5%]">
                            <TagsBox data={top100FilmsChack} lable="Метки" />
                        </Box>
                    </Box>
                    <Box className="border my-[5px] px-[10px] py-[8px]">
                        <DefaulCheckbox
                            label="нет"
                            leftLable="Аллергия:"
                            style="w-[350px]"
                        />
                        <DefaulCheckbox
                            label="нет"
                            leftLable="Метеолабильность:"
                            style="w-[350px]"
                        />
                        <DefaulCheckbox
                            label="нет"
                            leftLable="Непереносимость продуктов!"
                            style="w-[350px]"
                        />
                        <DefaulCheckbox
                            label="нет"
                            leftLable="Нарушения стула:"
                            style="w-[350px]"
                        />
                        <DefaulCheckbox
                            label="нет"
                            leftLable="Получает постоянно медикаменты:"
                            style="w-[350px]"
                        />
                    </Box> */}
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
};

export default DispatchFrontPage;
