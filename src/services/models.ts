/* eslint-disable camelcase */
export type Date = string;
export type ID = number;

export interface EntityListingDTO {
  readonly id: ID;
  title: string;
}

export interface UserDTO {
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
