import { Typography, Box, Grid } from '@mui/material';
import { VuesaxLinear, SearchIcon, CloseIcon } from 'assets/icons/icons';
import DefaultButton from 'components/DeafultButton/DefaultButton';
import SearchInput from 'components/SearchField/searchInput';

type Props = {
  numberOfPatient: number;
  handleSearch: ((value: string) => void) | undefined;
};

export const SearchActionsSection = ({
  handleSearch,
  numberOfPatient,
}: Props) => {
  return (
    <Grid
      item
      xs={12}
      md={12}
      className="flex items-center justify-between my-2">
      <Grid item xs={12} md={8} className=" flex items-center gap-[30px]">
        <Typography className="text-[#8d8c8c] ">
          Найдено записей: {numberOfPatient}
        </Typography>
        <Box className="w-[70%]">
          <SearchInput placeholder="Искать в таблице" onChange={handleSearch} />
        </Box>
      </Grid>
      <Grid item xs={12} md={4} className="flex justify-between">
        <DefaultButton title="Выбор колонок" />
        <DefaultButton title="Ехсеl" icon={<VuesaxLinear />} />
        <DefaultButton
          title="Поиск"
          icon={<SearchIcon stroke="white" />}
          submitType="submit"
        />
        <DefaultButton
          title="Очистить фильтр"
          icon={<CloseIcon stroke="white" />}
          submitType="reset"
        />
      </Grid>
    </Grid>
  );
};
