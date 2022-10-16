const passwordEl = document.getElementById("password");
const passwordConfirmEl = document.getElementById("confirmPassword");
const submitBtn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".error-msg");

passwordConfirmEl.addEventListener("input", (e) => {
  if (passwordEl.value !== e.target.value) {
    passwordEl.classList.add("error");
    passwordConfirmEl.classList.add("error");
    errorMsg.classList.remove("hidden");
    submitBtn.disabled = true;
  } else {
    passwordEl.classList.remove("error");
    passwordConfirmEl.classList.remove("error");
    errorMsg.classList.add("hidden");
    submitBtn.disabled = false;
  }
});
