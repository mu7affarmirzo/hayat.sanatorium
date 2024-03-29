import { useCallback, useState } from 'react';

export const useMedicationViewHook = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMedicalsModal = useCallback(() => {
    setIsOpen((oldState) => !oldState);
  }, []);

  return {
    toggleMedicalsModal,
    isOpen,
  };
};
