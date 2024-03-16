import { Box } from '@mui/material';
import { useAppModals } from 'components/Modals';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';

const AppointmentsSection = () => {
  const appModals = useAppModals();

  return (
    <Box className="border w-full px-[10px] py-[5px] mt-[10px] mb-10">
      <SectionTitle title="Назначения" className="text-base font-medium py-2" />
      <DefaultButton
        classStyle="bg-[#4CAF50] text-[#fff]"
        title="Назначить из лечебной программы!"
        onClick={() => {
          appModals?.show('selecting_destination');
        }}
      />
      <Box className="border p-2 my-2">
        <SectionTitle
          title="Консультации и исследования"
          className="text-base font-medium"
        />
        <Box className="flex flx-row items-center justify-start gap-3">
          <DefaultText style="text-sm text-black">
            Консультации и исследования не назначены.
          </DefaultText>
          <DefaultButton
            classStyle="bg-[#4CAF50] text-[#fff]"
            title="Добавить"
          />
        </Box>
      </Box>
      <Box className="border p-2 my-2">
        <SectionTitle
          title="Лечебные процедуры"
          className="text-base font-medium"
        />
        <Box className="flex flx-row items-center justify-start gap-3">
          <DefaultText style="text-sm text-black">
            Лечебные процедуры не назначены.
          </DefaultText>
          <DefaultButton
            classStyle="bg-[#4CAF50] text-[#fff]"
            title="Добавить"
          />
        </Box>
      </Box>
      <Box className="border p-2 my-2">
        <SectionTitle title="Медикаменты" className="text-base font-medium" />
        <Box className="flex flx-row items-center justify-start gap-3">
          <DefaultText style="text-sm text-black">
            Медикаменты не назначены.
          </DefaultText>
          <DefaultButton
            classStyle="bg-[#4CAF50] text-[#fff]"
            title="Добавить"
            submitType="submit"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AppointmentsSection;
