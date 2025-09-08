import { Period } from "./period";

export type Name = {
  use: string;
  family?: string;
  given: Array<string>;
  period?: Period;
};
