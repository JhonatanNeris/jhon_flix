const URL_BACKEND = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080'
      : 'https://jhon-flix-db.onrender.com';

export default { URL_BACKEND};