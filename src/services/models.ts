export interface UserDTO {
  username?: string;
  email: string;
  password: string;
}

export interface TokensDTO {
  access: string;
  refresh: string;
}
