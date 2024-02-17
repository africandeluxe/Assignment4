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

function displayData(data) {
  const container = document.getElementById('container');

  container.innerHTML = '';

  const titleElement = document.createElement('h2');

  const bodyElement = document.createElement('p');
  bodyElement.textContent = data.body;

  container.appendChild(titleElement);
  container.appendChild(bodyElement);
}
