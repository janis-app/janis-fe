import Cookies from 'js-cookie';

export const setToken = (data) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', data?.user?.id, { expires: 7 });
  Cookies.set('username', data?.user?.username, { expires: 7 });
  Cookies.set('jwt', data?.jwt, { expires: 7 });
};
export const getTokenFromLocalCookie = () => {
  return Cookies.get('jwt');
};
export const getIdFromLocalCookie = () => {
  return Cookies.get('id');
};
export const unsetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('username');
  Cookies.remove('jwt');
  return true
};
