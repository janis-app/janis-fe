import Cookies from 'js-cookie';

export const setToken = (data) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', data?.user?.id, { expires: 7 });
  Cookies.set('fullname', data?.user?.username , { expires: 7 });
  Cookies.set('jwt', data?.jwt, { expires: 7 });

};

export const unsetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('jwt');
  Cookies.remove('fullname');

};