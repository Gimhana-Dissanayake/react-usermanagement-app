interface User {
  userId: string | undefined | null;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  lastLoginDate: Date | null;
  lastLoginDateDisplay: Date | null;
  joinDate: Date | undefined | null;
  profileImageUrl: string | undefined | null;
  active: boolean;
  notLocked: boolean;
  role: string;
  authorities: [];
  token?: string;
  currentUsername?: string;
}

export default User;
