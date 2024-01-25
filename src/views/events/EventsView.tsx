import { Box, Grid, Typography } from '@mui/material';
import { CloseIcon, InfoCircle, SearchIcon } from 'assets/icons/icons';
import CustomizedAccordions from 'components/CustomizedAccordions';
import RadioForm from 'components/RadioForm';
import AutocompleteInput from 'components/autocompleteInput/AutocompleteInput';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultInput from 'components/defaultInput/DefaultInput';
import SearchInput from 'components/search/SearchInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ColData } from './components/ColData';
import EventsTableGroup from './components/EventsTableGroup';

interface IFormInput {
    phone: string;
    email: string;
    company: string;
    manager: string;
}
const radioForm = [
    {
        id: 0,
        value: 'notShown',
        label: 'Cito!',
    },
    {
        id: 1,
        value: 'contraindicated',
        label: 'Важно',
    },
    {
        id: 2,
        value: 'shown',
        label: 'Информация',
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

const rowData = [
    {
        id: 1,
        group: 'Вчера',
        event: 'Исследование проведено: Комплексное УЗИ для мужчин (щитовид.ж-за, печень + ж/п, поджелуд.ж-за, селезенка,почки, мочевой пуз.мочеточник и простата)',
        name: 'Ашрапов Рихсиддин',
        date: '09.06.2023 10:45:09',
        room: '207.1 (Корпус 1)',
        arrivalDate: '27.05.2023 9:23:19',
        dateDeparture: '06.06.2023 0:00:00',
    },
    {
        id: 2,
        group: 'На этой неделе',
        event: 'Исследование проведено: Комплексное УЗИ для мужчин (щитовид.ж-за, печень + ж/п, поджелуд.ж-за, селезенка,почки, мочевой пуз.мочеточник и простата)',
        name: 'Ашрапов Рихсиддин',
        date: '09.06.2023 10:45:09',
        room: '207.1 (Корпус 1)',
        arrivalDate: '27.05.2023 9:23:19',
        dateDeparture: '06.06.2023 0:00:00',
    },
];

const EventsView = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <>
            <Grid container>
                <CustomizedAccordions
                    title="Параметры поиска:"
                    childrenStyle={{ background: '#F5F5F5' }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid item xs={12} md={12}>
                            <Grid
                                container
                                className="flex justify-between items-center "
                            >
                                <Grid item xs={3}>
                                    <DefaultInput
                                        placeholder="ФИО пациента"
                                        inputType={'string'}
                                        register={register}
                                    />
                                </Grid>
                                <Grid item xs={4.1} className=" pl-[10px]">
                                    <Box className=" border-l-2 flex items-center gap-[20px] pl-[10px]">
                                        <Typography>
                                            Важность события:
                                        </Typography>
                                        <RadioForm
                                            data={radioForm}
                                            style="w-[calc(100%-200px)]"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={3.2}>
                                    <Box className="flex  gap-2">
                                        <Box className="flex items-center gap-2  border-l-2 pl-[15px]">
                                            <Typography>
                                                Дата события с
                                            </Typography>
                                            <AutocompleteInput
                                                data={top100Films}
                                                containerStyle={
                                                    'flex-row items-center '
                                                }
                                                inputStyle="w-[120px]"
                                            />
                                        </Box>
                                        <Box className="flex items-center gap-2">
                                            <Typography>по:</Typography>
                                            <AutocompleteInput
                                                data={top100Films}
                                                containerStyle={
                                                    'flex-row items-center '
                                                }
                                                inputStyle="w-[120px]"
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={1.7}>
                                    <DefaultCheckbox label="Только непрочитанные" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </CustomizedAccordions>
                <Grid
                    item
                    xs={12}
                    md={12}
                    className="flex items-center justify-between py-[10px] "
                >
                    <Box className=" w-[60%] flex items-center">
                        <SearchInput placeholder="Искать в таблице" />
                    </Box>
                    <DefaultButton
                        style=" bg-[#f5f5f5] text-[#a1a1a1]"
                        title="Отметить как прочитанные"
                    />
                    <Box className=" flex gap-3">
                        <DefaultButton
                            title="Поиск"
                            icon={<SearchIcon stroke="white" />}
                        />
                        <DefaultButton
                            title="Очистить фильтр"
                            icon={<CloseIcon stroke="white" />}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={12} className=" bg-[#F5F5F5]">
                    <EventsTableGroup
                        columnDefs={ColData}
                        rowData={rowData}
                        height="h-[50vh]"
                        icons={<InfoCircle />}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default EventsView;
