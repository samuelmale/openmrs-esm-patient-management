import { SyncProcessOptions } from '@openmrs/esm-framework';
import FormManager from './patient-registration/form-manager';
import {
  CapturePhotoProps,
  FormValues,
  PatientIdentifierType,
  PatientUuidMapType,
} from './patient-registration/patient-registration-types';

export interface PatientRegistration {
  id?: number;
  patientUuid: string;
  formValues: FormValues;
  patientUuidMap: PatientUuidMapType;
  initialAddressFieldValues: Record<string, any>;
  identifierTypes: Array<PatientIdentifierType>;
  capturePhotoProps: CapturePhotoProps;
  patientPhotoConceptUuid: string;
  currentLocation: string;
  personAttributeSections: any;
}

export async function syncPatientRegistration(
  queuedPatient: PatientRegistration,
  options: SyncProcessOptions<PatientRegistration>,
) {
  await FormManager.savePatientFormOnline(
    undefined,
    queuedPatient.formValues,
    queuedPatient.patientUuidMap,
    queuedPatient.initialAddressFieldValues,
    queuedPatient.identifierTypes,
    queuedPatient.capturePhotoProps,
    queuedPatient.patientPhotoConceptUuid,
    queuedPatient.currentLocation,
    queuedPatient.personAttributeSections,
    options.abort,
  );
}
