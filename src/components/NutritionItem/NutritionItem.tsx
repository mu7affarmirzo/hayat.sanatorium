import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CloseIcon, FileAltIcon, FilePlusAltIcon } from 'assets/icons/icons';
import './style.css';
import { Box, IconButton, TableContainer } from '@mui/material';
import DefaultInput from 'components/defaultInput/DefaultInput';
import { useForm } from 'react-hook-form';
interface IFormInput {
    lastName: string;
    name: string;
    surName: string;
    appeal: string;
}
function MyRoomType(params: any) {
    return (
        <div className="flex  items-center justify-center  w-[100%] h-[100%] cursor-pointer  ">
            <button className="w-[20px] h-[20px] rounded-[50%]  flex justify-center items-center bg-[#F79E98]">
                <CloseIcon stroke="white" />
            </button>
        </div>
    );
}
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0)];
type propsType = {
    data?: any;
};
const NutritionItem = (props: propsType) => {
    const { register } = useForm<IFormInput>();
    return (
        <div className="p-[5px]">
            <TableContainer sx={{ paddingBottom: '10px' }}>
                {props.data.map((item: any) => {
                    return (
                        <Table
                            sx={{
                                minWidth: '100%',
                                width: '1500px',
                                overflow: 'scroll',
                                margin: '5px 0',
                            }}
                            size="small"
                            className=" border-[1px]  bg-[#F8ED8D] "
                        >
                            <TableBody key={item.id}>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell
                                            className="w-[40px] border-r-[1px] border-r-[#c1bfbf]"
                                            sx={{ padding: '2px 0' }}
                                        >
                                            <MyRoomType />
                                        </TableCell>
                                        <TableCell
                                            className="w-[400px]  border-r-[1px] border-r-[#c1bfbf] px-[10px] overflow-hidden "
                                            sx={{ padding: '2px 0' }}
                                        >
                                            <Box className={'w-[100%] flex'}>
                                                <DefaultInput
                                                    register={register}
                                                    inputType={'lastName'}
                                                    containerStile="w-[80%] p-[0] gap-[0] "
                                                />
                                                <IconButton
                                                    color="primary"
                                                    aria-label="add to shopping cart"
                                                    className=" bg-[#64B6F7] rounded-none  mx-[3px]"
                                                >
                                                    <FileAltIcon stroke="white" />
                                                </IconButton>
                                                <IconButton
                                                    color="primary"
                                                    aria-label="add to shopping cart"
                                                    className=" bg-[#64B6F7] rounded-none  mx-[3px]"
                                                >
                                                    <FilePlusAltIcon />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                        <TableCell
                                            sx={{ padding: '2px 0' }}
                                            className="w-[190px]  border-r-[1px] border-r-[#c1bfbf] px-[10px]  "
                                        >
                                            05.08.2023
                                        </TableCell>
                                        <TableCell
                                            sx={{ padding: '2px 0' }}
                                            className="w-[190px]  border-r-[1px] border-r-[#c1bfbf] px-[10px]  "
                                        ></TableCell>
                                        <TableCell
                                            sx={{ padding: '2px 0' }}
                                            className="w-[140px]  border-r-[1px] border-r-[#c1bfbf] px-[10px]  "
                                        >
                                            Мухитдинов Ж.К.
                                        </TableCell>
                                        <TableCell
                                            sx={{ padding: '2px 0' }}
                                            className="w-[140px]  border-r-[1px] border-r-[#c1bfbf] px-[10px]  "
                                        >
                                            05.08.2023
                                        </TableCell>
                                        <TableCell
                                            sx={{ padding: '2px 0' }}
                                            className="w-[400px]  border-r-[1px] border-r-[#c1bfbf] px-[10px]  "
                                        ></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    );
                })}
            </TableContainer>
        </div>
    );
};

export default NutritionItem;
