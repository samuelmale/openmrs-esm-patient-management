import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import type { Note } from '../visit.resource';
import styles from '../visit-detail-overview.scss';

interface NotesSummaryProps {
  notes: Array<Note>;
}

const NotesSummary: React.FC<NotesSummaryProps> = ({ notes }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <React.Fragment key={index}>
            <p className={classNames(styles.medicationBlock, styles.bodyLong01)} data-testid={'note'}>
              {note.note}
            </p>
            <p className={styles.caption01} style={{ color: '#525252' }}>
              {note.time} &middot; {note.provider.name} &middot; {note.provider.role}
            </p>
          </React.Fragment>
        ))
      ) : (
        <p className={classNames(styles.bodyLong01, styles.text02)}>{t('noNotesFound', 'No notes found')}</p>
      )}
    </React.Fragment>
  );
};

export default NotesSummary;
