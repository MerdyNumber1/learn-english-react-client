/* eslint-disable camelcase */
export type Date = string;

export interface UserDTO {
  username?: string;
  email: string;
  password: string;
  readonly registration_date?: Date;
}

export interface TokensDTO {
  access: string;
  refresh: string;
}

export interface TopicDTO {
  title: string;
}
