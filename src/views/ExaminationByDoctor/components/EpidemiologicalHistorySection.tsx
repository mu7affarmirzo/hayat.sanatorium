import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import { Box } from '@mui/material';
import RadioButtonGroup from 'components/RadioButtonGroup';
import {
  AbroadLastYearOptions,
  StullIssueOptions,
} from '../constant/ExaminationOption';
import { useExaminationByDoctorContext } from '../module';

export const EpidemiologicalHistorySection = () => {
  const { methods } = useExaminationByDoctorContext();

  return (
    <AppointmentSectionContainer boxTitle="Эпиданамнез">
      <AutoComplateCategoryBoxView
        label="За последние два года за границей"
        formMethods={methods}
        isGetAction
        isSearchAction={true}
        categoryName={'abroad_for_last_years'}
        fieldStyle="w-[62%]"
        children={
          <Box className="flex flex-row items-center gap-1">
            <RadioButtonGroup
              options={AbroadLastYearOptions}
              name="abroad_for_last_years"
              methods={methods}
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Вирусный гепатит"
        isSearchAction
        categoryName={'virus_hepatitis'}
        fieldStyle="w-[87%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Туберкулез"
        isSearchAction
        categoryName={'tuberculosis'}
        fieldStyle="w-[91%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Малярия"
        isSearchAction
        categoryName={'malarias'}
        fieldStyle="w-[93%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Венерические болезни"
        isSearchAction
        categoryName={'venerian_illness'}
        fieldStyle="w-[85%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Дизентерия"
        isSearchAction
        categoryName={'dizanteri'}
        fieldStyle="w-[92%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Глистные инвазии"
        isSearchAction
        categoryName={'helminthic_infestations'}
        fieldStyle="w-[89%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Контакты с инфекционными больными за последние 3 нед."
        isSearchAction
        categoryName={'had_contact_with_inf_people'}
        fieldStyle="w-[58%]"
        defaultCheckbox
      />
      <AutoComplateCategoryBoxView
        label="Стул за последние сутки"
        formMethods={methods}
        isSearchAction={true}
        categoryName={'stull_issues'}
        fieldStyle="w-[65%]"
        children={
          <Box className="flex flex-row items-center gap-1">
            <RadioButtonGroup
              options={StullIssueOptions}
              name="had_stul_for"
              methods={methods}
            />
          </Box>
        }
      />
    </AppointmentSectionContainer>
  );
};
