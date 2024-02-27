import { Grid } from "@mui/material";
import DefaultButton from "components/DeafultButton/DefaultButton";
import React from "react";

const InvoicesAccounts = () => {
    return (
        <Grid container className="p-[5px] w-full h-full">
            <Grid item xs={12} md={12}>
                <DefaultButton
                    title="Добавить счёт"
                    classStyle="bg-[#4CAF50]"
                    disabled={true}
                />
            </Grid>
        </Grid>
    );
};

export default InvoicesAccounts;
