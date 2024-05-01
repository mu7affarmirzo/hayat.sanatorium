import React from "react";
import {
    PDFDownloadLink,
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";
import { Button } from "@mui/material";
import { VuesaxLinearPrinterIcon } from "assets/icons/icons";

// Backenddan olingan ma'lumotlar
const backendData = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    // Qolgan ma'lumotlar...
];

// PDF yaratish uchun komponent
export const MyDocument = ({ data }: any) => (
    <Document>
        <Page style={styles.page} size="A4">
            <View style={styles.section}>
                <Text>Section #1</Text>
            </View>
            <View style={styles.section}>
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);

// PDF yaratish uchun stil
const styles = StyleSheet.create({
    page: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffff",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

// PDF yuklash havolasi komponenti
const PDFLink = ({ data }: any) => (
    <PDFDownloadLink className="font-roboto text-[#727272] text-[14px]" document={<MyDocument data={data} />} fileName="data.pdf">
        {({ blob, url, loading, error }) =>
            loading ? "PDF yaratilmoqda..." : "Print"
        }
    </PDFDownloadLink>
);

// PDF komponenti yaratish
const PDFComponent = ({ data }: any) => (
    <>
        <Button
            variant={"contained"}
            className="bg-[#ebebeb] capitalize mr-3 "
            startIcon={<VuesaxLinearPrinterIcon stroke="#727272" />}
        >
            <PDFLink data={data} />
        </Button>
    </>
);

export default PDFComponent;
