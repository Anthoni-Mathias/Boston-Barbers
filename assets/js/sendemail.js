// Book a table form
// Show alert when field is empty or wrong format on email. Else email sent with modal feedback.
window.onload = function () {
    document.getElementById('booking-form').addEventListener('submit', function (event) {
        event.preventDefault();
        let date = document.getElementById("start").value;
        if (date === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "date cannot be empty";
            let screen = window.matchMedia("(max-width: 570px)");
            if (screen.matches) {
                let findPage = document.getElementById("book");
                findPage.scrollIntoView();
            }
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }

        let name = document.getElementById("name").value;
        if (name === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Name cannot be empty";
            let screen = window.matchMedia("(max-width: 570px)");
            if (screen.matches) {
                let findPage = document.getElementById("book");
                findPage.scrollIntoView();
            }
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }

        let email = document.getElementById("email").value;
        if (email === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Email cannot be empty";
            let screen = window.matchMedia("(max-width: 570px)");
            if (screen.matches) {
                let findPage = document.getElementById("book");
                findPage.scrollIntoView();
            }
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }

        // Credit to simplilearn for email validator: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
        let mail = document.getElementById("email").value;
        let validMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (mail.match(validMail)) {

        } else {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Invalid email address!";
            //    Credit to Sahil Gupta on Stacloverflow for Javascript only on smaller screens: https://stackoverflow.com/questions/31874551/javascript-on-different-screen-sizes
            let screen = window.matchMedia("(max-width: 570px)");
            if (screen.matches) {
                let findPage = document.getElementById("book");
                findPage.scrollIntoView();
            }
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }

        let phone = document.getElementById("phone").value;
        if (phone === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Phone Number cannot be empty";
            let screen = window.matchMedia("(max-width: 570px)");
            if (screen.matches) {
                let findPage = document.getElementById("book");
                findPage.scrollIntoView();
            }
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }

        let tableFor = document.getElementById("tableFor").value;
        if (tableFor === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Table for cannot be empty";
            let screen = window.matchMedia("(max-width: 570px)");
            if (screen.matches) {
                let findPage = document.getElementById("book");
                findPage.scrollIntoView();
            }
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }

        let time = document.getElementById("time").value;
        if (time === "Select") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Time cannot be empty";
            let screen = window.matchMedia("(max-width: 570px)");
            if (screen.matches) {
                let findPage = document.getElementById("book");
                findPage.scrollIntoView();
            }
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }
        emailjs.sendForm('service_ozpd38n', 'template_n6jlbls', this)
            .then(function () {
                document.getElementById("myPopUp").style.display = "block";
            });
        document.getElementById("booking-form").reset();
    });

    $(".close").click(function () {
        document.getElementById("myPopUp").style.display = "none";
    });
};

// Book a table form //

// Contact form
// Show alert when field is empty or wrong format on email. Else email sent with modal feedback.
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById("contact-name").value;
    if (name == "") {
        document.getElementById("msg").classList.add("errorMsg");
        document.getElementById("msg").innerHTML = "Name cannot be empty";
        let screen = window.matchMedia("(max-width: 570px)");
        if (screen.matches) {
            let findPage = document.getElementById("contact-image");
            findPage.scrollIntoView();
        }
        setTimeout(function () {
            document.getElementById("msg").classList.remove("errorMsg");
            document.getElementById("msg").innerHTML = "";
        }, 2500);
        return false;
    }

    let email = document.getElementById("contact-email").value;
    if (email == "") {
        document.getElementById("msg").classList.add("errorMsg");
        document.getElementById("msg").innerHTML = "Email cannot be empty";
        let screen = window.matchMedia("(max-width: 570px)");
        if (screen.matches) {
            let findPage = document.getElementById("contact-image");
            findPage.scrollIntoView();
        }
        setTimeout(function () {
            document.getElementById("msg").classList.remove("errorMsg");
            document.getElementById("msg").innerHTML = "";
        }, 2500);
        return false;
    }

    // Credit to simplilearn for email validator: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    let mail = document.getElementById("contact-email").value;
    let validMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(validMail)) {

    } else {
        document.getElementById("msg").classList.add("errorMsg");
        document.getElementById("msg").innerHTML = "Invalid email address!";
        let screen = window.matchMedia("(max-width: 570px)");
        if (screen.matches) {
            let findPage = document.getElementById("contact-image");
            findPage.scrollIntoView();
        }
        setTimeout(function () {
            document.getElementById("msg").classList.remove("errorMsg");
            document.getElementById("msg").innerHTML = "";
        }, 2500);
        return false;
    }

    let message = document.getElementById("message").value;
    if (message == "") {
        document.getElementById("msg").classList.add("errorMsg");
        document.getElementById("msg").innerHTML = "Message cannot be empty";
        let screen = window.matchMedia("(max-width: 570px)");
        if (screen.matches) {
            let findPage = document.getElementById("contact-image");
            findPage.scrollIntoView();
        }
        setTimeout(function () {
            document.getElementById("msg").classList.remove("errorMsg");
            document.getElementById("msg").innerHTML = "";
        }, 2500);
        return false;
    }

    emailjs.sendForm('service_m3l5pe2', 'template_0alxi1v', this)
        .then(function () {
            document.getElementById("myContact").style.display = "block";
        });
    document.getElementById("contactForm").reset();
});

$(".close").click(function () {
    document.getElementById("myContact").style.display = "none";
});

// Contact form // 






