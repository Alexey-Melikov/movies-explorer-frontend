import { MAIN_API } from "../utils/constans";

const handleRes = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => {
    return Promise.reject(`Message: ${err.message} Status: ${res.status}`);
  });
};

export const register = async (name, email, password) => {
  const res = await fetch(`${MAIN_API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return await handleRes(res);
};

export const authorize = async (email, password) => {
  const res = await fetch(`${MAIN_API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return await handleRes(res);
};

export const getContent = async (token) => {
  const res = await fetch(`${MAIN_API}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await handleRes(res);
};

export const getUserInformation = async () => {
  const token = localStorage.getItem("JWT");
  const res = await fetch(`${MAIN_API}/users/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return await handleRes(res);
};

export const updateUserInformation = async (userInfo) => {
  const token = localStorage.getItem("JWT");
  const res = await fetch(`${MAIN_API}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userInfo.name,
      email: userInfo.email,
    }),
  });
  return await handleRes(res);
};

export const getSavedMovies = async () => {
  const token = localStorage.getItem("JWT");
  const res = await fetch(`${MAIN_API}/movies`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return await handleRes(res);
};

export const handleApiSaveMovie = async (movie) => {
  const token = localStorage.getItem("JWT");
  const res = await fetch(`${MAIN_API}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  return await handleRes(res);
};

export const handleApiDeleteMovie = async (movieId) => {
  const token = localStorage.getItem("JWT");
  const res = await fetch(`${MAIN_API}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return await handleRes(res);
};
