import { Typography, Grid, Box } from "@mui/material";
import DefaultButton from "components/DeafultButton/DefaultButton";
import useDispatchTitlePageTabHook from "./hook";
import TagAutoCompleateBox from "components/TagAutoCompleateBox/tagAutoCompleateBox";
import HarmFactors from "./components/harmFactors";
import ModeHandler from "./components/modalHandler";
import DiagnostHandler from "./components/diagnostHandler";
import Comment from "./components/commetsSection";
import FrontFooter from "components/frontFooter/FrontFooter";
import HospitalStayForm from "views/BookedTitlePageTab/components/HospitalStayForm";
import TravelPackageForm from "views/BookedTitlePageTab/components/TravelPackageForm";
import DocumentationForm from "views/BookedTitlePageTab/components/DocumentationForm";
import TitlePageBottomCheckbooks from "./components/bottomChechBoxs";
import PatientInfoSection from "./components/patientInfoSection";
import RiskFactorsAndTags from "./components/tagsFactors";

const top100FilmsChack = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
        title: "The Lord of the Rings: The Return of the King",
        year: 2003,
    },
];

export const rowData = [
    {
        number: "137",
        name: "Ferd Banbrook Connolly",
        group: [],
        arrivalData: "2023-12-06",
        departureDate: "2023-12-15",
        roomType: "Lyuks A",
        room: "51-929-6443",
        numberOfGuest: 2,
        level: 3,
        howManyTimesUsed: 4,
        capacity: 1,
        occupied: false,
        tariff: 5,
        duration: 9,
        balance: 0,
        paid: 0,
        discount: 0,
        statusRoom: "clean",
    },
    {
        number: "117",
        name: "Levi Syde ",
        group: [],
        arrivalData: "2023-12-05",
        departureDate: "2023-12-13",
        roomType: "Lyuksbk",
        room: "34-631-7219",
        numberOfGuest: 5,
        level: 1,
        howManyTimesUsed: 1,
        capacity: 1,
        occupied: true,
        tariff: 6,
        duration: 8,
        balance: 0,
        paid: 0,
        discount: 0,
        statusRoom: "clean",
    },
    {
        number: "139",
        name: "Griffie Pendrey ",
        group: [],
        arrivalData: "2023-12-06",
        departureDate: "2023-12-14",
        roomType: "Lyuksbk",
        room: "03-447-1912",
        numberOfGuest: 5,
        level: 2,
        howManyTimesUsed: 6,
        capacity: 1,
        occupied: false,
        tariff: 5,
        duration: 8,
        balance: 0,
        paid: 0,
        discount: 0,
        statusRoom: "clean",
    },
    {
        number: "141",
        name: "Arlinda Hamm Pimer",
        group: [],
        arrivalData: "2023-12-06",
        departureDate: "2023-12-14",
        roomType: "Lyuks B",
        room: "53-821-3131",
        numberOfGuest: 6,
        level: 2,
        howManyTimesUsed: 2,
        capacity: 2,
        occupied: true,
        tariff: 6,
        duration: 8,
        balance: 0,
        paid: 0,
        discount: 0,
        statusRoom: "clean",
    },
];

const radioForm = [
    {
        id: 0,
        value: "gentle",
        label: "Щадящий",
    },
    {
        id: 1,
        value: "bed",
        label: "Постельный",
    },
    {
        id: 2,
        value: "tonic",
        label: "Тонизирующий",
    },
    {
        id: 3,
        value: "coaching",
        label: "Тренирующий",
    },
];

const polData = [
    {
        id: 0,
        name: "[М] Мужской",
    },
    {
        id: 1,
        name: "[Ж] Женский",
    },
];

const DispatchTitlePageTab = () => {
    const {
        handleSubmit,
        onSubmit,
        register,
        scrollRef,
        scrollUp,
        CurrentPatient,
        registerForm,
    } = useDispatchTitlePageTabHook();

    console.log(CurrentPatient, "CurrentPatient");
    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                whiteSpace: "nowrap",
            }}
        >
            <Grid container className="flex ">
                <Grid item xs={12} md={12} className="flex">
                    <Box className="flex w-[50%] justify-end  items-center ">
                        <Typography>История болезни №</Typography>
                        <Box className=" w-[60px] h-[30px] ml-[10px] ">
                            <input className=" bg-[#fff] w-full h-full border-none outline-none " />
                        </Box>
                    </Box>
                    <Box className=" flex w-[50%] justify-end  items-center ">
                        <DefaultButton
                            title="новая"
                            onClick={() => scrollUp()}
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    className="bg-white m-[5px] border min-h-[calc(100vh-280px)] h-[calc(100vh-280px)] overflow-scroll p-[5px]"
                    ref={scrollRef}
                    style={{ whiteSpace: "nowrap" }}
                >
                    <form
                        className="flex justify-between"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="w-[35%]">
                            <PatientInfoSection
                                register={registerForm}
                                pollData={polData}
                                mockData={top100FilmsChack}
                            />
                            <DocumentationForm
                                avtoCaplektData={top100FilmsChack}
                                register={register}
                            />
                        </div>

                        <Box className="w-[64%]">
                            <TravelPackageForm
                                avtoCaplektData={top100FilmsChack}
                                register={register}
                                rowData={rowData}
                            />
                            <HospitalStayForm
                                avtoCaplektData={top100FilmsChack}
                                register={register}
                            />
                            <Comment />
                            <HarmFactors dropdownData={top100FilmsChack} />
                            <TagAutoCompleateBox
                                data={top100FilmsChack}
                                lable="Метки"
                            />
                        </Box>
                    </form>

                    <FrontFooter />
                    <ModeHandler radioFormData={radioForm} />
                    <DiagnostHandler />
                    <RiskFactorsAndTags mockData={top100FilmsChack} />
                    <TitlePageBottomCheckbooks />
                </Grid>
            </Grid>
        </div>
    );
};

export default DispatchTitlePageTab;
