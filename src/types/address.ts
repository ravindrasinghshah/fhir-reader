import { Period } from "./period";

export type Address = {
  use: string;
  type?: string;
  text?: string;
  line: Array<string>;
  city: string;
  district?: string;
  state: string;
  postalCode: string;
  period?: Period;
};
