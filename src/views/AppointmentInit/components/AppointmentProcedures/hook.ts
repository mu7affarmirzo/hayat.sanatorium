import { useGetMedServiceGroupQuery } from 'features/patient/service';
import { setCurrentAppointment } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback, useState } from 'react';
import { MedServiceSpecialty } from 'types/appointmentTypes';
import { Procedure } from 'types/patientTypes';

interface AppointmentMedicalsActions {
  medicalsData: any;
  toggleMedicalsModal: () => void;
  isOpen: boolean;
  handleCheckboxChange: (item: MedServiceSpecialty) => void;
  selectedItems: MedServiceSpecialty[];
}

export const useAppointmentProceduresActions =
  (): AppointmentMedicalsActions => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<MedServiceSpecialty[]>(
      [],
    );
    const { data: medicalsData } = useGetMedServiceGroupQuery({});
    const dispatch = useReduxDispatch();

    const toggleMedicalsModal = useCallback(() => {
      setIsOpen((oldState) => !oldState);
    }, []);

    const convertToMedicalService = useCallback(
      (item: MedServiceSpecialty): Procedure => {
        const { id, cost, type } = item;
        return {
          medical_service: id,
          price: cost,
          frequency: 'каждый день',
          quantity: 1,
          state: type,
          comments: '',
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

        const selectedMedicalServices: Procedure[] = updatedSelectedItems.map(
          (selectedItem) => convertToMedicalService(selectedItem),
        );

        dispatch(
          setCurrentAppointment({ procedures: selectedMedicalServices }),
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
