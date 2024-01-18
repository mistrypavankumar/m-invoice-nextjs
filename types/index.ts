export type CreateUserParams = {
  name: string;
  email: string;
  password: string;
  role?: string; // optional since it has a default value
};

export type LoginUserParams = {
  email: string;
  password: string;
};

export type ResetPasswordParams = {
  email: string;
};
