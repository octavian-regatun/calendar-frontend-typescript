import Gender from '@/enums/gender';
import Providers from '@/enums/providers';

export default interface User {
  _id: string;
  provider: Providers;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  birthday: Date;
  createdAt: Date;
  loggedAt: Date;
  isLogged?: boolean;
}
