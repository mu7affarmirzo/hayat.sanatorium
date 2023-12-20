export type MVisibleType =
    | 'createPayment'
    | 'advertising'
    | 'professionalRoute'
    | 'choosingDiagnosis'
    | 'add_reason'
    | 'selecting_destination'
    | 'add_consultations'
    | 'create_destinations'
    | 'select_studies';

export type ModalsState = {
    [key in MVisibleType]: {
        active: boolean;
        neverWork: boolean;
    };
};

export type ModalsContextType = {
    show(type: MVisibleType): void;
    hide(type?: MVisibleType): void;
    state: ModalsState;
};
export type ModalsProviderType = {
    children: any;
};
