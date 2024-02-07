import { Grid, Typography } from "@mui/material";
import { VuesaxLinear } from "assets/icons/icons";
import { BookedPatiant } from "components/columnDefs/bookedCol";
import DefaultButton from "components/deafultButton/DefaultButton";
import ReceptionTable from "components/receptionTable/ReceptionTable";
import SearchInput from "components/search/SearchInput";
import useMyPatientTabHook from "./hook";

const MyPatientTab = () => {
    const { myPatientData, NumberOfPatient, handleSearch } =
        useMyPatientTabHook();

    return (
        <Grid container>
            <Grid
                className="flex justify-between items-center  my-[10px] "
                item
                xs={12}
                md={12}
            >
                <Grid item xs={12} md={10.5} className=" bg-[#F5F5F5] ">
                    <SearchInput
                        placeholder="Искать в таблице"
                        onChange={handleSearch}
                    />
                </Grid>
                <DefaultButton
                    title=" Экспорт в Excel"
                    classStyle="bg-[#2196F3] h-[40px] text-[#fff] text-sm capitalize mr-[10px]"
                    icon={<VuesaxLinear />}
                />
            </Grid>
            <Grid item xs={12} md={12} className=" bg-[#F5F5F5]">
                <ReceptionTable
                    columnDefs={BookedPatiant}
                    rowData={myPatientData}
                    height="h-[810px]"
                />
            </Grid>
            <Grid>
                <Typography>
                    Лечащий врач, количество пациентов: {NumberOfPatient}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default MyPatientTab;
