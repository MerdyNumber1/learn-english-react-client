/* eslint-disable camelcase */
export type Date = string;
export type ID = number;

export interface EntityListingDTO {
  readonly id: ID;
  title: string;
}

export interface UserDTO {
  id?: ID;
  username?: string;
  email: string;
  password: string;
  readonly registration_date?: Date;
  readonly correct_reports_count?: number;
}

export interface TokensDTO {
  access: string;
  refresh: string;
}

export interface TopicDTO {
  readonly id: ID;
  title: string;
  description: string | null;
  articles: EntityListingDTO[];
  exercises: EntityListingDTO[];
}

export interface ArticleDTO {
  readonly id: ID;
  title: string;
  content: string;
  topic: EntityListingDTO;
}

export interface ExerciseDTO {
  readonly id: ID;
  title: string;
  description: string;
  topic: EntityListingDTO;
  options: AnswerOptionDTO[];
  report: ExerciseReportDTO | null;
  readonly correct_option: AnswerOptionDTO | null;
}

export interface AnswerOptionDTO {
  readonly id: ID;
  option: string;
}

export interface ExerciseReportDTO {
  readonly id: ID;
  readonly is_correct: boolean;
  exercise: EntityListingDTO;
  answer: EntityListingDTO;
  user: UserDTO;
  correct_option: AnswerOptionDTO;
}

export enum MessageType {
  MESSAGE = 'message', // usual message in chat, without reply
  ARTICLE_REPLY = 'article_reply', // message with article reply
  EXERCISE_REPLY = 'exercise_reply', // message with exercise reply
}

export interface Message {
  readonly id?: number;
  readonly created_at?: Date;
  type: MessageType;
  message: string;
  user?: number;
  article?: number;
  exercise?: number;
}
