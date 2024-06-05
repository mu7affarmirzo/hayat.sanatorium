/* eslint-disable react/style-prop-object */
import { Box } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';

const DiagnosisSection = () => {
  return (
    <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
      <SectionTitle title="Диагноз" className="text-base font-medium" />
      <Box className="flex gap-2 my-[10px] items-center">
        <DefaultText style={'text-sm'}>Диагноз не изменен :</DefaultText>
        <DefaultButton
          classStyle="bg-[#4CAF50] text-[#fff]"
          title="Добавить диагноз"
        />
        {/* <DefaultButton
              classStyle="bg-[#64B6F7] text-[#fff]"
              title="Утвердить"
            />
            <DefaultButton
              classStyle="bg-[#64B6F7] text-[#fff]"
              title="Отменить"
            />
            <DefaultButton
              classStyle="bg-[#64B6F7] text-[#fff]"
              title="Удалить"
            /> */}
      </Box>
      {/* <Box>
            <ReceptionTable
              columnDefs={ColData}
              rowData={rowData}
              height="h-[20vh]"
            />
          </Box> */}
    </Box>
  );
};

export default DiagnosisSection;
