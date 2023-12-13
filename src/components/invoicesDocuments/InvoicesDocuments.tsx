import { Box, Grid, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import { useState } from 'react';

const InvoicesDocuments = () => {
    const [age, setAge] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <Grid container className="w-full h-full">
            <Grid item xs={12} md={12} className="p-[5px]">
                <DefaultText style={'text-[#000]'}>Документы</DefaultText>
            </Grid>
            <Grid item xs={12} md={12} className="p-[5px] border">
                <DefaultText>Файлы</DefaultText>
                <Box className="flex p-[5px]">
                    <DefaultButton
                        title="Добавить файлы автоматически"
                        style="bg-[#4CAF50]"
                    />
                    <DefaultButton
                        style="bg-[#2196F3] ml-[5px]"
                        title="Добавить файл"
                    />
                    <DefaultButton
                        style="bg-[#2196F3] ml-[5px]"
                        title="Сканировать"
                    />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Box>
            </Grid>
        </Grid>
    );
};

export default InvoicesDocuments;
