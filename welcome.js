var signArr=JSON.parse(localStorage.getItem("localSign"));
var accArr= JSON.parse(localStorage.getItem("localAcc"));
var name = accArr[0].firstname;
document.getElementById("userName").innerText = accArr[0].firstname + "!";
document.getElementById("signUser").innerText = name;
console.log(name);
// var mobArr= JSON.parse(localStorage.getItem("localSign"))||[];
//     console.log(mobArr);
//     // var signArr=[];
//     document.querySelector("#form").addEventListener("submit",myform);
//     function myform(event){
//         event.preventDefault();
//         var mobObj={
//             mobile: document.querySelector("#mobile").value,
//         };
//         mobArr.push(mobObj);
//         // console.log(signArr);

//         localStorage.setItem("localMob",JSON.stringify(mobArr));

        
       
//     };
      
//     document.querySelector("#SignUp").addEventListener("click",function () {
//         window.location.href="otp.html";
//     });
//     console.log(mobArr);