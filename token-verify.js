const jwt = require('jsonwebtoken');

const secret = 'mySecret';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY4MzEzMjEzM30.ndkn8b8vNjRZSIkwEayiGe4uCEDtxisI5OzZJRQQlWk'

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
