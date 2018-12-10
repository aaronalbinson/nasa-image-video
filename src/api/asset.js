async function getData(nasaId) {
  const url = `https://images-api.nasa.gov/asset/${nasaId}`;

  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    return `Error: ${err}`;
  }
}

export default getData;
