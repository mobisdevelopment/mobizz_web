export interface User {
  id: string;
  firebaseUid: string;
  name: string;
  email: string;
  phone?: string;
  roles: string[];
}
