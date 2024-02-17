document.getElementById('fetchButton').addEventListener("click", fetchData);

function fetchData () {
  const apiURL = '';

  fetch(apiURL).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ${response.statusText}');
    }
    return response.json();
  }).then(data => {
    displayData(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
  };
