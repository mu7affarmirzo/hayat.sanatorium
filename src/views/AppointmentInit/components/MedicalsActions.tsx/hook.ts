import { useGetMedServiceGroupQuery } from 'features/patient/service';
import { setCurrentAppointment } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback, useState } from 'react';
import { MedServiceSpecialty } from 'types/appointmentTypes';
import { MedicalService } from 'types/patientTypes';

interface AppointmentMedicalsActions {
  medicalsData: any;
  toggleMedicalsModal: () => void;
  isOpen: boolean;
  handleCheckboxChange: (item: MedServiceSpecialty) => void;
  selectedItems: MedServiceSpecialty[];
}

export const useAppointmentMedicalsActions = (): AppointmentMedicalsActions => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<MedServiceSpecialty[]>([]);
  const { data: medicalsData } = useGetMedServiceGroupQuery({});
  const dispatch = useReduxDispatch();

  const toggleMedicalsModal = useCallback(() => {
    setIsOpen((oldState) => !oldState);
  }, []);

  const convertToMedicalService = useCallback(
    (item: MedServiceSpecialty): MedicalService => {
      const { id, cost, type, doctor } = item;
      return {
        medical_service: id,
        price: cost,
        consulted_doctor: doctor[0],
        state: type,
      };
    },
    [],
  );

  const handleCheckboxChange = useCallback(
    (item: MedServiceSpecialty) => {
      const updatedSelectedItems = selectedItems.includes(item)
        ? selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
        : [...selectedItems, item];

      setSelectedItems(updatedSelectedItems);

      const selectedMedicalServices: MedicalService[] =
        updatedSelectedItems.map((selectedItem) =>
          convertToMedicalService(selectedItem),
        );

      dispatch(
        setCurrentAppointment({ medical_services: selectedMedicalServices }),
      );
    },
    [dispatch, selectedItems, convertToMedicalService],
  );

  return {
    medicalsData,
    toggleMedicalsModal,
    isOpen,
    handleCheckboxChange,
    selectedItems,
  };
};
