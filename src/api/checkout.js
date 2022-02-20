import instance from "./config";

export const getAll = () => {
  const url = `/checkouts`;
  return instance.get(url);
};
export const get = (id) => {
  const url = `/checkouts/${id}`;
  return instance.get(url);
};
export const add = (post) => {
  const url = `/checkouts`;
  return instance.post(url, post);
};
export const remove = (id) => {
  const url = `/checkouts/${id}`;
  return instance.delete(url);
};
export const update = (post, id) => {
  const url = `/checkouts/${id}`;
  return instance.put(url, post);
};
