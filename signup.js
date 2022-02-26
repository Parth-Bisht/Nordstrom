// var signArr= JSON.parse(localStorage.getItem("localSign"))||[];
// console.log(signArr);
document.querySelector("#form").addEventListener("submit", myform);
var signArr = JSON.parse(localStorage.getItem("SignUpData")) || [];
function myform(event) {
    event.preventDefault();
    var signObj = {
        email: document.querySelector("#email").value,
    };
    signArr.push(signObj);
    console.log(signArr);

    localStorage.setItem("localSign", JSON.stringify(signArr));
    window.location.href = "createaccount.html";


};

// document.querySelector("#SignUp").addEventListener("click", function () {
//     window.location.href = "createaccount.html";
// });
console.log(signArr);