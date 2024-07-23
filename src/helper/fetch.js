// src/api/itemsApi.js
export const fetchData = async (url, args = {}) => {

  const response = await fetch(url, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }

  return response.json();
};
