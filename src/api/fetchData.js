const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw new Error("Error fetching data");
      return;
    }
  } catch (e) {
    if (e.name === "AbortError") return;
  }
};

export default fetchData;
