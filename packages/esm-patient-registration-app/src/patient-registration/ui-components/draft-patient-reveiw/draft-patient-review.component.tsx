import React from 'react';
import { ComposedModal, ModalHeader, ModalBody, Stack } from '@carbon/react';
import { PatientMatchesBundle } from '../../cr/types';
import { PatientDetails } from '../patient-details-table/patient-details-table.component';

export const DraftPatientReview: React.FC<{
  draftPatient: fhir.Patient;
  potentialMatches: PatientMatchesBundle;
  open: boolean;
}> = ({ draftPatient, potentialMatches, open }) => {
  return (
    <ComposedModal open={open} onClose={() => {}}>
      <ModalHeader label="Account resources" title="Add a custom domain" />
      <ModalBody>
        <Stack gap={2}>
          <PatientDetails patients={[draftPatient]} title="New Patient" action="create" />
        </Stack>
        <Stack gap={2}>
          <PatientDetails patients={potentialMatches?.auto || []} title="Auto Matches" action="import" />
        </Stack>
        <Stack gap={2}>
          <PatientDetails
            patients={potentialMatches?.potentialMatches || []}
            title="Potential Matches"
            action="import"
          />
        </Stack>
        <Stack gap={2}>
          <PatientDetails patients={potentialMatches?.conflict || []} title="Conflict Matches" action="import" />
        </Stack>
      </ModalBody>
    </ComposedModal>
  );
};
