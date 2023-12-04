import { openmrsFetch } from '@openmrs/esm-framework';
import { PatientMatchesBundle } from './types';

export async function checkForPotentialMatches(patient: fhir.Patient, abortController: AbortController) {
  const response = await openmrsFetch<PatientMatchesBundle>('/ws/rest/v1/clientregistry/patient-matches', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: patient,
    signal: abortController.signal,
  });
  return response.data;
}
