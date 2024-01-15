import { Box } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CaretRightDownIcon2, SearchIcon } from 'assets/icons/icons';
import * as React from 'react';
import { useForm } from 'react-hook-form';
interface IFormInput {
    name: string;
}
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
    search?: any;
    titleStyle?: any;
};

export default function SaidBarCustomizedAccordions(props: propsType) {
    const [expanded, setExpanded] = React.useState<string | false>('');
    const { register, handleSubmit } = useForm<IFormInput>();

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
                    sx={props.topBoxStyle}
                >
                    <Typography
                        className={`${props.titleStyle} text-[12px] mt-[3px]`}
                    >
                        {props?.title}
                    </Typography>
                    {props.search ? (
                        <Box className="flex items-center rounded-[5px] bg-[#fff] w-[140px] pl-[2px] ml-[5px] border ">
                            <SearchIcon width="16px" />
                            <input
                                className=" outline-none border-none w-[60%] ml-[5px] text-[#000]"
                                {...register(`name`, {
                                    required: true,
                                })}
                            />
                        </Box>
                    ) : null}
                </AccordionSummary>
                <AccordionDetails sx={props.childrenStyle}>
                    {props?.children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
