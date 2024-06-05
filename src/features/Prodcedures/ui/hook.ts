import { useCallback, useState } from 'react';

export const useProceduresViewHook = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMedicalsModal = useCallback(() => {
    setIsOpen((oldState) => !oldState);
  }, []);

  return { toggleMedicalsModal, isOpen };
};
