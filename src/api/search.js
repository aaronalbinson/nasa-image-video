function getData(searchQuery) {
  const url = `https://images-api.nasa.gov/search?q=${searchQuery}`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err.message));
}

export default getData;
