function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = password === ADMIN_PASSWORD ? message "Access is allowed" : message "Access denied, wrong password!";
  // Change code above this line
  return message;
}
