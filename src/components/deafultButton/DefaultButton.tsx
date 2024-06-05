import { Button, Typography } from '@mui/material';
import { CommonProps } from '@mui/material/OverridableComponent';

type propsType = {
  classStyle?: string;
  title?: string;
  icon?: any;
  variant?: any;
  onClick?: any;
  disabled?: boolean;
  className?: CommonProps['className'];
  submitType?: 'button' | 'submit' | 'reset' | undefined;
  color?: string;
};
const DefaultButton = (props: propsType) => {
  let {
    classStyle,
    title,
    icon,
    variant,
    onClick,
    disabled,
    submitType,
    color = '#fff',
  } = props;
  return (
    <Button
      onClick={onClick}
      variant={variant ? variant : 'contained'}
      startIcon={icon}
      disabled={disabled}
      type={submitType}
      className={`${
        classStyle ? classStyle : ' bg-[##2196F3] h-[46px] text-[#fff]'
      } ${disabled ? 'opacity-50' : 'opacity-100'} normal-case `}>
      <Typography className={`text-[${color}] font-roboto text-sm`}>
        {title}
      </Typography>
    </Button>
  );
};

export default DefaultButton;
