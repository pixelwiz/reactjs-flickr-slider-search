const { Headers } = window;

export const fetch = (url, options) => window.fetch(url, {
  ...options,
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
});

export const fetchJson = async (url, options) => {
  const response = await fetch(url, options);
  return response.json();
};
