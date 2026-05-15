require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'local'}` });

console.log('API_URL:', process.env.API_URL);
console.log('ENVIRONMENT:', process.env.ENVIRONMENT);