const fetchApi = async (url, method, body) => {
  const data = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return data.json();
};

export default fetchApi;
