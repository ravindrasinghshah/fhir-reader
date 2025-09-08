import { Address } from "./address";
import { Codings } from "./coding";
import { Name } from "./name";
import { Period } from "./period";
import { Telecom } from "./telecom";

export type FHIR = {
  resourceType: string;
  id: string;
  identifier: [
    {
      use: string;
      type: Codings;
      system: string;
      value: string;
      period: Period;
      assigner: {
        display: string;
      };
    }
  ];
  active: boolean;
  name: Array<Name>;
  telecom: Array<Telecom>;
  gender: string;
  birthDate: string;
  _birthDate: {
    extension: [
      {
        url: string;
        valueDateTime: string;
      }
    ];
  };
  deceasedBoolean: boolean;
  address: Array<Address>;
  contact: [
    {
      relationship: Array<Codings>;
      name: {
        family: string;
        _family: {
          extension: [
            {
              url: string;
              valueString: string;
            }
          ];
        };
        given: Array<string>;
      };
      additionalName: Array<Name>;
      telecom: Array<Telecom>;
      address: Address;
      additionalAddress: Array<Address>;
      gender: string;
      period: Period;
    }
  ];
  managingOrganization: {
    reference: string;
  };
};
