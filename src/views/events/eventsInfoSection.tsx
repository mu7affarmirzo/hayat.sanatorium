import { Box, Grid } from '@mui/material';
import { SearchIcon, CloseIcon } from 'assets/icons/icons';
import DefaultButton from 'components/DeafultButton/DefaultButton';
import SearchInput from 'components/SearchField/searchInput';

const EventsInfoSection = () => {
  return (
    <Grid
      item
      xs={12}
      md={12}
      className="flex items-center justify-between py-[10px] ">
      <Box className=" w-[60%] flex items-center">
        <SearchInput placeholder="Искать в таблице" />
      </Box>
      <DefaultButton
        classStyle=" bg-[#f5f5f5] text-[#a1a1a1]"
        title="Отметить как прочитанные"
      />
      <Box className=" flex gap-3">
        <DefaultButton title="Поиск" icon={<SearchIcon stroke="white" />} />
        <DefaultButton
          title="Очистить фильтр"
          icon={<CloseIcon stroke="white" />}
        />
      </Box>
    </Grid>
  );
};

export default EventsInfoSection;
