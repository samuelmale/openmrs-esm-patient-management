import React from 'react';
import { ComposedModal, ModalHeader, ModalBody, Stack, ModalFooter } from '@carbon/react';
import { PatientMatchesBundle } from '../../cr/types';
import { PatientDetails } from '../patient-details-table/patient-details-table.component';
import styles from './patient-review-modal.scss';
import { FormikProps } from 'formik';
import { FormValues } from '../../patient-registration.types';
import { filterUndefinedPatientIdenfier } from '../../patient-registration-utils';
import { useTranslation } from 'react-i18next';

export const PatientReviewModal: React.FC<{
  draftPatient: fhir.Patient;
  potentialMatches: PatientMatchesBundle;
  isOpen: boolean;
  formikProps: FormikProps<FormValues>;
  savePatient: (formValues: FormValues, abortController: AbortController) => void;
  onStartOver: (patient: fhir.Patient) => void;
  onClose: () => void;
}> = ({ draftPatient, potentialMatches, isOpen, formikProps, savePatient, onStartOver, onClose }) => {
  const { t } = useTranslation();

  const onConfirmCreate = async () => {
    formikProps.setSubmitting(true);
    await savePatient(
      { ...formikProps.values, identifiers: filterUndefinedPatientIdenfier(formikProps.values.identifiers) },
      new AbortController(),
    );
    formikProps.setSubmitting(false);
  };

  return (
    <ComposedModal open={isOpen} onClose={() => onClose()} size="lg" preventCloseOnClickOutside>
      <ModalHeader label="CR" title="Patient Review" />
      <ModalBody>
        <Stack gap={3} className={styles.container}>
          <PatientDetails
            patients={[draftPatient]}
            title="New Patient"
            action="create"
            isSubmitting={formikProps.isSubmitting}
            onConfirmCreate={onConfirmCreate}
            onStartOver={onStartOver}
          />
        </Stack>
        <Stack gap={3} className={styles.container}>
          <PatientDetails
            patients={potentialMatches?.auto || []}
            title="Auto Matches"
            action="import"
            isSubmitting={formikProps.isSubmitting}
            onConfirmCreate={onConfirmCreate}
            onStartOver={onStartOver}
          />
        </Stack>
        <Stack gap={3} className={styles.container}>
          <PatientDetails
            patients={potentialMatches?.potentialMatches || []}
            title="Potential Matches"
            action="import"
            isSubmitting={formikProps.isSubmitting}
            onConfirmCreate={onConfirmCreate}
            onStartOver={onStartOver}
          />
        </Stack>
        <Stack gap={3} className={styles.container}>
          <PatientDetails
            patients={potentialMatches?.conflict || []}
            title="Conflict Matches"
            action="import"
            isSubmitting={formikProps.isSubmitting}
            onConfirmCreate={onConfirmCreate}
            onStartOver={onStartOver}
          />
        </Stack>
      </ModalBody>
      <ModalFooter
        primaryButtonText="Register Patient"
        secondaryButtonText="Cancel"
        primaryButtonDisabled={formikProps.isSubmitting}
      />
    </ComposedModal>
  );
};
