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
        categoryName={'palpebral_fissures'}
        fieldStyle="w-[90%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Зрачки"
        categoryName={'pupils'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Реакция зрачков на свет"
        categoryName={'reaction_on_pupils'}
        fieldStyle="w-[85%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Движения глазных яблок"
        categoryName={'aye_frame_movement'}
        fieldStyle="w-[85%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Нистагм"
        categoryName={'nystagmus'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Лицо"
        categoryName={'face'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Мягкое небо"
        categoryName={'soft_sk'}
        fieldStyle="w-[90%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Фонация и глотание"
        categoryName={'phonation_swallowing'}
        fieldStyle="w-[85%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Рефлексы орального автоматизма"
        categoryName={'reflexes'}
        fieldStyle="w-[80%]"
      />

      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Мышечная сила в конечностях:"
        categoryName={'muscle_strength'}
        fieldStyle="w-[80%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Тонус мышц"
        categoryName={'muscle_tones'}
        fieldStyle="w-[90%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Глубокие рефлексы на руках"
        categoryName={'deep_reflexes_hand'}
        fieldStyle="w-[80%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Глубокие рефлексы на ногах"
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-[80%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Рефлексы"
        categoryName={'reflexes'}
        fieldStyle="w-[90%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="стило-радиальные"
        categoryName={'stylo_radial'}
        fieldStyle="w-[88%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="с двуглавой мышцы плеча"
        categoryName={'biceps'}
        fieldStyle="w-[80%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="с трехглавой мышцы плеча"
        categoryName={'triceps'}
        fieldStyle="w-[80%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="коленные"
        categoryName={'knees'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="ахилловы"
        categoryName={'achilles'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="брюшные"
        categoryName={'abdominal'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Патологические рефлексы"
        categoryName={'pathological_reflexes'}
        fieldStyle="w-[83%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Положение в позе Ромберга"
        categoryName={'romberg_position'}
        fieldStyle="w-[80%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="В усложненной позе Ромберга"
        categoryName={'complicated_position'}
        fieldStyle="w-[80%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Пальценосовая проба"
        categoryName={'finger_test'}
        fieldStyle="w-[85%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Пяточно-коленная проба"
        categoryName={'heel_knee_test'}
        fieldStyle="w-[85%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Походка"
        categoryName={'gait'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Чувствительность"
        categoryName={'sensitivity'}
        fieldStyle="w-[90%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Когнитивные функции"
        categoryName={'cognitive_test'}
        fieldStyle="w-[88%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Эмоционально-волевая сфера"
        categoryName={'emotional_volitional_sphere'}
        fieldStyle="w-[80%]"
      />

      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Инсомния"
        categoryName={'insomnia'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Движения в шейном отделе позвоночника"
        categoryName={'movements_in_the_cervical_spine'}
        fieldStyle="w-[75%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Движения в поясничном отделе позвоночника"
        categoryName={'movements_in_the_spinal_spine'}
        fieldStyle="w-[75%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Болезненность при пальпации остистых отростков"
        categoryName={'spinous_processes'}
        fieldStyle="w-[70%]"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        isSearchAction={true}
        isGetAction={true}
        label="Болезненность паравертебральных точек"
        categoryName={'paravertebral_points'}
        fieldStyle="w-[75%]"
      />
      <TextareActionBox isActions />
    </AppointmentSectionContainer>
  );
};

export default NeurologistStatusSection;
