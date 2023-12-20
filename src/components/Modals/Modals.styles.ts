import { COLORS, AddAlpha } from 'constants/color';
import { RESPONSIVE } from 'constants/constants';
import styled from 'styled-components';

export const CreatePaymentNowContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${AddAlpha(COLORS.black, 0.1)};
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
        z-index: 999;
        opacity: 1;
    }

    &.none {
        z-index: -999;
        opacity: 0;
    }

    .cancel_window {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .container {
        position: relative;
        z-index: 999;
        border-radius: 5px;

        @media (min-width: ${RESPONSIVE.minPhone}) {
            width: 100%;
        }
        @media (min-width: ${RESPONSIVE.phone}) {
            width: 90%;
        }
        @media (min-width: ${RESPONSIVE.largeDevice}) {
            width: 1400px;
        }
    }
`;
export const CallMeLaterModalContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${AddAlpha(COLORS.black, 0.1)};
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
        z-index: 999;
        opacity: 1;
    }

    &.none {
        z-index: -999;
        opacity: 0;
    }

    .cancel_window {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .container {
        position: relative;
        z-index: 999;
        border-radius: 5px;

        @media (min-width: ${RESPONSIVE.minPhone}) {
            width: 100%;
        }
        @media (min-width: ${RESPONSIVE.phone}) {
            width: 90%;
        }
        @media (min-width: ${RESPONSIVE.largeDevice}) {
            width: 1400px;
        }
    }
`;

export const ModalStyle = `fixed left-0 right-0 top-0 bottom-0 bg-[${AddAlpha(
    COLORS.black,
    0.1
)}] flex justify-between items-center transition-all `;

export const AddConsultationContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${AddAlpha(COLORS.black, 0.1)};
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
        z-index: 999;
        opacity: 1;
    }

    &.none {
        z-index: -999;
        opacity: 0;
    }

    .cancel_window {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .container {
        position: relative;
        z-index: 999;
        border-radius: 5px;
        width: 200px;
        background-color: #f5f5f5;
    }
`;
export const SelectStudiesContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${AddAlpha(COLORS.black, 0.1)};
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
        z-index: 999;
        opacity: 1;
    }

    &.none {
        z-index: -999;
        opacity: 0;
    }

    .cancel_window {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .container {
        position: relative;
        z-index: 999;
        border-radius: 5px;
        width: 800px;
        background-color: #f5f5f5;
    }
`;
