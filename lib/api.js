import { unsetToken } from './auth';

const fetcher = async (url, options = {}) => {
  let response;
  try {
    if (!options) {
      response = await fetch(url);
    } else {
      response = await fetch(url, options);
    }
    const data = await response.json();

    if (
      data?.error?.status == 401 &&
      !window?.location?.pathname?.includes('sign-in')
    ) {
      unsetToken(false);
      return;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetcher };
