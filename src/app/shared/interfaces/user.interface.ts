export interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
}

export interface Credentials {
  email: string;
  password: string;
}
