import { async } from 'regenerator-runtime';
import { API_URL, TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  const res = await Promise.race([fetch(`${API_URL}/${url}`), timeout(0.1)]);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data.data;
};
