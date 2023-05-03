function validateEmail(email) {
    email = email.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
function validatePhone(phoneNumber) {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
}

function validateDateFor18Years(dateString) {
  const birthday = new Date(dateString);
  const ageDifferenceInMilliseconds = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifferenceInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  return age >= 18;
}

function validatePassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

export { validateEmail, validatePassword, validatePhone, validateDateFor18Years };
