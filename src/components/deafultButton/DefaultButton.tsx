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
};
const DefaultButton = (props: propsType) => {
  let { classStyle, title, icon, variant, onClick, disabled, submitType } =
    props;
  return (
    <Button
      onClick={onClick}
      variant={variant ? variant : 'contained'}
      startIcon={icon}
      disabled={disabled}
      type={submitType}
      className={`${
        classStyle ? classStyle : ' bg-[#2196F3] h-[46px] text-[#fff]'
      } ${
        disabled ? 'opacity-50' : 'opacity-100'
      } text-[14px]  capitalize text-[#000]`}>
      <Typography className="text-[#fff]">{title}</Typography>
    </Button>
  );
};

export default DefaultButton;
