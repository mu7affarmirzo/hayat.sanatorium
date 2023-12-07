import { FC, createContext, useContext, useMemo, useState } from 'react';
import {
    MVisibleType,
    ModalsContextType,
    ModalsProviderType,
    ModalsState,
} from './Modals.types';

import AddingConnectionModal from './AddingConnectionModal';

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
            {children}
        </ModalsContext.Provider>
    );
};
export const useAppModals = () => useContext(ModalsContext);
