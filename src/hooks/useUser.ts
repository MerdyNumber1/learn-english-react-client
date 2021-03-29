import { authDataSelector, userInfoSelector, hasUserLoggedSelector } from 'store/user/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'store';
import { login, signup, logout, getCurrentUser, updatePartialUser } from 'store/user/actions';
import { UserDTO } from 'services/models';

export const useUser = () => {
  const dispatch = useDispatch();

  return {
    isLogged: useSelector(hasUserLoggedSelector),
    tokens: useSelector(authDataSelector),
    userData: useSelector(userInfoSelector),
    login: (data: Parameters<typeof login>[0]) => dispatch(login(data)),
    signup: (data: Parameters<typeof signup>[0]) => dispatch(signup(data)),
    logout: () => dispatch(logout()),
    getCurrentUser: () => dispatch(getCurrentUser()),
    updatePartialUser: (fields: Partial<UserDTO>) => dispatch(updatePartialUser(fields)),
  };
};
