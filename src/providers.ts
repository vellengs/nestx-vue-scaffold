export interface Providers {
  [key: string]: (option: any) => void;
}

const providers: Providers = {};

export { providers };
