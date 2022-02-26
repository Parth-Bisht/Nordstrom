var dataArr = JSON.parse(localStorage.getItem("localCheck")) || [];
console.log(dataArr);

dataArr.map(function (ele, ind) {

    // var row=document.createElement("tr");

    var name = document.createElement("div");
    name.innerText = ele.firstname + " " + ele.lastname;

    var address = document.createElement("div");
    address.innerText = ele.address;

    var city_code = document.createElement("div");
    city_code.innerText = ele.city + "," + ele.postalcode;

    var location = document.createElement("div");
    location.innerText = ele.location;



    var accept = document.createElement("td");
    accept.innerText = "Accept";
    accept.style.backgroundColor = "green";
    accept.addEventListener("click", function () {
        admitArr.push(ele);
        console.log(admitArr);
        localStorage.setItem("admitted", JSON.stringify(admitArr));
        alert("admitted");
    })



    // row.append(name,age,gender,mail,mobile,accept,reject);

    document.querySelector("#mark").append(name, address, city_code, location);

})

var subtotal = (localStorage.getItem("subtotal"));
var itemTotal = document.getElementById("itemTotal");
var total = document.getElementById("total");
total.innerText = subtotal;
itemTotal.innerText = subtotal;