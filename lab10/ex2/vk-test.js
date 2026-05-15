const axios = require('axios');

async function fetchVK() {
    try {
        const response = await axios.get('https://vk.com');
        console.log('Status:', response.status);
        console.log('Headers:', response.headers);
        console.log('Data length:', response.data.length);
    } catch (error) {
        console.error('Error:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
        }
    }
}

fetchVK();