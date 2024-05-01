import { Box } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import TextareActionBoxView from 'components/TextareActionBox';
import { useElectrocardiogramAppointmentContext } from '../module';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import { CheckBoxMockData } from '../constant/checkBoxMockData';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import { OutlineField } from 'components/Fields/OutlineField';
import MultiSelectCheckboxGroup from 'components/RadioButtonGroup/multiSelectRadioButton';

const DescriptionOfElectrocardiogramSection = () => {
  const { methods } = useElectrocardiogramAppointmentContext();
  return (
    <Box className="border p-[10px] flex flex-col mb-[10px] ">
      <SectionTitle
        title="Описание электрокардиограммы"
        className="text-base font-bold font-roboto"
      />
      <Box className="flex flex-row items-center gap-2">
        <AutoComplateCategoryBoxView
          label="Ритм"
          formMethods={methods}
          containerStyle="w-[450px] flex flex-row items-center gap-2 "
          fieldStyle="w-[85%]"
          isGetAction
          isSearchAction
          categoryName="heart_s_count"
        />
      </Box>
      <Box className="flex flex-row items-center gap-2 my-1">
        <AppoinmentItemTitle title="R-R:" />
        <OutlineField medhods={methods} name="r_r" inputWidth="80px" />

        <AppoinmentItemTitle title=", P-Q(R):" />
        <OutlineField medhods={methods} name="p_q" inputWidth="80px" />

        <AppoinmentItemTitle title=",  QRS:" />
        <OutlineField medhods={methods} name="qrs" inputWidth="80px" />
      </Box>

      <Box className="flex flex-row items-center gap-2 my-1">
        <AppoinmentItemTitle title=" 'Внутреннее отклонение' в V-1: " />
        <OutlineField medhods={methods} name="v1" inputWidth="80px" />

        <AppoinmentItemTitle title=", в V-6:" />
        <OutlineField medhods={methods} name="v6" inputWidth="80px" />
      </Box>

      <Box className="flex flex-row items-center gap-2 my-1">
        <AppoinmentItemTitle title="Q-T" />
        <OutlineField medhods={methods} name="q_t" inputWidth="80px" />

        <AppoinmentItemTitle title=",(норма до:" />
        <OutlineField medhods={methods} name="q_t" inputWidth="80px" />

        <AppoinmentItemTitle title="), Lα:" />
        <OutlineField medhods={methods} name="la" inputWidth="80px" />
      </Box>

      <AutoComplateCategoryBoxView
        label="Зубец Р"
        formMethods={methods}
        categoryName="prong_p"
        fieldStyle="w-[90%]"
        isGetAction
        isSearchAction
      />
      <AutoComplateCategoryBoxView
        label="Комплекс QRS"
        formMethods={methods}
        categoryName="qrs"
        fieldStyle="w-[90%]"
        isGetAction
        isSearchAction
      />
      <AutoComplateCategoryBoxView
        label="Зубец Т"
        formMethods={methods}
        categoryName="prong_t"
        fieldStyle="w-[92%]"
        isGetAction
        isSearchAction
      />
      <AutoComplateCategoryBoxView
        label="Сегмент S-Т"
        formMethods={methods}
        categoryName="segment_st"
        fieldStyle="w-[92%]"
        isGetAction
        isSearchAction
      />
      <AutoComplateCategoryBoxView
        label="Электрическая ось:"
        formMethods={methods}
        categoryName="q_t"
        fieldStyle="w-[33%]"
        isGetAction
        isSearchAction
        children={
          <Box className="flex flex-row items-center ">
            <AppoinmentItemTitle title="∠α:" />
            <OutlineField medhods={methods} name="rhythm" inputWidth="80px" />
            <MultiSelectCheckboxGroup
              name="segment_st"
              options={CheckBoxMockData}
              methods={methods}
            />
          </Box>
        }
      />
      <TextareActionBoxView isActions={true} />
    </Box>
  );
};

export default DescriptionOfElectrocardiogramSection;
