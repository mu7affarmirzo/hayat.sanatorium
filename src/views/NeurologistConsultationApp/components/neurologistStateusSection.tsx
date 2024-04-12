import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import { useNeurologistAppoinmnetContext } from '../module';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import TextareActionBox from 'components/TextareActionBox';

const NeurologistStatusSection = () => {
  const { methods } = useNeurologistAppoinmnetContext();
  return (
    <AppointmentSectionContainer boxTitle="Неврологический статус">
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Глазные щели "
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Зрачки"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Реакция зрачков на свет"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Движения глазных яблок"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Нистагм"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Лицо"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Мягкое небо"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Фонация и глотание"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Рефлексы орального автоматизма"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />

      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Мышечная сила в конечностях:"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Тонус мышц"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Глубокие рефлексы на руках"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Глубокие рефлексы на ногах"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Рефлексы"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="стило-радиальные"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="с двуглавой мышцы плеча"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="с трехглавой мышцы плеча"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="коленные"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="ахилловы"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="брюшные"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Патологические рефлексы:"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Положение в позе Ромберга:"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="В усложненной позе Ромберга"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Пальценосовая проба"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Пяточно-коленная проба"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Походка"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Чувствительность"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Когнитивные функции"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Эмоционально-волевая сфера"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />

      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Инсомния"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Движения в шейном отделе позвоночника"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Движения в поясничном отделе позвоночника"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Болезненность при пальпации остистых отростков"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Болезненность паравертебральных точек"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <TextareActionBox isActions />
    </AppointmentSectionContainer>
  );
};

export default NeurologistStatusSection;
