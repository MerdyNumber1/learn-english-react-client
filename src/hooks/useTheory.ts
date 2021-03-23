import { State, useDispatch } from 'store';
import { getTopics, getTopic, getArticle } from 'store/theory/actions';
import { useSelector } from 'react-redux';
import { articlesSelectors, topicsSelectors } from 'store/theory/selectors';
import { ID, TopicDTO, ArticleDTO } from 'services/models';

export const useTheory = () => {
  const dispatch = useDispatch();
  const selectArticle = (id: ID) =>
    useSelector<State, ArticleDTO | undefined>((state) => articlesSelectors.selectById(state, id));
  const selectTopic = (id: ID) =>
    useSelector<State, TopicDTO | undefined>((state) => topicsSelectors.selectById(state, id));

  return {
    getTopics: () => dispatch(getTopics()),
    getTopic: (id: ID) => dispatch(getTopic(id)),
    getArticle: (id: ID) => dispatch(getArticle(id)),
    selectTopics: () => useSelector(topicsSelectors.selectAll),
    selectTopic,
    selectArticle,
  };
};
