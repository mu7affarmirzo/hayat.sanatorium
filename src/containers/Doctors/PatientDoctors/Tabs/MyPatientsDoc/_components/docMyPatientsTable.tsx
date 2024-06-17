import { Grid } from '@mui/material';
import { Table } from 'components/CollapseTable/CollapseTable';
import { GetDocPatientsColDef } from 'containers/Doctors/PatientDoctors/Tabs/MyPatientsDoc/_components/column';
import { GetMyPatients } from 'features/DoctorsRoleService/types';

type Props = {
  rowData: GetMyPatients[];
  numberOfPatient: number;
  handleClickedRowTable: (item: GetMyPatients) => void;
};

export const DocMyPatientsTableContainer = ({
  rowData,
  numberOfPatient,
  handleClickedRowTable,
}: Props) => {
  const groupedData: Record<string, GetMyPatients[]> = {};
  rowData?.forEach((item) => {
    const cito = item.cito || 'No Cito'; // Handle cases where "Cito" value is null or undefined
    if (!groupedData[cito]) {
      groupedData[cito] = [];
    }
    groupedData[cito].push(item);
  });

  return (
    <Grid item xs={12} md={12} className="bg-[#F5F5F5]">
      {Object.entries(groupedData).map(([cito, data], index) => (
        <Table
          key={index}
          isCollapsible
          data={data}
          columns={GetDocPatientsColDef}
          cito={cito}
          handleRowClicked={handleClickedRowTable}
          collapseTitle={`Лечащий врач, количество пациентов: ${numberOfPatient}`}
        />
      ))}
    </Grid>
  );
};
