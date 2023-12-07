export const COLORS = {
    orange: 'rgba(255, 92, 0, 1)',
    light: '#EDE4FF',
    white: '#fff',
    black: '#000000',
    grey: 'rgba(129, 130, 133, 0.8)',
    purple: '#8b3ffc',
};

export const AddAlpha = (hex: string, alpha: number) =>
    `${hex}${Math.floor(alpha * 255)
        .toString(16)
        .padStart(2, '0')}`;
