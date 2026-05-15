const axios = require('axios');

async function fetchGeoIP() {
    try {
        const response = await axios.get('https://json.geoiplookup.io/');
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchGeoIP();