/* eslint-disable react/style-prop-object */
import { Box, Grid, OutlinedInput, Typography } from '@mui/material';
import { useAppModals } from 'components/Modals';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';
import DiagnostikaItem from 'components/DiagnostikaItem';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import InitialApportmentHeaderSection from 'views/InitAppointment/components/initialApportmentHeader';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultText from 'components/defaultText/DefaultText';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
];

const ConsultationTechniquesInPatients = () => {
  return (
    <Box className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden">
      <InitialApportmentHeaderSection data={top100Films} />
      <Box className="bg-[#fff] w-full p-[8px] overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
        <DiagnostikaItem title="Жалобы/анамнез" />
        <DiagnostikaItem title="Anamnesis morbi" />
        <DiagnostikaItem title="Anamnesis vitae" />
        <Box className="border px-[10px] py-[10px] flex flex-col gap-1 mb-[10px] ">
          <Grid item className="">
            <SectionTitle
              title="Эпиданамнез"
              className="text-base font-medium"
            />
            <DiagnosticCeckboxItem
              label=" Контакт с инфекционными больными"
              description=" "
              checkBoxStle={'w-[100%]'}
              style="flex flex-col border p-2"
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
              boxStyle="w-[100%]"
              children={<DefaultCheckbox label="нет," />}
            />
            <DiagnosticCeckboxItem
              label="Контакт с больными гриппом, ОРВИ:"
              checkBoxStle={'w-[360px]'}
              children={<DefaultCheckbox label="нет," />}
              titleStyle="w-[100%] border p-[5px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Выезд за пределы населенного пункта за 2 месяца ДО настоящего заболевания:"
              checkBoxStle={'w-[710px]'}
              children={<DefaultCheckbox label="нет," />}
              description=" "
              actions={false}
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Перенесенные инфекционные заболевания:"
              checkBoxStle={'w-[420px]'}
              children={<DefaultCheckbox label="нет," />}
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Нахождение на стационарном лечении:"
              checkBoxStle={'w-[380px]'}
              children={<DefaultCheckbox label="нет," />}
              description=" "
              actions={false}
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Получение гемотрансфузий (крови и ее компонентов):"
              children={<DefaultCheckbox label="нет," />}
              checkBoxStle={'w-[500px]'}
              description=" "
              actions={false}
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Оперативные и массивные вмешательства за последние 6 месяцев:"
              children={<DefaultCheckbox label="нет," />}
              checkBoxStle={'w-[610px]'}
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Посещение стоматолога за последние 6 месяцев:"
              children={<DefaultCheckbox label="нет," />}
              description=" "
              checkBoxStle={'w-[460px]'}
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />

            <DiagnosticCeckboxItem
              label=" Профессия с подробным указанием
                                    профессиональных вредностей и др.
                                    особенностей (например, контакт с
                                    животными):"
              description=" "
              checkBoxStle={'w-[100%]'}
              style="flex flex-col"
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
              boxStyle="w-[100%]"
            />
            <DiagnosticCeckboxItem
              label="Дополнительная информация:"
              checkBoxStle={'w-[1060px]'}
              children={
                <Box className="flex">
                  <DefaultCheckbox label="педикюр," />
                  <DefaultCheckbox label="маникюр," />
                  <DefaultCheckbox label="татуировка," />
                  <DefaultCheckbox label="пирсинг," />
                  <DefaultCheckbox label="иглоукалывание," />
                  <DefaultCheckbox label="иглоукалывание," />
                </Box>
              }
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
              style="mt-[5px]"
              description=" "
            />
          </Grid>
        </Box>

        <Box className="border px-[10px] py-[10px] flex flex-col gap-1 mb-[10px] ">
          <Grid item className="">
            <SectionTitle
              title="Status praesens objectivus"
              className="text-base font-medium"
            />
            <DiagnosticCeckboxItem
              label="Общее состояние:"
              description=" "
              checkBoxStle={'w-[100%]'}
              style="flex flex-col border p-2"
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
              boxStyle="w-[100%]"
              children={
                <Box className="flex">
                  <DefaultCheckbox label="удовлетворительное," />
                  <DefaultCheckbox label="относительное удовлетворительное," />
                  <DefaultCheckbox label="средней тяжести," />
                  <DefaultCheckbox label="тяжёлое" />
                </Box>
              }
            />
            <DiagnosticCeckboxItem
              label="Сознание:"
              checkBoxStle={'w-[450px]'}
              actions={false}
              children={
                <Box className={'flex'}>
                  <DefaultCheckbox label="ясное," />
                  <DefaultCheckbox label="ступор," />
                  <DefaultCheckbox label="сопор," />
                  <DefaultCheckbox label="кома," />
                </Box>
              }
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Положение:"
              checkBoxStle={'w-[500px]'}
              children={
                <Box className={'flex'}>
                  <DefaultCheckbox label="активное," />
                  <DefaultCheckbox label="пассивное," />
                  <DefaultCheckbox label="вынужденное," />
                </Box>
              }
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Конституция:"
              checkBoxStle={'w-[500px]'}
              children={
                <Box className={'flex'}>
                  <DefaultCheckbox label="нормастеник," />
                  <DefaultCheckbox label="астеник," />
                  <DefaultCheckbox label="гиперстеник," />
                </Box>
              }
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Кожные покровы:"
              boxStyle="w-[100%]"
              checkBoxStle={'w-[100%]  '}
              style="flex flex-col items-start border p-[5px] "
              children={
                <Box className="flex">
                  <DefaultCheckbox label="нормальной окраски," />
                  <DefaultCheckbox label="бледные," />
                  <DefaultCheckbox label="гиперемия," />
                  <DefaultCheckbox label="иктеричные," />
                  <DefaultCheckbox label="субиктеричные," />
                  <DefaultCheckbox label="акроцианоз," />
                  <DefaultCheckbox label="землистого цвета" />
                </Box>
              }
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Пигментация:"
              children={<DefaultCheckbox label="нет," />}
              style="mt-[10px]"
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Депигментация:"
              children={<DefaultCheckbox label="нет," />}
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Высыпания:"
              children={<DefaultCheckbox label="нет," />}
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Сосудистые изменения:"
              checkBoxStle={'w-[280px]'}
              children={<DefaultCheckbox label="нет," />}
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Кровоизлияния:"
              children={<DefaultCheckbox label="нет," />}
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Рубцы"
              children={<DefaultCheckbox label="нет," />}
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Трофические изменения:"
              checkBoxStle={'w-[280px]'}
              children={<DefaultCheckbox label="нет," />}
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Видимые опухоли:"
              children={<DefaultCheckbox label="нет," />}
              checkBoxStle={'w-[250px]'}
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />

            <DiagnosticCeckboxItem
              label="Влажность кожи:"
              checkBoxStle={'w-[500px]'}
              children={
                <Box className="flex">
                  <DefaultCheckbox label="обычная," />
                  <DefaultCheckbox label="влажная," />
                  <DefaultCheckbox label="сухая," />
                </Box>
              }
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Тургор кожи:"
              checkBoxStle={'w-[400px]'}
              children={
                <Box className="flex">
                  <DefaultCheckbox label="в норме," />
                  <DefaultCheckbox label="снижет," />
                </Box>
              }
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />

            <DiagnosticCeckboxItem
              label="Подкожно-жировая клетчатка:"
              checkBoxStle={'w-[800px]'}
              children={
                <Box className="flex">
                  <DefaultCheckbox label="развита умеренно," />
                  <DefaultCheckbox label="развита слабо," />
                  <DefaultCheckbox label="развита чрезмерно," />
                </Box>
              }
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
              boxStyle=" w-[55%]"
            />

            <Box className="flex flex-row items-center p-1">
              <Typography>Рост</Typography>
              <OutlinedInput
                sx={{ height: '35px', width: '100px' }}
                className="mx-2"
              />
              <Typography>см,</Typography>
              <Typography>вес</Typography>
              <OutlinedInput
                sx={{ height: '35px', width: '100px' }}
                className="mx-2"
              />
              <Typography>кг, пульс</Typography>
              <OutlinedInput
                sx={{ height: '35px', width: '100px' }}
                className="mx-2"
              />
              <Typography>уд/м, давление</Typography>
              <OutlinedInput
                sx={{ height: '35px', width: '80px' }}
                className="mx-2"
              />
              <Typography>/</Typography>
              <OutlinedInput
                sx={{ height: '35px', width: '80px' }}
                className="mx-2"
              />
              <Typography>мм рт.ст., ИМТ</Typography>
              <OutlinedInput
                sx={{ height: '35px', width: '60px' }}
                className="mx-2"
              />
              <Typography>кг/м2</Typography>
            </Box>

            <DiagnosticCeckboxItem
              label="Интерпретация показателя ИМТ"
              checkBoxStle={'w-[350px]'}
              children={
                <Box className="flex">
                  <DefaultCheckbox label="нет," />
                </Box>
              }
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Отеки, пастозность:"
              checkBoxStle={'w-[250px]'}
              children={
                <Box className="flex">
                  <DefaultCheckbox label="нет," />
                </Box>
              }
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            />
            <DiagnosticCeckboxItem
              label="Лимфатические узлы:"
              checkBoxStle={'w-[800px]'}
              children={
                <Box className="flex">
                  <DefaultCheckbox label="не увеличены," />
                  <DefaultCheckbox label="мягкие," />
                  <DefaultCheckbox label="плотные," />
                  <DefaultCheckbox label="эластичные," />
                </Box>
              }
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
              boxStyle=" w-[55%]"
            />
          </Grid>
        </Box>

        <Box className="border w-full px-[10px] pt-[10px] mt-[10px] ">
          <SectionTitle
            title="Конно—мышечная система"
            className="text-base font-medium"
          />
          <DiagnosticCeckboxItem
            label="Деформации:"
            checkBoxStle={'w-[210px]'}
            children={<DefaultCheckbox label="нет" />}
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Контрактуры:"
            checkBoxStle={'w-[210px]'}
            children={<DefaultCheckbox label="нет," />}
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Ограничения движений:"
            checkBoxStle={'w-[280px]'}
            children={<DefaultCheckbox label="нет," />}
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
        </Box>

        <Box className="border w-full px-[10px] py-[10px] mt-[10px] ">
          <SectionTitle
            title="Дыхательная система"
            className="text-base font-medium"
          />
          <Box className=" flex gap-2 items-center">
            <Typography className=" text-[14px]  font-normal text-[#000]">
              ЧДД
            </Typography>
            <OutlinedInput
              sx={{ height: '35px', width: '60px' }}
              className="mx-2"
            />
            <Typography className=" text-[14px]  font-normal text-[#000]">
              в 1 минуту
            </Typography>
          </Box>
          <DiagnosticCeckboxItem
            label="Тип дыхания:"
            checkBoxStle={'w-[450px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="нет," />
                <DefaultCheckbox label="брюшной," />
                <DefaultCheckbox label="смешанный," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="В легких аускультативно дыхание:"
            checkBoxStle={'w-[700px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="везикулярное," />
                <DefaultCheckbox label="жесткое," />
                <DefaultCheckbox label="ослабленное," />
              </Box>
            }
            description=" "
            actions={false}
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Хрипы:"
            checkBoxStle={'w-[280px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="сухие," />
                <DefaultCheckbox label="влажные," />
              </Box>
            }
            description=" "
            actions={false}
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Кашель:"
            checkBoxStle={'w-[280px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="сухой," />
                <DefaultCheckbox label="мокрый," />
              </Box>
            }
            description=" "
            actions={false}
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Мокрота:"
            checkBoxStle={'w-[150px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="нет," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Крепитация:"
            checkBoxStle={'w-[750px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="верхняя часть," />
                <DefaultCheckbox label="средняя часть," />
                <DefaultCheckbox label="нижняя часть," />
                <DefaultCheckbox label="слева," />
                <DefaultCheckbox label="справа," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Перкуторно в легких звук:"
            boxStyle="w-[100%]"
            checkBoxStle={'w-[100%] '}
            style="flex flex-col items-start border p-[5px]"
            children={
              <Box className="flex">
                <DefaultCheckbox label="ясный," />
                <DefaultCheckbox label="легочный," />
                <DefaultCheckbox label="притупленный," />
                <DefaultCheckbox label="тупой," />
                <DefaultCheckbox label="коробочный," />
                <DefaultCheckbox label="тимпанический," />
                <DefaultCheckbox label="притупленно-тимпанический," />
                <DefaultCheckbox label="слева," />
                <DefaultCheckbox label="справа" />
              </Box>
            }
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          />
        </Box>

        <Box className="border w-full px-[10px] pt-[10px] mt-[10px] ">
          <SectionTitle
            title="Сердечно-сосудистая система"
            className="text-base font-medium"
          />
          <DiagnosticCeckboxItem
            label="Границы сердца:"
            checkBoxStle={'w-[400px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="в норме," />
                <DefaultCheckbox label="расширены," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />

          <DiagnosticCeckboxItem
            boxStyle="w-[100%]"
            checkBoxStle={'w-[100%] '}
            style="flex flex-col items-start border p-[5px]"
            children={
              <Box>
                <Box className="flex items-center">
                  <Typography className="text-[14px]  font-normal text-[#000]">
                    Тоны сердца:
                  </Typography>
                  <DefaultCheckbox label="звучные," />
                  <DefaultCheckbox label="приглушенные," />
                  <DefaultCheckbox label="глухие," />
                  <DefaultCheckbox label="ритмичные," />
                  <DefaultCheckbox label="аритмичные," />
                  <DefaultCheckbox label="мерцательная аритмия," />
                  <DefaultCheckbox label="тахикардия," />
                  <DefaultCheckbox label="брадикардия," />
                </Box>
                <Box className="flex items-center">
                  <Typography className="text-[14px]  font-normal text-[#000]">
                    акцент 2 тона на аорте:
                  </Typography>
                  <DefaultCheckbox label="есть," />
                  <DefaultCheckbox label="нет," />
                  <DefaultCheckbox label="патологические шумы" />
                </Box>
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          />

          <Box className=" py-2">
            <Typography>
              Изменение шума в зависимости ОТ положения тела, задержки дыхания
              на вдохе И выдохе и после физической нагрузки:
            </Typography>
            <DiagnosticCeckboxItem
              label=""
              checkBoxStle={'w-[310px]'}
              children={
                <Box className="flex">
                  <DefaultCheckbox label="усиливается," />
                  <DefaultCheckbox label="неизменяется," />
                </Box>
              }
              description=" "
              titleStyle="w-[100%] border p-[10px] rounded-[4px]"
              style="mt-[5px]"
            />
          </Box>

          <Box className="flex flex-row items-center p-1">
            <Typography>АД слева</Typography>
            <OutlinedInput
              sx={{ height: '35px', width: '100px' }}
              className="mx-2"
            />
            <Typography>, АД справа,</Typography>
            <OutlinedInput
              sx={{ height: '35px', width: '100px' }}
              className="mx-2"
            />
            <Typography>, PS слева</Typography>
            <OutlinedInput
              sx={{ height: '35px', width: '100px' }}
              className="mx-2"
            />
            <Typography>, PS справа</Typography>
            <OutlinedInput
              sx={{ height: '35px', width: '80px' }}
              className="mx-2"
            />
          </Box>
          <DiagnosticCeckboxItem
            boxStyle="w-[100%]"
            checkBoxStle={'w-[100%] '}
            style="flex flex-col items-start border p-[5px]"
            children={
              <Box>
                <Box className="flex items-center">
                  <Typography className="text-[14px]  font-normal text-[#000]">
                    Пульсация, шум над артериями:
                  </Typography>
                  <DefaultCheckbox label="нет," />
                  <DefaultCheckbox label="сонная," />
                  <DefaultCheckbox label="подключичная," />
                  <DefaultCheckbox label="яремная," />
                  <DefaultCheckbox label="тыльная," />
                  <DefaultCheckbox label="слева," />
                  <DefaultCheckbox label="справа" />
                </Box>
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          />

          <DiagnostikaItem
            message=" "
            style="border-[0px]  "
            titleStyle="mb-[0px] text-[#5d5c5c]"
            messageStyle="min-h-[80px]"
          />
        </Box>

        <Box className="border w-full px-[10px] pt-[10px] mt-[10px] ">
          <SectionTitle
            title="Органы пищеварения"
            className="text-base font-medium"
          />
          <DiagnosticCeckboxItem
            label="Аппетит:"
            checkBoxStle={'w-[630px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="удовлетворительный," />
                <DefaultCheckbox label="снижен," />
                <DefaultCheckbox label="повышен," />
                <DefaultCheckbox label="анорексия," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Язык:"
            checkBoxStle={'w-[620px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="чистый," />
                <DefaultCheckbox label="влажный," />
                <DefaultCheckbox label="географически й," />
                <DefaultCheckbox label="обложен налетом," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Трещины, язвы в полости рта:"
            checkBoxStle={'w-[380px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="нет," />
                <DefaultCheckbox label="есть," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            boxStyle="w-[100%]"
            checkBoxStle={'w-[100%] '}
            style="flex flex-col items-start border p-[5px]"
            children={
              <Box>
                <Box className="flex items-center">
                  <Typography className="text-[14px]  font-normal text-[#000]">
                    Живот:
                  </Typography>
                  <DefaultCheckbox label="мягкий," />
                  <DefaultCheckbox label="вздутый," />
                  <DefaultCheckbox label="впавший," />
                </Box>
                <Box className="flex items-center">
                  <Typography className="text-[14px]  font-normal text-[#000]">
                    болезненный
                  </Typography>
                  <DefaultCheckbox label="в правом подреберье," />
                  <DefaultCheckbox label="в гипогастрии," />
                  <DefaultCheckbox label="по ходу толстого кишечника," />
                  <DefaultCheckbox label="по ходу тонкого кишечника," />
                  <DefaultCheckbox label="вокруг пупка" />
                </Box>
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          />
          <DiagnosticCeckboxItem
            label="Печень:"
            checkBoxStle={'w-[500px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="не увеличена," />
                <DefaultCheckbox label="увеличена на" />
                <Box className=" flex gap-2 items-center">
                  <Box className=" border rounded-[4px] p-[20px] pr-[30px] items-center">
                    <Typography className=" pr-[20px] text-[#007DFF]"></Typography>
                  </Box>
                  <Typography className=" text-[14px]  font-normal text-[#000]">
                    см.,
                  </Typography>
                </Box>
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Край печени:"
            checkBoxStle={'w-[600px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="острый," />
                <DefaultCheckbox label="закругленный," />
                <DefaultCheckbox label="мягкий," />
                <DefaultCheckbox label="плотный," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Селезенка:"
            checkBoxStle={'w-[500px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="не увеличена," />
                <DefaultCheckbox label="увеличена на" />
                <Box className=" flex gap-2 items-center">
                  <Box className=" border rounded-[4px] p-[20px] pr-[30px] items-center">
                    <Typography className=" pr-[20px] text-[#007DFF]"></Typography>
                  </Box>
                  <Typography className=" text-[14px]  font-normal text-[#000]">
                    см.,
                  </Typography>
                </Box>
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Край селезенки:"
            checkBoxStle={'w-[600px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="острый," />
                <DefaultCheckbox label="закругленный," />
                <DefaultCheckbox label="мягкий," />
                <DefaultCheckbox label="плотный," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnosticCeckboxItem
            label="Стул:"
            checkBoxStle={'w-[700px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="жидкий," />
                <DefaultCheckbox label="кашицеобразный," />
                <DefaultCheckbox label="оформленный," />
                <DefaultCheckbox label="запоры," />
                <DefaultCheckbox label="диарея," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <Box className=" flex gap-2 items-center">
            <Typography className=" text-[14px]  font-normal text-[#000]">
              Частота стула:
            </Typography>

            <OutlinedInput
              sx={{ height: '35px', width: '60px' }}
              className="mx-2"
            />

            <Typography className=" text-[14px]  font-normal text-[#000]">
              раз в день
            </Typography>
          </Box>
          <DiagnostikaItem
            message=" "
            style="border-[0px] py-0 px-0"
            titleStyle="mb-[0px] text-[#5d5c5c]"
            messageStyle="min-h-[80px]"
          />
        </Box>

        <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
          <SectionTitle
            title="Мочевыделительная система"
            className="text-base font-medium"
          />
          <DiagnosticCeckboxItem
            label="Симптом поколачивания:"
            checkBoxStle={'w-[700px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="отрицательный," />
                <DefaultCheckbox label="положительный," />
                <DefaultCheckbox label="справа," />
                <DefaultCheckbox label="слева," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnostikaItem
            message=" "
            style="border-[0px] py-0 px-0"
            titleStyle="mb-[0px] text-[#5d5c5c]"
            messageStyle="min-h-[80px]"
          />
        </Box>

        <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
          <SectionTitle
            title="Эндокринная система"
            className="text-base font-medium"
          />
          <DiagnosticCeckboxItem
            label="Щитовидная железа:"
            checkBoxStle={'w-[730px]'}
            children={
              <Box className="flex">
                <DefaultCheckbox label="без изменений," />
                <DefaultCheckbox label="увеличена," />
                <DefaultCheckbox label="болезненна," />
                <DefaultCheckbox label="консистенция," />
              </Box>
            }
            description=" "
            titleStyle="w-[100%] border p-[10px] rounded-[4px]"
            style="mt-[5px]"
          />
          <DiagnostikaItem
            message=" "
            style="border-[0px] py-0 px-0"
            titleStyle="mb-[0px] text-[#5d5c5c]"
            messageStyle="min-h-[80px]"
          />
        </Box>

        <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
          <SectionTitle
            title="Нервная система"
            className="text-base font-medium"
          />
          <DiagnostikaItem
            message=" "
            style="border-[0px] py-0 px-0"
            titleStyle="mb-[0px] text-[#5d5c5c]"
            messageStyle="min-h-[80px]"
          />
        </Box>

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

        <Box className="border w-full p-[10px] mt-[10px]">
          <SectionTitle title="Заключение" className="text-base font-medium" />
          <DefaultCheckbox label="Cito!" />
          <SectionTitle title="Заключение:" className="text-base font-medium" />
          <DiagnostikaItem
            message=" "
            style="border-[0px] py-0 px-0"
            titleStyle="mb-[0px] text-[#5d5c5c]"
            messageStyle="min-h-[80px]"
          />
        </Box>
        <Box className="border w-full px-[10px] py-[5px] mt-[10px] mb-10">
          <SectionTitle
            title="Назначения"
            className="text-base font-medium py-2"
          />
          <DefaultButton
            classStyle="bg-[#4CAF50] text-[#fff]"
            title="Назначить из лечебной программы!"
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
            <SectionTitle
              title="Медикаменты"
              className="text-base font-medium"
            />
            <Box className="flex flx-row items-center justify-start gap-3">
              <DefaultText style="text-sm text-black">
                Медикаменты не назначены.
              </DefaultText>
              <DefaultButton
                classStyle="bg-[#4CAF50] text-[#fff]"
                title="Добавить"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsultationTechniquesInPatients;
