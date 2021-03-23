import { State, useDispatch } from 'store';
import { getTopics, getTopic } from 'store/theory/actions';
import { useSelector } from 'react-redux';
import { topicsSelectors } from 'store/theory/selectors';
import { ID, TopicDTO } from 'services/models';

export const useTheory = () => {
  const dispatch = useDispatch();

  return {
    getTopics: () => dispatch(getTopics()),
    getTopic: (id: ID) => dispatch(getTopic(id)),
    selectTopics: () => useSelector(topicsSelectors.selectAll),
    selectTopic: (id: ID) =>
      useSelector<State, TopicDTO | undefined>((state) => topicsSelectors.selectById(state, id)),
  };
};
