const input = document.getElementById("email");
const sub = document.getElementById("sub");
const errorText = document.getElementById("error");
const card = document.getElementById("card");
const success = document.getElementById("success");
const emailTxt = document.getElementById("email-txt");
const dismiss = document.getElementById('dismiss');

const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

dismiss.addEventListener("click", () => {
    success.classList.remove('success');
    success.classList.add("none");
    card.classList.remove("none");
    card.classList.add("card");
    input.value = "";
});

sub.addEventListener("click", (event) => {
    event.preventDefault();
    ValidateEmail(input.value);
});

function ValidateEmail(mail) {
    if (regex.test(mail)) {
        if (input.classList.contains("email-error")) {
            errorText.classList.remove('error-txt');
            errorText.classList.add('none');
            input.classList.remove('email-error');
            input.classList.add('email');
        }
        card.classList.remove("card");
        card.classList.add("none");
        success.classList.remove('none');
        success.classList.add("success");
        emailTxt.innerHTML = input.value;
    } else {
        errorText.classList.remove('none');
        errorText.classList.add('error-txt');
        input.classList.remove('email');
        input.classList.add('email-error');
    }
}
