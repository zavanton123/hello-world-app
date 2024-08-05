import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '622bb009-0e26-49a3-b37e-9ac2e860f24b',
};

export const sampleWithPartialData: IAuthority = {
  name: '1dbb3e03-c341-4391-8354-9268dab1170b',
};

export const sampleWithFullData: IAuthority = {
  name: 'ebfcdb4a-4608-4920-b27b-5c3efcb8ad2f',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
