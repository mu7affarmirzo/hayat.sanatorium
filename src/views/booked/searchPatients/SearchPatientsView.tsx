import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    MenuItem,
    OutlinedInput,
    TextField,
    Typography,
} from '@mui/material';
import { BookUserIcon, CloseIcon, SearchAltIcon } from 'assets/icons/icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
const SearchPatientsView = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <Grid className=" " container>
            <Grid item xs={12} md={12}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" flex justify-between items-center  my-[10px] "
                >
                    <Box className=" flex  flex-col    w-[39%]">
                        <OutlinedInput
                            className=" bg-[#fff] h-[40px] "
                            {...register('phone', { required: true })}
                            placeholder="ФИО пациента"
                        />
                    </Box>
                    <Box className=" flex  flex-col    w-[39%]">
                        <OutlinedInput
                            className=" bg-[#fff] h-[40px] "
                            {...register('email', { required: true })}
                            placeholder="№ Истории"
                        />
                    </Box>
                    <Box className=" flex  w-[20%]  ">
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Искать среди закрытых историй"
                            className="text-[#8d8c8c] "
                        />
                    </Box>
                </form>
            </Grid>
            <Grid item xs={12} md={12} className="flex  ">
                <Box className=" flex  items-center  w-[30%]">
                    <Box className=" flex  items-center  w-[50%]">
                        <Typography className=" text-[14px] font-normal text-[#8d8c8c] mr-[5px] ">
                            Приезд с:
                        </Typography>

                        <TextField
                            select
                            defaultValue="1"
                            className="w-[65%] bg-[white] "
                            size="small"
                        >
                            {currencies.map((option: any) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box className=" flex  items-center  w-[50%]  ">
                        <Typography className=" text-[14px] font-normal text-[#8d8c8c] mr-[5px] ">
                            по:
                        </Typography>

                        <TextField
                            select
                            defaultValue="1"
                            className="w-[65%] bg-[white] "
                            size="small"
                        >
                            {currencies.map((option: any) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Box>
                <Box className=" flex items-center  w-[70%]  ">
                    <TextField
                        select
                        defaultValue="1"
                        className="w-[100%] bg-[white] "
                        size="small"
                    >
                        {currencies.map((option: any) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
            </Grid>
            <Grid item xs={12} md={12} className="flex mt-[10px]  ">
                <Box className=" flex  items-center  w-[30%]">
                    <Box className=" flex  items-center  w-[50%]">
                        <Typography className=" text-[14px] font-normal text-[#8d8c8c] mr-[5px] ">
                            Приезд с:
                        </Typography>

                        <TextField
                            select
                            defaultValue="1"
                            className="w-[65%] bg-[white] "
                            size="small"
                        >
                            {currencies.map((option: any) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box className=" flex  items-center  w-[50%]  ">
                        <Typography className=" text-[14px] font-normal text-[#8d8c8c] mr-[5px] ">
                            по:
                        </Typography>

                        <TextField
                            select
                            defaultValue="1"
                            className="w-[65%] bg-[white] "
                            size="small"
                        >
                            {currencies.map((option: any) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Box>
                <Box className=" flex items-center  w-[35%]  ">
                    <TextField
                        select
                        defaultValue="1"
                        className="w-[100%] bg-[white] "
                        size="small"
                    >
                        {currencies.map((option: any) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box className=" flex  items-center  w-[35%] pl-[10px]">
                    <Box className=" flex    items-center   w-[30%]  justify-end ">
                        <Typography className=" text-[14px] font-normal text-[#8d8c8c] mr-[5px] ">
                            Комната:
                        </Typography>
                        <OutlinedInput
                            className=" bg-[#fff] h-[40px] "
                            {...register('phone', { required: true })}
                        />
                    </Box>
                    <Box className=" flex  items-center  w-[35%]   justify-end">
                        <Typography className=" text-[14px] font-normal text-[#8d8c8c] mr-[5px] ">
                            Этаж:
                        </Typography>

                        <TextField
                            select
                            defaultValue="1"
                            className="w-[70%] bg-[white] "
                            size="small"
                        >
                            {currencies.map((option: any) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <Box className=" flex  items-center  w-[35%] justify-end ">
                        <Typography className=" text-[14px] font-normal text-[#8d8c8c] mr-[5px] ">
                            Тип:
                        </Typography>

                        <TextField
                            select
                            defaultValue="1"
                            className="w-[70%] bg-[white] "
                            size="small"
                        >
                            {currencies.map((option: any) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                md={12}
                className="flex mt-[10px] justify-between "
            >
                <Box className="">
                    <Button
                        variant="contained"
                        startIcon={<BookUserIcon />}
                        className=" bg-[#4CAF50] h-[46px] text-[#fff] text-[14px]  capitalize "
                    >
                        Добавить историю болезни
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<BookUserIcon />}
                        className=" bg-[#4CAF50] h-[46px] text-[#fff] text-[14px]  capitalize ml-[10px] "
                    >
                        Добавить амбулаторную карту
                    </Button>
                </Box>
                <Box>
                    <Button
                        variant="contained"
                        startIcon={<SearchAltIcon stroke="white" />}
                        className=" bg-[#2196F3] h-[46px] text-[#fff] text-[14px]  capitalize "
                    >
                        Поиск
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<CloseIcon stroke="white" />}
                        className=" bg-[#2196F3] h-[46px] text-[#fff] text-[14px]  capitalize ml-[10px] "
                    >
                        Очистить фильтр
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default SearchPatientsView;
