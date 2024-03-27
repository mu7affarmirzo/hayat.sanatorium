import { useLazyGetLabsGroupByCategoryQuery } from 'features/patient/patientService';
import { useCallback, useState } from 'react';

export const useAppointmentConsultationActions = () => {
  const [trigger, { data }] = useLazyGetLabsGroupByCategoryQuery();
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [studiesModalOpen, setStudiesModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleClickPopupMenu = useCallback(
    (item: any) => {
      if (item.title === 'Исследование') {
        setStudiesModalOpen((prev) => !prev);
      } else if (item.title === 'Консультацию') {
        setConsultationModalOpen((prev) => !prev);
      }
      trigger({});
    },
    [trigger],
  );

  const handleCheckboxChange = (itemId: number) => {
    const index = selectedItems.indexOf(itemId as never);
    if (index === -1) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  return {
    data,
    handleClickPopupMenu,
    consultationModalOpen,
    setConsultationModal: setConsultationModalOpen,
    studiesModalOpen,
    setStudiesModal: setStudiesModalOpen,
    handleCheckboxChange,
    selectedItems,
  };
};
