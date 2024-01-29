import { PatientMatchesBundle } from './types';

export function generateRandomPatientMatchesBundle(): PatientMatchesBundle {
  const auto: fhir.Patient[] = [];
  const potentialMatches: fhir.Patient[] = [];
  const conflict: fhir.Patient[] = [];

  const getRandomPatient = (): fhir.Patient => {
    const randomIndex = Math.floor(Math.random() * demoPatients.length);
    return demoPatients[randomIndex];
  };

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Generate random matches
  for (let i = 0; i < randomNumber(0, randomNumber(0, 3)); i++) {
    auto.push(getRandomPatient());
  }

  for (let i = 0; i < randomNumber(2, randomNumber(2, 5)); i++) {
    potentialMatches.push(getRandomPatient());
  }

  for (let i = 0; i < randomNumber(0, randomNumber(0, 1)); i++) {
    conflict.push(getRandomPatient());
  }

  return {
    auto,
    potentialMatches,
    conflict,
  };
}

export const demoPatients = [
  {
    resourceType: 'Patient',
    id: '1a2b3c4d-5e6f-7g8h-9i0j',
    identifier: [
      {
        id: 'a1b2c3d4-e5f6-7g8h-9i0j',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/patient/identifier#location',
            valueReference: {
              reference: 'Location/44c3efb0-2583-4c80-a79e-1f756a03c0a1',
              type: 'Location',
              display: 'Outpatient Clinic',
            },
          },
        ],
        use: 'official',
        type: {
          coding: [
            {
              code: '05a29f94-c0ed-11e2-94be-8c13b969e334',
            },
          ],
          text: 'OpenMRS ID',
        },
        system: 'http://fhir.openmrs.org/openmrs_id',
        value: '10002U8',
      },
    ],
    active: true,
    name: [
      {
        id: 'b1c2d3e4-f5g6h7i8-j9k0l',
        family: 'Smith121',
        given: ['John5'],
      },
    ],
    gender: 'male',
    birthDate: '2020-02',
    deceasedBoolean: false,
    address: [
      {
        id: 'c1d2e3f4-g5h6i7j8-k9l0m',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/address',
            extension: [
              {
                url: 'http://fhir.openmrs.org/ext/address#address1',
                valueString: 'Bom Jesus Street',
              },
            ],
          },
        ],
        use: 'home',
        city: 'Recife12',
        state: 'Pernambuco',
        postalCode: '50030-310',
        country: 'Brazil',
      },
    ],
  },
  {
    resourceType: 'Patient',
    id: '2a3b4c5d-6e7f-8g9h-0i1j',
    identifier: [
      {
        id: 'b2c3d4e5-f6g7h8i9-j0k1l',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/patient/identifier#location',
            valueReference: {
              reference: 'Location/44c3efb0-2583-4c80-a79e-1f756a03c0a1',
              type: 'Location',
              display: 'Outpatient Clinic',
            },
          },
        ],
        use: 'official',
        type: {
          coding: [
            {
              code: '05a29f94-c0ed-11e2-94be-8c13b969e334',
            },
          ],
          text: 'OpenMRS ID',
        },
        system: 'http://fhir.openmrs.org/openmrs_id',
        value: '10003U9',
      },
    ],
    active: true,
    name: [
      {
        id: 'c2d3e4f5-g6h7i8j9-k0l1m',
        family: 'Smith5',
        given: ['John'],
      },
    ],
    gender: 'male',
    birthDate: '2020-02',
    deceasedBoolean: false,
    address: [
      {
        id: 'd2e3f4g5-h6i7j8k9-l0m1n',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/address',
            extension: [
              {
                url: 'http://fhir.openmrs.org/ext/address#address1',
                valueString: 'Bom Jesus Street',
              },
            ],
          },
        ],
        use: 'home',
        city: 'Recife',
        state: 'Pernambuco',
        postalCode: '50030-310',
        country: 'Brazil',
      },
    ],
  },
  {
    resourceType: 'Patient',
    id: '3a4b5c6d-7e8f9g0h-1i2j',
    identifier: [
      {
        id: 'c3d4e5f6-g7h8i9j0-k1l2m',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/patient/identifier#location',
            valueReference: {
              reference: 'Location/44c3efb0-2583-4c80-a79e-1f756a03c0a1',
              type: 'Location',
              display: 'Outpatient Clinic',
            },
          },
        ],
        use: 'official',
        type: {
          coding: [
            {
              code: '05a29f94-c0ed-11e2-94be-8c13b969e334',
            },
          ],
          text: 'OpenMRS ID',
        },
        system: 'http://fhir.openmrs.org/openmrs_id',
        value: '10004U0',
      },
    ],
    active: true,
    name: [
      {
        id: 'd3e4f5g6-h7i8j9k0-l1m2n',
        family: 'Smith',
        given: ['John2'],
      },
    ],
    gender: 'male',
    birthDate: '2020-02',
    deceasedBoolean: false,
    address: [
      {
        id: 'e3f4g5h6-i7j8k9l0-m1n2o',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/address',
            extension: [
              {
                url: 'http://fhir.openmrs.org/ext/address#address1',
                valueString: 'Bom Jesus Street',
              },
            ],
          },
        ],
        use: 'home',
        city: 'Recife',
        state: 'Pernambuco',
        postalCode: '50030-310',
        country: 'Brazil',
      },
    ],
  },
  {
    resourceType: 'Patient',
    id: '4a5b6c7d-8e9f0g1h-2i3j',
    identifier: [
      {
        id: 'd4e5f6g7-h8i9j0k1-l2m3n',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/patient/identifier#location',
            valueReference: {
              reference: 'Location/44c3efb0-2583-4c80-a79e-1f756a03c0a1',
              type: 'Location',
              display: 'Outpatient Clinic',
            },
          },
        ],
        use: 'official',
        type: {
          coding: [
            {
              code: '05a29f94-c0ed-11e2-94be-8c13b969e334',
            },
          ],
          text: 'OpenMRS ID',
        },
        system: 'http://fhir.openmrs.org/openmrs_id',
        value: '10005U1',
      },
    ],
    active: true,
    name: [
      {
        id: 'e4f5g6h7-i8j9k0l1-m2n3o',
        family: 'Smith',
        given: ['John'],
      },
    ],
    gender: 'male',
    birthDate: '2020-02',
    deceasedBoolean: false,
    address: [
      {
        id: 'f4g5h6i7-j8k9l0m1-n2o3p',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/address',
            extension: [
              {
                url: 'http://fhir.openmrs.org/ext/address#address1',
                valueString: 'Bom Jesus Street',
              },
            ],
          },
        ],
        use: 'home',
        city: 'Recife',
        state: 'Pernambuco',
        postalCode: '50030-310',
        country: 'Brazil',
      },
    ],
  },
  {
    resourceType: 'Patient',
    id: '5a6b7c8d-9e0f1g2h-3i4j',
    identifier: [
      {
        id: 'e5f6g7h8-i9j0k1l2-m3n4o',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/patient/identifier#location',
            valueReference: {
              reference: 'Location/44c3efb0-2583-4c80-a79e-1f756a03c0a1',
              type: 'Location',
              display: 'Outpatient Clinic',
            },
          },
        ],
        use: 'official',
        type: {
          coding: [
            {
              code: '05a29f94-c0ed-11e2-94be-8c13b969e334',
            },
          ],
          text: 'OpenMRS ID',
        },
        system: 'http://fhir.openmrs.org/openmrs_id',
        value: '10006U2',
      },
    ],
    active: true,
    name: [
      {
        id: 'f5g6h7i8-j9k0l1m2-n3o4p',
        family: 'Smith',
        given: ['John'],
      },
    ],
    gender: 'male',
    birthDate: '2020-02',
    deceasedBoolean: false,
    address: [
      {
        id: 'g5h6i7j8-k9l0m1n2-o3p4q',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/address',
            extension: [
              {
                url: 'http://fhir.openmrs.org/ext/address#address1',
                valueString: 'Bom Jesus Street',
              },
            ],
          },
        ],
        use: 'home',
        city: 'Recife',
        state: 'Pernambuco',
        postalCode: '50030-310',
        country: 'Brazil',
      },
    ],
  },
  {
    resourceType: 'Patient',
    id: '6a7b8c9d-0e1f2g3h-4i5j',
    identifier: [
      {
        id: 'd6e7f8g9-h0i1j2k3-l4m5n',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/patient/identifier#location',
            valueReference: {
              reference: 'Location/44c3efb0-2583-4c80-a79e-1f756a03c0a1',
              type: 'Location',
              display: 'Outpatient Clinic',
            },
          },
        ],
        use: 'official',
        type: {
          coding: [
            {
              code: '05a29f94-c0ed-11e2-94be-8c13b969e334',
            },
          ],
          text: 'OpenMRS ID',
        },
        system: 'http://fhir.openmrs.org/openmrs_id',
        value: '10007U3',
      },
    ],
    active: true,
    name: [
      {
        id: 'e6f7g8h9-i0j1k2l3-m4n5o',
        family: 'Smith',
        given: ['Jane'],
      },
    ],
    gender: 'female',
    birthDate: '2020-01',
    deceasedBoolean: false,
    address: [
      {
        id: 'f6g7h8i9-j0k1l2m3-n4o5p',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/address',
            extension: [
              {
                url: 'http://fhir.openmrs.org/ext/address#address1',
                valueString: 'Ocean View Drive',
              },
            ],
          },
        ],
        use: 'home',
        city: 'Recife12',
        state: 'Pernambuco',
        postalCode: '50030-310',
        country: 'Brazil',
      },
    ],
  },
  {
    resourceType: 'Patient',
    id: '7a8b9c0d-1e2f3g4h-5i6j',
    identifier: [
      {
        id: 'f7g8h9i0-j1k2l3m4-n5o6p',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/patient/identifier#location',
            valueReference: {
              reference: 'Location/44c3efb0-2583-4c80-a79e-1f756a03c0a1',
              type: 'Location',
              display: 'Outpatient Clinic',
            },
          },
        ],
        use: 'official',
        type: {
          coding: [
            {
              code: '05a29f94-c0ed-11e2-94be-8c13b969e334',
            },
          ],
          text: 'OpenMRS ID',
        },
        system: 'http://fhir.openmrs.org/openmrs_id',
        value: '10008U4',
      },
    ],
    active: true,
    name: [
      {
        id: 'g8h9i0j1-k2l3m4n5-o6p7q',
        family: 'Smith',
        given: ['John'],
      },
    ],
    gender: 'male',
    birthDate: '2020-02',
    deceasedBoolean: false,
    address: [
      {
        id: 'h9i0j1k2-l3m4n5o6-p7q8r',
        extension: [
          {
            url: 'http://fhir.openmrs.org/ext/address',
            extension: [
              {
                url: 'http://fhir.openmrs.org/ext/address#address1',
                valueString: 'Ocean View Drive',
              },
            ],
          },
        ],
        use: 'home',
        city: 'Recife',
        state: 'Pernambuco',
        postalCode: '50030-310',
        country: 'Brazil',
      },
    ],
  },
];
