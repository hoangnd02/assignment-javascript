import instance from "./config";

export const getAll = () => {
  const url = `/categories`;
  return instance.get(url);
};
export const get = (id) => {
  const url = `/categories/${id}`;
  return instance.get(url);
};
export const add = (post) => {
  const url = `/categories`;
  return instance.post(url, post);
};
export const remove = (id) => {
  const url = `/categories/${id}`;
  return instance.delete(url);
};
export const update = (post, id) => {
  const url = `/categories/${id}`;
  return instance.put(url, post);
};
