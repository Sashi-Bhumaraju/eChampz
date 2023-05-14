function validateEmail(email) {
    email = email.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
function validatePhone(phoneNumber) {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
}

function validateDateFor13Years(dateString) {
  const birthday = new Date(dateString);
  const ageDifferenceInMilliseconds = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifferenceInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  return age >= 13;
}

function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

function validateUsername(username) {
  
  username = username.trim();
  if (username === '') {
    return false;
  }
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return false;
  }

  if (username.length < 4 || username.length > 20) {
    return false;
  }
  
  return true;
}




export { validateEmail, validatePassword, validatePhone, validateDateFor13Years, validateUsername };
