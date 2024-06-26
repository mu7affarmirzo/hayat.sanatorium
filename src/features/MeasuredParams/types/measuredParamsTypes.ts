
export type MeasuredParamsTab = {
   id: number
   title: string
}

export interface MeasuredParametersState {
   tabsList: MeasuredParamsTab[];
   currentTabId: number
   removedTabs: MeasuredParamsTab[];
}