import { Box } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CaretRightDownIcon2, CheckIcon, EditIcon } from 'assets/icons/icons';
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
    expandIcon={<CaretRightDownIcon2 style={{ transform: 'rotate(315deg)' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginTop: 5,
    marginBottom: 5,
    gap: 2,
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
  titleStyle?: any;
  isActive: boolean;
  status?: 'editing' | 'done' | 'idle';
};

function SaidBarCustomizedAccordions(props: propsType) {
  const [expanded, setExpanded] = React.useState<string | false>('');
  const { status } = props;

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="w-[100%] relative " onClick={props.onClick}>
      <Accordion
        expanded={expanded === 'panel'}
        onChange={handleChange('panel')}
        className={`items-center justify-center rounded min-h-[30px] ${!props.isActive ? 'bg-white ' : 'bg-[#64B6F7]'}`}>
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{
            ...props.topBoxStyle,
            paddingBottom: expanded ? 0 : '5px',
          }}
          className="items-center !min-h-min !h-min">
          {status === 'editing' && (
            <Box alignSelf={'center'} width={'18px'} marginRight={'2px'}>
              <EditIcon width={'18px'} height={18} />
            </Box>
          )}
          {status === 'done' && (
            <Box alignSelf={'center'} width={'18px'} marginRight={'2px'}>
              <CheckIcon width={'18px'} height={18} />
            </Box>
          )}
          <Typography
            className="font-roboto text-black text-xs font-normal"
            marginLeft={!status || status === 'idle' ? '5px' : 0}>
            {props.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={props.childrenStyle}>
          {props?.children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SaidBarCustomizedAccordions;
