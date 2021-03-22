import { useDispatch } from 'store';

export const useTheory = () => {
  const dispatch = useDispatch();

  return {
    fetchTopics: () => {},
  };
};
