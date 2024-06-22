import DiagnostikaItem from "components/DiagnostikaItem";
import { useAppModals } from "components/Modals";

type DiagnostHandlerProps = {
    disabled?: boolean
}
const DiagnostHandler = (props: DiagnostHandlerProps) => {
    const { disabled } = props

    const appModals = useAppModals();
    return (
        <>
            <DiagnostikaItem
                disabledAll={disabled}
                title="Диагноз с места отбора"
                text="Диагноз не задан."
                btnTitle="Добавить диагноз"
                onClick={() => appModals?.show("choosingDiagnosis")}
            />
            <DiagnostikaItem
                disabledAll={disabled}
                title="Диагноз стационара при поступлении"
                text="Диагноз не определен"
            />
            <DiagnostikaItem
                disabledAll={disabled}
                title="Диагноз стационара при выписке"
                text="Диагноз не определен"
            />
        </>
    );
};

export default DiagnostHandler;
