export const get = async (path: string) => {
  const response = await fetch(path, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText} - ${response.url}`);
  }

  return await response.json();
};
