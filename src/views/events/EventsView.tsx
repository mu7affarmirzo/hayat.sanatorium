import { Grid } from '@mui/material';
import CustomizedAccordions from 'components/CustomizedAccordions';

const EventsView = () => {
    return (
        <Grid className="" container>
            <CustomizedAccordions
                title="Параметры поиска:"
                childrenStyle={{ background: '#F5F5F5' }}
            ></CustomizedAccordions>
        </Grid>
    );
};

export default EventsView;
