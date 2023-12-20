import { FC, createContext, useContext, useMemo, useState } from 'react';
import {
    MVisibleType,
    ModalsContextType,
    ModalsProviderType,
    ModalsState,
} from './Modals.types';

import AddingConnectionModal from './AddingConnectionModal';
import ProfessionalRouteModal from './ProfessionalRouteModal';
import ChoosingDiagnosisModal from './ChoosingDiagnosisModal';
import AddReasonModal from './AddReasonModal';
import SelectingDestinationsModal from './SelectingDestinationsModal';
import AddConsultationsModal from './AddConsultationsModal';
import CreateDestinationsModal from './CreateDestinationsModal';
import SelectStudiesMoodal from './SelectStudiesMoodal';

const ModalsContext = createContext<ModalsContextType | null>(null);

const initialState = {
    createPayment: {
        active: false,
        neverWork: false,
    },
    advertising: {
        active: false,
        neverWork: false,
    },
    professionalRoute: {
        active: false,
        neverWork: false,
    },
    choosingDiagnosis: {
        active: false,
        neverWork: false,
    },
    add_reason: {
        active: false,
        neverWork: false,
    },
    selecting_destination: {
        active: false,
        neverWork: false,
    },
    add_consultations: {
        active: false,
        neverWork: false,
    },
    create_destinations: {
        active: false,
        neverWork: false,
    },
    select_studies: {
        active: false,
        neverWork: false,
    },
};

export const ModalsProvider: FC<ModalsProviderType> = ({ children }) => {
    const [state, updateState] = useState<ModalsState>(initialState);

    const show = (type: MVisibleType) => {
        updateState((oldState) => ({
            ...oldState,
            [type]: {
                ...oldState[type],
                active: true,
            },
        }));
    };

    const hide = (type?: MVisibleType) => {
        if (!type) {
            updateState(initialState);
        } else {
            updateState(() => ({
                ...initialState,
                [type]: {
                    ...initialState[type],
                    active: false,
                },
            }));
        }
    };
    const value = useMemo(() => ({ show, hide, state }), [hide, show, state]);

    return (
        <ModalsContext.Provider value={value}>
            <AddingConnectionModal />
            <ProfessionalRouteModal />
            <ChoosingDiagnosisModal />
            <AddReasonModal />
            <SelectingDestinationsModal />
            <AddConsultationsModal />
            <CreateDestinationsModal />
            <SelectStudiesMoodal />
            {children}
        </ModalsContext.Provider>
    );
};
export const useAppModals = () => useContext(ModalsContext);
