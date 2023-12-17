import { createStyles } from '@mui/material';
import { COLORS } from 'constants/color';

export const useStyles = createStyles(() => ({
    sidebar: {
        height: '100%',
        width: '160px',
        position: 'fixed',
        zIndex: 1,
        top: '0',
        left: '0',
        backgroundColor: '#111',
        overflowX: 'hidden',
        paddingTop: '20px',
    },
    navEl: {
        width: 88,
        cursor: 'pointer',
        height: 88,
        padding: '12px 26px',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        display: 'flex',
        backgroundColor: COLORS['dark-blue'],
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center',
        color: `${COLORS['icon-color']} !important`,
        svg: {
            color: `${COLORS['icon-color']} !important`,
        },
        ':hover': {
            color: 'white !important',
            svg: {
                color: 'white !important',
            },
            background: COLORS.blue,
        },
    },
    activeNavEl: {
        color: 'white !important',
        svg: {
            color: 'white !important',
        },
        background: COLORS.blue,
    },
    subNavEl: {
        cursor: 'pointer',
        position: 'relative',
        padding: '20px 5px 20px 27px',
        height: 56,
        width: '100%',
        textAlign: 'left',
        display: 'flex',
        backgroundColor: COLORS.blue,
        gap: 15,
        alignItems: 'center',

        color: `${COLORS['icon-color']} !important`,
        svg: {
            color: `${COLORS['icon-color']} !important`,
        },
        ':hover': {
            color: 'white !important',
            svg: {
                color: 'white !important',
            },
            background:
                'linear-gradient(270deg, #002F55 0%, rgba(0, 47, 85, 0) 100%)',
        },
    },
    activeSubNavEl: {
        position: 'relative',
        color: 'white !important',
        svg: {
            color: 'white !important',
        },
        background:
            'linear-gradient(270deg, #002F55 0%, rgba(0, 47, 85, 0) 100%)',
        '::after': {
            content: "''",
            width: 3,
            height: '100%',
            background: COLORS['brown-color'],
            position: 'absolute',
            right: 0,
        },
    },
}));
