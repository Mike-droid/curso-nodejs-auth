const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$fSMruzXRol4WcgYAq7XxQeWOrCWShl8ZjZ9UlDPAcyv3su/EQJWy2';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
