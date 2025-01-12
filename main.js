const btnSignIn = document.getElementById("sing-in"),
      btnSignUp = document.getElementById("sing-up"),
      containerFormRegistre = document.querySelector(".register"),
      containerFormLogin = document.querySelector(".login");
      
btnSignIn.addEventListener("click", e => {
    containerFormRegistre.classList.add("hide");
    containerFormLogin.classList.remove("hide")

})      
btnSignUp.addEventListener("click", e => {
    containerFormLogin.classList.add("hide");
    containerFormRegistre.classList.remove("hide")
})      