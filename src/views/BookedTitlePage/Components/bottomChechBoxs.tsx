import { Box } from '@mui/material';
import DefaultCheckbox from 'components/Checkbox/defaultCheckbox';
type propsType = {
  setValue?: any;
  defaultValues?: any;
};
const TitlePageBottomCheckbooks = ({ setValue, defaultValues }: propsType) => {
  return (
    <Box className="border my-[5px] px-[10px] py-[8px]">
      <DefaultCheckbox
        setValue={setValue}
        defaultChecked={defaultValues?.highlighted_tags?.allergy}
        label="нет"
        leftLabel="Аллергия:"
        style="w-[350px]"
        inputType="highlighted_tags?.allergy"
      />
      <DefaultCheckbox
        setValue={setValue}
        defaultChecked={defaultValues?.highlighted_tags?.meteolabel}
        label="нет"
        leftLabel="Метеолабильность:"
        style="w-[350px]"
        inputType="highlighted_tags?.meteolabel"
      />
      <DefaultCheckbox
        setValue={setValue}
        defaultChecked={defaultValues?.highlighted_tags?.food_issues}
        label="нет"
        leftLabel="Непереносимость продуктов!"
        style="w-[350px]"
        inputType="highlighted_tags?.food_issues"
      />
      <DefaultCheckbox
        setValue={setValue}
        defaultChecked={defaultValues?.highlighted_tags?.furniture_fault}
        label="нет"
        leftLabel="Нарушения стула:"
        style="w-[350px]"
        inputType="highlighted_tags?.furniture_fault"
      />
      <DefaultCheckbox
        setValue={setValue}
        defaultChecked={defaultValues?.highlighted_tags?.pills_drugs}
        label="нет"
        leftLabel="Получает постоянно медикаменты:"
        style="w-[350px]"
        inputType="highlighted_tags?.pills_drugs"
      />
    </Box>
  );
};

export default TitlePageBottomCheckbooks;
