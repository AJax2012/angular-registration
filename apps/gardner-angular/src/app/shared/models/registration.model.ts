import Address from './address.model';

export default interface Registration {
  id?: string;
  firstName: string;
  lastName: string;
  npiNumber: string;
  businessAddress: Address;
  phoneNumber: string;
  emailAddress: string;
}
