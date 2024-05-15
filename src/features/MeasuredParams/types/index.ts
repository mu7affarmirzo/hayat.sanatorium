export interface ArterialParamProps {
  systologic: number;
  diastologic: number
  illness_history: number
  created_by: number
  date?: string
}

export interface ArterialParamResponse extends ArterialParamProps {
  date: string
  id: number
}

export interface GlucometerParamProps {
  blood_glucose: number;
  illness_history: number
  created_by: number
}

export interface GlucometerParamResponse extends GlucometerParamProps {
  date: string
  id: number
}

export interface PulseParamProps {
  pulse: number;
  illness_history: number
  created_by: number
}

export interface PulseParamResponse extends PulseParamProps {
  date: string
  id: number
}

export interface SaturationParamProps {
  saturation: number;
  illness_history: number
  created_by: number
}

export interface SaturationParamResponse extends SaturationParamProps {
  date: string
  id: number
}

export interface TemperatureParamProps {
  temperature: number;
  illness_history: number
  created_by: number
}

export interface TemperatureParamResponse extends TemperatureParamProps {
  date: string
  id: number
}
