// Character sets used to build the password
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS   = "0123456789";
const SYMBOLS   = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword() {
  const length    = parseInt(document.getElementById("length").value);
  const useUpper  = document.getElementById("uppercase").checked;
  const useLower  = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  // Build the pool of allowed characters
  let pool = "";
  if (useUpper)   pool += UPPERCASE;
  if (useLower)   pool += LOWERCASE;
  if (useNumbers) pool += NUMBERS;
  if (useSymbols) pool += SYMBOLS;

  // Make sure at least one option is selected
  if (pool === "") {
    showMessage("Select at least one character type.");
    return;
  }

  // Pick random characters from the pool.
  // crypto.getRandomValues is better suited for password generation than Math.random().
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = getSecureRandomIndex(pool.length);
    password += pool[randomIndex];
  }

  document.getElementById("password").textContent = password;
  showMessage("");
}

function getSecureRandomIndex(max) {
  const randomValues = new Uint32Array(1);
  crypto.getRandomValues(randomValues);
  return randomValues[0] % max;
}

function copyPassword() {
  const text = document.getElementById("password").textContent;

  // Nothing to copy if password hasn't been generated yet
  if (text === "Click generate") return;

  navigator.clipboard.writeText(text).then(() => {
    showMessage("Copied to clipboard.");
    setTimeout(() => showMessage(""), 2000);
  });
}

function showMessage(text) {
  document.getElementById("message").textContent = text;
}
