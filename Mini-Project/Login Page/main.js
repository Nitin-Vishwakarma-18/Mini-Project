const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function toggleSignupFields() {
    var signupType = document.getElementById("signupType").value;
    document.getElementById("studentFields").style.display = signupType === "student" ? "block" : "none";
    document.getElementById("teacherFields").style.display = signupType === "teacher" ? "block" : "none";
}