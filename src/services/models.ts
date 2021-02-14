export interface User {
  username: string;
  email: string;
  password?: string;
}

export interface UserDTO {
  email: string;
  password: string;
}

export interface TokensDTO {
  access: string;
  refresh: string;
}
