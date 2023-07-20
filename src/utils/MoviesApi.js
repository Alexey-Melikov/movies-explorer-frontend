import { MOVIES_API } from "../utils/constans";

const handleRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getMovies = () => {
  return fetch(`${MOVIES_API}/beatfilm-movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleRes);
};
