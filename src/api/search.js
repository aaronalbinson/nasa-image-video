function getData(searchQuery) {
  const url = `https://images-api.nasa.gov/search?q=${searchQuery}`;

  fetch(url, {
    method: "GET"
  })
    .then(response => {
      if (response.ok) {
        console.log(response.json());
        return response.json();
      }
      throw Error(response.statusText);
    })

    .catch(err => console.log(err.message));
}

export default getData;
