async function getData(searchQuery) {
  const url = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    return `Error: ${err}`;
  }
}

export default getData;
