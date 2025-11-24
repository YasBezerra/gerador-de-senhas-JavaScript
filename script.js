let passwordLength = 16;
const inputEl = document.querySelector("#password");


function generatePassword() {
  const chars =
    "abcdefghjklmnpqrstuvxyzABCDEFGHJKLMNPQRSTUVXYZ123456789*?!@&*()[]";

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars[randomNumber];
  }

  inputEl.value = password;
  console.log(password);
}


function copy() {
  navigator.clipboard.writeText(inputEl.value);
  alert("Senha copiada para a área de transferência!");
}


const passwordLengthEl = document.querySelector("#password-lenght");
passwordLengthEl.addEventListener("input", function () {
  passwordLength = passwordLengthEl.value;
  generatePassword();
});


document.querySelector("#btn1").addEventListener("click", copy);
document.querySelector("#btn2").addEventListener("click", generatePassword);
document.querySelector("#copy").addEventListener("click", copy);


generatePassword();

