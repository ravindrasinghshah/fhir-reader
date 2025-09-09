import { Codings } from "./coding";

export type Allergy = {
  resourceType: string;
  id: string;
  identifier: [
    {
      system: string;
      value: string;
    }
  ];
  clinicalStatus: Codings;
  verificationStatus: Codings;
  type: Codings;
  category: Array<string>;
  criticality: string;
  code: Codings;
  patient: {
    reference: string;
  };
  onsetDateTime: string;
  recordedDate: string;
  recorder: {
    reference: string;
  };
  asserter: {
    reference: string;
  };
  note: [
    {
      text: string;
    }
  ];
  reaction: [
    {
      substance: Codings;
      manifestation: [
        {
          concept: Codings;
        }
      ];
      description: string;
      onset: string;
      severity: string;
      exposureRoute: Codings;
    },
    {
      manifestation: [
        {
          concept: Codings;
        }
      ];
      onset: string;
      severity: string;
      note: [
        {
          text: string;
        }
      ];
    }
  ];
};
