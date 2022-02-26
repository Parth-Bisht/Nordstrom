dataArr = [{
    img: "https://n.nordstrommedia.com/id/sr3/28c6040f-2317-4c9e-80dc-cfa793dfaac1.jpeg",
    total: 5000
}];



// var dataArr=JSON.parse(localStorage.getItem("localCart"))||[];
// console.log(dataArr);


// dataArr.map(function(ele,ind){

//     var row1=document.createElement("tr");
//     row1.setAttribute("class","row");
//     var row2=document.createElement("tr");
//     row2.setAttribute("class","row");


//     var items=document.createElement("td");
//     items.innerText="Items";

//     var amt=document.createElement("td");
//     amt.innerText= ele.total;

//     var total=document.createElement("td");
//     total.style.fontSize="20px";
//     total.style.fontWeight="800";
//     total.innerText="Total";

//     var total_amt=document.createElement("td");
//     total_amt.innerText=ele.total;

//     row1.append(items,amt);
//     row2.append(total,total_amt)

//     document.querySelector("#body").append(row1,row2);

// });

var subtotal = (localStorage.getItem("subtotal"));
var itemTotal = document.getElementById("itemTotal");
var total = document.getElementById("total");
total.innerText = subtotal;
itemTotal.innerText = subtotal;




var checkArr = [];
console.log(checkArr)
var form = document.querySelector("#form");

document.querySelector("#form").addEventListener("submit", myform);
function myform(event) {
    event.preventDefault()
    var email = form.mail.value;
    var firstname = form.firstName.value;
    var lastname = form.lastName.value;
    var address = form.address.value;
    var postalcode = form.postalCode.value;
    var city = form.city.value;
    var phone = form.phone.value;
    var location = form.location.value;

    var checkObj = {
        email: email,
        firstname: firstname,
        lastname: lastname,
        address: address,
        postalcode: postalcode,
        city: city,
        phone: phone,
        location: location,
    };
    checkArr.push(checkObj);
    console.log(checkArr);

    localStorage.setItem("localCheck", JSON.stringify(checkArr));
    window.location.href = "payment.html";


};
// document.querySelector("#SignUp").addEventListener("click", function () {
//     window.location.href = "payment.html";
// });
document.querySelector("#SignUp-1").addEventListener("click", function () {
    window.location.href = "payment.html";
});
// console.log(checkArr);
