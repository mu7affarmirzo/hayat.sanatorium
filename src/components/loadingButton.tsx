import { Check } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';
import { FC } from 'react';

interface LoadingButtonProps {
    loading?: boolean;
    onClick?: () => void;
    isDone?: boolean;
    disabled?: boolean;
    classes?: string;
    variant?: 'text' | 'outlined' | 'contained' | undefined;
    sxSize?: any;
    children?: string;
}

const LoadingButton: FC<LoadingButtonProps> = (props) => {
    const {
        loading,
        onClick,
        isDone,
        disabled,
        classes,
        children,
        variant = 'contained',
        sxSize,
    } = props;
    if (isDone) {
        return (
            <Button className={classes} disabled>
                <Check />
            </Button>
        );
    } else if (loading) {
        return (
            <Button className={classes}>
                <CircularProgress />
            </Button>
        );
    } else {
        return (
            <Button
                className={classes}
                onClick={onClick}
                variant={variant}
                disabled={disabled}
                sx={sxSize}
            >
                {children}
            </Button>
        );
    }
};

export default LoadingButton;
