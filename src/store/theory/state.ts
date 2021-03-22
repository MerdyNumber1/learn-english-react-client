import { TopicDTO } from 'services/models';
import { EntityState } from '@reduxjs/toolkit';

export interface TheoryState {
  topics: EntityState<TopicDTO>;
}
