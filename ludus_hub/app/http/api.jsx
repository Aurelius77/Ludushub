export async function fetchDataFromAPI(apiEndpoint) {
  try {
    const response = await fetch(apiEndpoint);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('API request failed');
    }
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
}
