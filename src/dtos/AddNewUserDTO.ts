export interface AddNewUserDTO {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: string;
  isActive: boolean;
  isNotLocked: boolean;
  profileImage: string | null | undefined;
}
