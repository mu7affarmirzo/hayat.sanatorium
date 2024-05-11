import {
  useGetMedServiceGroupQuery,
  useLazyGetLabsGroupByCategoryQuery,
} from 'features/patient/service';
import { setCurrentAppointment } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback, useState } from 'react';
import { LabResearch, MedServiceSpecialty } from 'types/appointmentTypes';
import {
  LabResearchForInitAppointment,
  MedicalService,
} from 'types/patientTypes';

export const useAppointmentConsultationActions = () => {
  const dispatch = useReduxDispatch();
  const [trigger, { data }] = useLazyGetLabsGroupByCategoryQuery();
  const { data: medicalsData } = useGetMedServiceGroupQuery({});
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [studiesModalOpen, setStudiesModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<MedServiceSpecialty[]>([]);
  const [selectedLabResearch, setSelectedLabResearch] = useState<LabResearch[]>(
    [],
  );

  const convertToLabResearch = useCallback(
    (item: LabResearch): LabResearchForInitAppointment => {
      const { id, price } = item;
      return {
        lab: id,
        price: price,
        comments: '',
        state: '',
      };
    },
    [],
  );

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

  const handleLabResearchCheckboxChange = useCallback(
    (item: LabResearch) => {
      const updatedSelectedLabResearch = selectedLabResearch.includes(item)
        ? selectedLabResearch.filter(
            (selectedLabResearchItem) => selectedLabResearchItem.id !== item.id,
          )
        : [...selectedLabResearch, item];

      setSelectedLabResearch(updatedSelectedLabResearch);

      const selectedLabResearchForInitAppointment: LabResearchForInitAppointment[] =
        updatedSelectedLabResearch.map((selectedLabResearchItem) =>
          convertToLabResearch(selectedLabResearchItem),
        );

      console.log(
        selectedLabResearchForInitAppointment,
        'selectedLabResearchForInitAppointment',
      );
      dispatch(
        setCurrentAppointment({
          lab_research: selectedLabResearchForInitAppointment,
        }),
      );
    },
    [convertToLabResearch, dispatch, selectedLabResearch],
  );

  const handleMedServiceChechboxChange = useCallback(
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
    data,
    handleClickPopupMenu,
    consultationModalOpen,
    setConsultationModal: setConsultationModalOpen,
    studiesModalOpen,
    setStudiesModal: setStudiesModalOpen,
    handleLabResearchCheckboxChange,
    selectedLabResearch,
    medicalsData,
    selectedItems,
    handleMedServiceChechboxChange,
  };
};
