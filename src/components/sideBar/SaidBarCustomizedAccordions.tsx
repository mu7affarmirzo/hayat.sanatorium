import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CaretRightDownIcon2 } from 'assets/icons/icons';
import * as React from 'react';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    cursor: 'pointer',
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
            <CaretRightDownIcon2 style={{ transform: 'rotate(320deg)' }} />
        }
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(40deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({}) => ({
    padding: 0,
}));

type propsType = {
    children?: any;
    title?: string;
    childrenStyle?: any;
    topBoxStyle?: any;
    onClick?: () => void;
    activBtnType?: string;
};

export default function SaidBarCustomizedAccordions(props: propsType) {
    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div className="w-[100%] relative" onClick={props.onClick}>
            <Accordion
                expanded={expanded === 'panel'}
                onChange={handleChange('panel')}
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
                    <Typography className=" p-0  m-0 text-[12px]">
                        {props?.title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={props.childrenStyle}>
                    {props?.children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
