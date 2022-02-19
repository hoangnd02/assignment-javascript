import instance from "./config";

export const getAll = () => {
  const url = `/users`;
  return instance.get(url);
};
export const get = (id) => {
  const url = `/users/${id}`;
  return instance.get(url);
};
export const add = (post) => {
  const url = `/users`;
  return instance.post(url, post);
};
export const remove = (id) => {
  const url = `/users/${id}`;
  return instance.delete(url);
};
export const update = (post, id) => {
  const url = `/users/${id}`;
  return instance.put(url, post);
};
