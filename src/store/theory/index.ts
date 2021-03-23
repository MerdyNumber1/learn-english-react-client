import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TopicDTO, ArticleDTO } from 'services/models';

export const topicsAdapter = createEntityAdapter<TopicDTO>();
export const articlesAdapter = createEntityAdapter<ArticleDTO>();

export const theorySlice = createSlice({
  name: 'theory',
  initialState: {
    topics: topicsAdapter.getInitialState(),
    articles: articlesAdapter.getInitialState(),
  },
  reducers: {
    setTopics(state, { payload }: PayloadAction<TopicDTO[]>) {
      topicsAdapter.addMany(state.topics, payload);
    },
    setTopic(state, { payload }: PayloadAction<TopicDTO>) {
      topicsAdapter.addOne(state.topics, payload);
    },
    setArticle(state, { payload }: PayloadAction<ArticleDTO>) {
      articlesAdapter.addOne(state.articles, payload);
    },
  },
});
