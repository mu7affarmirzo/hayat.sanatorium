import { Grid } from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BookingScreenTabs, { TabsItem } from 'components/bookingTabs';
import DefaultText from 'components/defaultText/DefaultText';
import InvoicesDocuments from 'components/invoicesDocuments/InvoicesDocuments';
const content: TabsItem[] = [
    {
        title: 'Документы',
        component: InvoicesDocuments,
    },
];
const InvoicesDocumentsView = () => {
    return (
        <div className="w-full  h-full  p-3  relativ bg-[#F5F5F5]">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid container>
                    <Grid item xs={12} md={12} className=" flex ">
                        <DefaultText style={'text-[20px] text-[#000]'}>
                            Документы
                        </DefaultText>
                    </Grid>
                </Grid>
                <Grid container className="bg-[#fff] h-[72vh]">
                    <Grid item xs={12} md={12} className="flex p-[5px]">
                        <BookingScreenTabs content={content} />
                    </Grid>
                </Grid>
            </LocalizationProvider>
        </div>
    );
};

export default InvoicesDocumentsView;
