document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();

      
        const nickname = document.getElementById("nickname").value;
        if (nickname) {
            document.body.classList.add("logged-in");
            const logo = document.querySelector(".logo");
            logo.textContent = `Welcome back, ${nickname}!`;
        }
    });
});
