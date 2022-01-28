import { authDataSelector, userInfoSelector, hasUserLoggedSelector } from 'store/user/selectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { login, signup, logout, getCurrentUser, updatePartialUser } from 'store/user/actions';
import { UserDTO } from 'services/models';

export const useUser = () => {
  const dispatch = useAppDispatch();

  return {
    isLogged: useSelector(hasUserLoggedSelector),
    tokens: useSelector(authDataSelector),
    userData: useSelector(userInfoSelector),
    login: (data: UserDTO) => dispatch(login(data)).unwrap(),
    signup: (data: UserDTO) => dispatch(signup(data)),
    logout: () => dispatch(logout()),
    getCurrentUser: () => dispatch(getCurrentUser()),
    updatePartialUser: (fields: Partial<UserDTO>) => dispatch(updatePartialUser(fields)),
  };
};
