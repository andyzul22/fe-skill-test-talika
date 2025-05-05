export interface User {
  id: string;
  name: string;
  email: string;
  publicKey: string;
}

export interface UserProfileProps {
  data: User;
}
