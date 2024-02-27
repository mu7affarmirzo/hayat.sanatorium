import DiagnostikaItem from "components/DiagnostikaItem";
import { useAppModals } from "components/Modals";

const DiagnostHandler = () => {
    const appModals = useAppModals();
    return (
        <>
            <DiagnostikaItem
                title="Диагноз с места отбора"
                text="Диагноз не задан."
                btnTitle="Добавить диагноз"
                onClick={() => appModals?.show("choosingDiagnosis")}
            />
            <DiagnostikaItem
                title="Диагноз стационара при поступлении"
                text="Диагноз не определен"
            />
            <DiagnostikaItem
                title="Диагноз стационара при выписке"
                text="Диагноз не определен"
            />
        </>
    );
};

export default DiagnostHandler;
