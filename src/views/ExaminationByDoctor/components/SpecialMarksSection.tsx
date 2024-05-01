import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';

import { Box, Typography } from '@mui/material';
import { useExaminationByDoctorContext } from '../module';

export const SpecialMarksSection = () => {
  const { methods } = useExaminationByDoctorContext();
  return (
    <AppointmentSectionContainer boxTitle="Особые отметки">
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Аллергия"
        isSearchAction
        isGetAction
        categoryName={'allergy'}
        fieldStyle="w-[92%]"
      />

      <Box className="ml-[60px]">
        <Typography className="text-sm  font-roboto font-normal text-red-500">
          Есть пищевые аллергены - см. вкладку Питание
        </Typography>
      </Box>

      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Метеолабильность"
        isSearchAction
        isGetAction
        categoryName={'meteolabilisis'}
        fieldStyle="w-[88%]"
      />

      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Непереносимость продуктов"
        isSearchAction
        isGetAction
        categoryName={'non_carrying_prods'}
        fieldStyle="w-[83%]"
      />

      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Нарушения стула"
        isSearchAction
        isGetAction
        categoryName={'stull_issues'}
        fieldStyle="w-[88%]"
      />

      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Получает постоянно медикаменты"
        isSearchAction
        isGetAction
        categoryName={'has_always_pills'}
        fieldStyle="w-[80%]"
      />
    </AppointmentSectionContainer>
  );
};
