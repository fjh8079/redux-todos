import superagent from 'superagent';
import { get as _get } from 'lodash';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return true;
  }
  return false;
}

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    superagent
      .get(url)
      .end((err, res) => {
        if (err || !checkStatus(res)) reject(err);
        const resBody = _get(res, 'body', {});
        resolve(resBody);
      });
  });
};

export const fetchMessagesData = (nextPageKey) => {
  const nextPage = nextPageKey ? `${nextPageKey}/` : '';
  return get(`https://jimmy319.github.io/challenge/lazy/${nextPage}`);
}




