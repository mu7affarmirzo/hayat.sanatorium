import { Box, Typography } from '@mui/material';
import Dropdown from 'components/NestedDropdownMenu/ReuseableDropdown';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import { DropdownMenuItem } from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs';
import AdvancedModal from 'components/Modals/ReuseableModal/reuseableModal';
import { useConsultingAndResearchHook } from './hook';
import { ConsultingModalView } from '../components/ConsultingModal';
import { ReSearchModalView } from '../components/ReSearchModal';

const AppointmentConsultaionOptions: DropdownMenuItem[] = [
  {
    id: 1,
    title: 'Консультацию',
  },
  {
    id: 2,
    title: 'Исследование',
  },
  {
    id: 3,
    title: 'Мой приём',
    subMenu: [
      {
        id: 1,
        title: 'МРТ органов малого таза',
      },
      {
        id: 2,
        title:
          'МРТ органов малого таза с контрастным усилением (контраст от пациента)',
      },
      {
        id: 3,
        title: 'Рентген бедренной кости',
      },
      {
        id: 4,
        title: 'Рентген брюшной полости',
      },
      {
        id: 5,
        title: 'Рентген голени',
      },
      {
        id: 6,
        title: 'Рентген грудной клетки',
      },
    ],
  },
];

export const ConsultingAndResearchView = () => {
  const {
    consultationModalOpen,
    handleClickPopupMenu,
    studiesModalOpen,
    handleCloseModal,
  } = useConsultingAndResearchHook();

  return (
    <Box className="border p-2 my-2">
      <SectionTitle
        title="Консультации и исследования"
        className="text-base font-medium"
      />
      <Box className="flex flx-row items-center justify-start gap-3">
        <Typography className="text-sm text-black">
          Консультации и исследования не назначены.
        </Typography>
        <Dropdown
          title="Добавить"
          data={AppointmentConsultaionOptions}
          handleClicked={handleClickPopupMenu}
          styles="bg-[#4CAF50] text-[#fff] h-[30px]"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        />
        <AdvancedModal
          modalTitle={'Выбор назначений'}
          open={consultationModalOpen || studiesModalOpen}
          onClose={() =>
            handleCloseModal(consultationModalOpen ? 'consultation' : 'studies')
          }
          children={
            consultationModalOpen ? (
              <ConsultingModalView />
            ) : (
              <ReSearchModalView />
            )
          }
        />
      </Box>
    </Box>
  );
};
