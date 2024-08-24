// SpaceX API Key
const SPACEX_API_KEY = 'YOUR_SPACEX_API_KEY';

// Function to fetch SpaceX launches using the API key
function fetchSpaceXData() {
    fetch('https://api.spacexdata.com/v4/launches/latest')
        .then(response => response.json())
        .then(data => {
            document.getElementById('spacexData').innerHTML += `<li class="list-group-item">Mission: ${data.name} - Date: ${new Date(data.date_utc).toDateString()}</li>`;
        })
        .catch(error => console.error('Error fetching SpaceX data:', error));
}

// Call fetchSpaceXData function
document.addEventListener('DOMContentLoaded', fetchSpaceXData);
