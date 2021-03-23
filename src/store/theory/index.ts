import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TopicDTO } from 'services/models';

export const topicsAdapter = createEntityAdapter<TopicDTO>();

export const theorySlice = createSlice({
  name: 'theory',
  initialState: { topics: topicsAdapter.getInitialState() },
  reducers: {
    setTopics(state, { payload }: PayloadAction<TopicDTO[]>) {
      topicsAdapter.addMany(state.topics, payload);
    },
    setTopic(state, { payload }: PayloadAction<TopicDTO>) {
      topicsAdapter.addOne(state.topics, payload);
    },
  },
});
