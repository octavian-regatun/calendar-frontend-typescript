import Gender from "../enums/gender.enum";
import Provider from "../enums/provider.enum";
import Role from "../enums/role.enum";

interface User {
  _id: string;
  provider: Provider;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
  birthday: Date;
  createdAt: Date;
  loggedAt: Date;
  role: Role;
  isLogged?: boolean;
}

export interface UserPublic {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: Gender;
}

export default User;
