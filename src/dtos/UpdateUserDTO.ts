export interface UpdateUserDTO {
  currentUsername: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: string;
  profileImage: string | null | undefined;
  isActive: boolean;
  isNotLocked: boolean;
}
