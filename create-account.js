var signArr=JSON.parse(localStorage.getItem("localSign"));
document.querySelector("#mail > p").innerText=signArr[0].email;
console.log(signArr);

var accArr= JSON.parse(localStorage.getItem("localAcc"))||[];
console.log(accArr)
var form=document.querySelector("#form");

document.querySelector("#form").addEventListener("submit",myform);
function myform(event){
    event.preventDefault()
    var firstname= form.firstName.value;
    var lastname= form.lastName.value;
    var password=form.pw.value;
    // console.log(pw);
    var accObj={
        firstname: firstname,
        lastname: lastname,
        password: password,
    };
    accArr.push(accObj);
    console.log(accArr);

    localStorage.setItem("localAcc",JSON.stringify(accArr));
    

    // var flag=0;
    // for(var i=0;i<regdArr.length;i++)
    // {
    //     if(regdArr[i].user==user && +(regdArr[i].password) == pw){
    //         alert("login Success");
    //         console.log("login Success");
    //         flag=1;
    //         break;
    //     }
       
    // }
    // if(flag==0)
    // {
    //     alert("login failed");
    //     console.log("login failed");
    // }

    

};    
document.querySelector("#SignUp").addEventListener("click",function () {
    window.location.href="welcome.html";
});
console.log(accArr);