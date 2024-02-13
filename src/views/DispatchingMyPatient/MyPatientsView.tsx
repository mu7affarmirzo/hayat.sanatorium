import { Box, Grid } from "@mui/material";
import {
    CloseIcon,
    SearchAltIcon,
    VuesaxLinearDocumentIcon,
} from "assets/icons/icons";
import CustomizedAccordions from "components/CustomizedAccordions";
import AutocompleteInput from "components/AutoCompleteInput/AutocompleteInput";
import DefaultCheckbox from "components/Checkbox/DefaultCheckbox";
import { MyPatientsGrupCol } from "components/ColumnDefs/MyPatientsGrupCol";
import DefaultButton from "components/deafultButton/DefaultButton";
import DefaultInput from "components/defaultInput/DefaultInput";
import SearchInput from "components/search/SearchInput";
import { useForm } from "react-hook-form";
import ReceptionTableGroup from "components/ReceptionTableGroup/ReceptionTable";
import ExpancedSearchOptions from "../Dispatching/components/ExpandedOptionsSearch";
import useDispatchingPatientHook from "./hook";

interface IFormInput {
    lastName: string;
    name: string;
    surName: string;
    appeal: string;
}

const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
];

const FunctionsBtnGroup = () => {
    return (
        <Grid item xs={12} className="flex justify-between my-[10px]">
            <Grid item xs={12} md={7}>
                <SearchInput />
            </Grid>
            <Grid item xs={12} md={5} className="flex justify-end ">
                <DefaultButton
                    title="Выбор колонок"
                    classStyle="bg-[#2196F3] h-[40px] text-[#fff] mr-[10px]"
                />
                <DefaultButton
                    title="Ехсеl"
                    icon={<VuesaxLinearDocumentIcon />}
                    classStyle="bg-[#2196F3] h-[40px] text-[#fff] mr-[10px]"
                />
                <DefaultButton
                    title="Поиск"
                    icon={<SearchAltIcon />}
                    classStyle="bg-[#2196F3] h-[40px] text-[#fff] mr-[10px]"
                />
                <DefaultButton
                    title="Очистить фильтр"
                    icon={<CloseIcon stroke="#fff" />}
                    classStyle="bg-[#2196F3] h-[40px] text-[#fff] "
                />
            </Grid>
        </Grid>
    );
};

const MyPatientsView = () => {
    const { register } = useForm<IFormInput>();
    const { data, handleRowClick } = useDispatchingPatientHook();

    return (
        <Grid
            className=" pt-[10px] flex overflow-hidden h-[calc(100vh-150px)] "
            container
        >
            <Box className="w-full overflow-scroll h-full ">
                <CustomizedAccordions
                    title="Параметры поиска:"
                    childrenStyle={{
                        background: "#F5F5F5",
                        display: "flex",
                        padding: "10px",
                    }}
                    topBoxStyle={{ background: "#F5F5F5" }}
                >
                    <Grid
                        item
                        xs={12}
                        md={9.5}
                        className=" flex  justify-between items-center "
                    >
                        <DefaultInput
                            register={register}
                            inputType={"appeal"}
                            containerStile="w-[33%] "
                            inputStyle="w-[100%]"
                            placeholder="ФИО пациента"
                        />
                        <DefaultInput
                            register={register}
                            inputType={"appeal"}
                            containerStile="w-[33%]  "
                            inputStyle="w-[100%]"
                            placeholder="Тип карты"
                        />
                        <AutocompleteInput
                            data={top100Films}
                            containerStyle={" w-[33%]   bg-[#fff] "}
                            inputStyle="w-[100%]"
                        />
                    </Grid>
                    <Grid
                        className="flex justify-end items-center "
                        item
                        xs={12}
                        md={2.5}
                    >
                        <DefaultCheckbox label="Только недиспетчеризованные" />
                    </Grid>
                </CustomizedAccordions>
                <CustomizedAccordions
                    title="Расширенные параметры поиска"
                    childrenStyle={{
                        background: "#F5F5F5",
                        display: "flex",
                        padding: "10px",
                    }}
                    topBoxStyle={{ background: "#F5F5F5", marginTop: "10px" }}
                >
                    <ExpancedSearchOptions />
                </CustomizedAccordions>
                <FunctionsBtnGroup />
                <ReceptionTableGroup
                    columnDefs={MyPatientsGrupCol}
                    height="h-[50vh]"
                    rowData={data}
                    handleClickItem={handleRowClick}
                />
            </Box>
        </Grid>
    );
};

export default MyPatientsView;