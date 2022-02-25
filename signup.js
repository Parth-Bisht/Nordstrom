// var signArr= JSON.parse(localStorage.getItem("localSign"))||[];
    // console.log(signArr);
    var signArr=[];
    document.querySelector("#form").addEventListener("submit",myform);
    function myform(event){
        event.preventDefault();
        var signObj={
            email: document.querySelector("#email").value,
        };
        signArr.push(signObj);
        // console.log(signArr);

        localStorage.setItem("localSign",JSON.stringify(signArr));

        
       
    };
      
    document.querySelector("#SignUp").addEventListener("click",function () {
        window.location.href="create-account.html";
    });
    console.log(signArr);