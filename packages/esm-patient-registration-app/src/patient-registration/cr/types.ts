export interface PatientMatchesBundle {
  auto: fhir.Patient[];
  potentialMatches: fhir.Patient[];
  conflict: fhir.Patient[];
}
