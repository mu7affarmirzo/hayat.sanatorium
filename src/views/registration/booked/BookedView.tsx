import { Box, Grid, OutlinedInput, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
interface IFormInput {
    phone: string;
    email: string;
    company: string;
    manager: string;
}

const BookedView = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    return (
        <Grid className=" " container>
            {/* <Grid item xs={12} md={12}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" bg-[#f5f5f5]  py-3 flex justify-between items-center px-[20px] my-[10px] "
                >
                    <Box className=" flex  flex-col  gap-1  w-[40%]">
                        <OutlinedInput
                            className=" bg-[#fff] h-[40px] "
                            {...register('phone', { required: true })}
                        />
                    </Box>
                    <Box className=" flex  flex-col  gap-1  w-[40%]">
                        <OutlinedInput
                            className=" bg-[#fff] h-[40px] "
                            {...register('email', { required: true })}
                        />
                    </Box>
                    <Box className=" flex  flex-col  gap-1  w-[18%]">
                        <OutlinedInput
                            className=" bg-[#fff] h-[40px] "
                            {...register('email', { required: true })}
                        />
                    </Box>
                </form>
            </Grid> */}
        </Grid>
    );
};

export default BookedView;
