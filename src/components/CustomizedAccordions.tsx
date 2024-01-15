import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { ArrowDropSownIcon } from 'assets/icons/icons';
import * as React from 'react';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={
            <ArrowDropSownIcon style={{ transform: 'rotate(-90deg)' }} />
        }
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: '5px 10px',
}));

type propsType = {
    children?: any;
    title?: string;
    childrenStyle?: any;
    topBoxStyle?: any;
};

export default function CustomizedAccordions(props: propsType) {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className="w-[100%] relative">
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    sx={
                        props.topBoxStyle
                            ? props.topBoxStyle
                            : { background: '#e8e6e6' }
                    }
                >
                    <Typography>{props?.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={props.childrenStyle}>
                    {props?.children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
