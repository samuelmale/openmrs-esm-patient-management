import { BehaviorSubject } from 'rxjs';
import { Patient } from '../patient-registration.types';
import { FormManager } from '../form-manager';
import { checkForPotentialMatches } from './client-registry.resource';

export const crPatientSubject = new BehaviorSubject<Patient>(null);

export function handleDraftPatientAndCheckCRMatches(draftPatient: Patient, abortController: AbortController) {
  const fhirPatient = FormManager.mapPatientToFhirPatient(draftPatient);
  return checkForPotentialMatches(fhirPatient, abortController);
}
