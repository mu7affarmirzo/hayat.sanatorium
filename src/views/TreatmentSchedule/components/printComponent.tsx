import PDFComponent from "./myDocument";
import { useRef } from "react";

// PDFComponent wrapper komponenti //

const PrintComponent = ({ data }: any) => {
    const pdfRef = useRef();
    return (
        <>
            <PDFComponent ref={pdfRef} data={data} />
        </>
    );
};
export default PrintComponent;
