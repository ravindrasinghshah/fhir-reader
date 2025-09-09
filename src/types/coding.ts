export type Coding = {
  system: string;
  code: string;
  display?: string;
};

export type Codings = {
  coding: Array<Coding>;
};
