import { useCallback, useState } from 'react';

export const useConsultingAndResearchHook = () => {
  const [studiesModalOpen, setStudiesModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  const handleClickPopupMenu = useCallback((item: any) => {
    if (item.title === 'Исследование') {
      setStudiesModalOpen((prev) => !prev);
    } else if (item.title === 'Консультацию') {
      setConsultationModalOpen((prev) => !prev);
    }
  }, []);

  const handleCloseModal = (modalType: string) => {
    if (modalType === 'consultation') {
      setConsultationModalOpen(false);
    } else if (modalType === 'studies') {
      setStudiesModalOpen(false);
    }
  };

  return {
    handleClickPopupMenu,
    studiesModalOpen,
    consultationModalOpen,
    handleCloseModal,
  };
};
