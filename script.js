const form = document.querySelector(".sol");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const age = document.getElementById("age");

const result = document.getElementById("result");

form.addEventListener("submit", function (event) {

```
event.preventDefault();

const nameValue = fullName.value.trim();
const emailValue = email.value.trim();
const phoneValue = phone.value.trim();
const passwordValue = password.value;
const ageValue = Number(age.value);

if (
    nameValue === "" ||
    emailValue === "" ||
    phoneValue === "" ||
    passwordValue === "" ||
    age.value.trim() === ""
) {
    result.textContent = "Please fill in all fields!";
    result.style.color = "red";
    return;
}

if (ageValue < 1 || ageValue > 120) {
    result.textContent = "Please enter a valid age!";
    result.style.color = "red";
    return;
}

if (passwordValue.length < 8) {
    result.textContent = "Password must contain at least 8 characters!";
    result.style.color = "red";
    return;
}

result.textContent =
    "Registration successful! Welcome, " + nameValue + "!";

result.style.color = "green";

console.log("Name:", nameValue);
console.log("Email:", emailValue);
console.log("Phone:", phoneValue);
console.log("Age:", ageValue);

form.reset();
```

});
