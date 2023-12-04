import React, { useMemo } from 'react';
import {
  Button,
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from '@carbon/react';
import { ArrowRight, Renew } from '@carbon/react/icons';
import { EmptyState } from '../empty-state/empty-state.component';
import { useTranslation } from 'react-i18next';

const actionsMap = {
  create: (
    <Button
      kind="ghost"
      renderIcon={(props) => <ArrowRight size={16} {...props} />}
      iconDescription="Register Patient"
    />
  ),
  import: (
    <Button kind="ghost" renderIcon={(props) => <Renew size={16} {...props} />} iconDescription="Import & start over" />
  ),
};
export const PatientDetails: React.FC<{
  patients: fhir.Patient[];
  title: string;
  action: 'create' | 'import';
}> = ({ patients, title, action }) => {
  const { t } = useTranslation();

  const headers = useMemo(
    () => [
      {
        key: 'givenName',
        header: 'Given Name',
      },
      {
        key: 'middleName',
        header: 'Middle Name',
      },
      {
        key: 'familyName',
        header: 'Family Name',
      },
      {
        key: 'gender',
        header: 'Gender',
      },
      {
        key: 'dob',
        header: 'Date of Birth',
      },
      {
        key: 'action',
        header: 'Action',
      },
    ],
    [],
  );

  const rows = useMemo(() => {
    patients.map((patient) => ({
      givenName: patient.name[0].given[0],
      middleName: patient.name[0].given[1],
      familyName: patient.name[0].family,
      gender: patient.gender,
      dob: patient.birthDate,
      action: actionsMap[action],
    }));
  }, [action, patients]);

  if (!patients.length) {
    return <EmptyState displayText={t('patients', 'patients')} headerTitle={title} />;
  }
  return (
    <DataTable rows={rows} headers={headers} useZebraStyles>
      {({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              <TableExpandHeader />
              {headers.map((header) => (
                <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <React.Fragment key={row.id}>
                <TableExpandRow {...getRowProps({ row })}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableExpandRow>
                {row.isExpanded && (
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <span>Exapanded..</span>
                  </TableExpandedRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      )}
    </DataTable>
  );
};
