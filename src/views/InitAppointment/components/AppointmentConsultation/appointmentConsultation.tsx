/* eslint-disable react/style-prop-object */
import { Box } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultText from 'components/defaultText/DefaultText';
import { useAppointmentConsultationActions } from './hook';
import { DropdownMenuItem } from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs';
import Dropdown from 'components/NestedDropdownMenu/ReuseableDropdown';
import AdvancedModal from 'components/Modals/ReuseableModal/reuseableModal';
import AppointmentCosultationModal from './consultationModal';
import AppointmentStudiesModal from './studiesModal';

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

export const AppointmentConsultationActions = () => {
  const {
    handleClickPopupMenu,
    consultationModalOpen,
    studiesModalOpen,
    setConsultationModal,
    setStudiesModal,
    data,
    handleCheckboxChange,
    selectedItems,
  } = useAppointmentConsultationActions();

  const handleCloseModal = (modalType: string) => {
    if (modalType === 'consultation') {
      setConsultationModal(false);
    } else if (modalType === 'studies') {
      setStudiesModal(false);
    }
  };

  return (
    <Box className="border p-2 my-2">
      <SectionTitle
        title="Консультации и исследования"
        className="text-base font-medium"
      />
      <Box className="flex flx-row items-center justify-start gap-3">
        <DefaultText style="text-sm text-black">
          Консультации и исследования не назначены.
        </DefaultText>
        <Dropdown
          title="Добавить"
          data={AppointmentConsultaionOptions}
          handleClicked={handleClickPopupMenu}
          styles="bg-[#4CAF50] text-[#fff]"
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
              <AppointmentCosultationModal option={[]} />
            ) : (
              <AppointmentStudiesModal
                option={data}
                selectedItems={selectedItems}
                handleCheckboxChange={handleCheckboxChange}
              />
            )
          }
        />
      </Box>
    </Box>
  );
};
