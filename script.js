//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
//https://regex101.com/r/bL0Nfv/2/

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

console.log(inputs);

const patterns = {
  firstname: /^[a-zA-Z0-9]{3,16}$/,
  lastname: /^[a-zA-Z0-9]{3,16}$/,
  email: /^([\w-.]+)@([\w-.]+)\.([a-zA-Z]){2,5}$/,
  password: /^[\w\W]{6,20}$/,
  telephone: /^[\d]{3}[\d]{3}[\d]{4}$/,
  bio: /^[a-z\d-]{8,50}$/
};

inputs.forEach(element => {
  console.log(element);
  element.addEventListener("input", e => {
    formValidator(e.target, patterns[e.target.name]);
    console.log(e.target.className);
    checkEveryInputValid();
  });
});

const formValidator = (element, pattern) => {
  if (pattern.test(element.value)) {
    element.className = "valid";
    //return true;
  } else {
    validation[element.name] = false;
    element.className = "invalid";
    //return false;
  }
};

const checkEveryInputValid = () => {
  if (
    Array.from(document.querySelectorAll("input")).every(nameOfClass => {
      return nameOfClass.className === "valid";
    })
  ) {
    button.className = "submit-button";
    button.disabled = false;
  } else {
    button.classList.remove("submit-button");
    button.disabled = true;
  }
};
