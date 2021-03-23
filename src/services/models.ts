/* eslint-disable camelcase */
export type Date = string;
export type ID = number;

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
  readonly id: ID;
  title: string;
  description: string | null;
  articles: Pick<ArticleDTO, 'title'>[];
}

export interface ArticleDTO {
  readonly id: ID;
  title: string;
  content: string;
  topic: TopicDTO;
}
