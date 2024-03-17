import { Box, Grid, Typography } from '@mui/material';
import { CloseIcon, SearchIcon, VuesaxLinear } from 'assets/icons/icons';
import { useAppModals } from 'components/Modals';
import SearchInput from 'components/SearchField/searchInput';
import DefaultButton from 'components/deafultButton/DefaultButton';

type Props = {
  numberOfPatient: number;
  handleSearch: ((value: string) => void) | undefined;
};

// schedule_d_t;
// cancel_appointment;
// standard_templates;
export const SearchActionsSection = ({
  handleSearch,
  numberOfPatient,
}: Props) => {
  const appModals = useAppModals();
  const openModal = () => {
    appModals?.show('schedule_d_t');
  };
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
        <DefaultButton title="Выбор колонок" onClick={openModal} />
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
