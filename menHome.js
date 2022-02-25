var menData= JSON.parse(localStorage.getItem("menData"));
var addToCard = JSON.parse(localStorage.getItem("addToCard")) || [];





var deatils = [
    {
        id:1,
        type: "",
        chezz:"Devil-Dog Dungarees",
        spon: "",
        comapny: "",
        product: "Athletic Fit Performance Jeans (Garner)",
       
        cprice: "Now: INR 3,137",
        was: "Was: INR 5,228.98   40%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/59480a7f-86cf-47db-81b3-4aad6259e0e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:2,
        type: "",
        chezz: "Price Matched",
        spon: "",
        comapny: "PAIGE",
        product: "Federal Slim Straight Leg Jeans (Black Shadow)",
        
        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/7e3be5e4-b2fa-44ef-8e54-7582d936fa06.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:3,
        type: "",
        chezz:"Mavi Jeans",
        spon: "",
        comapny: "",
        product: "Matt Relaxed Fit Jeans (Deep Stanford Comfort)",
        
        cprice: "",
        was: "INR 6,274.78",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/87512320-11e5-4847-830a-c39097a40d58.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:4,
        type: "",
        spon: "",
        chezz: "Devil-Dog Dungarees",
        comapny: "",
        product: "Cozy Active Pocket Joggers",
        
        cprice: "Now: INR 2,365.11 - INR 3,153.48",
        was: "Was: INR 3,941.85 Up to 40% off select color/size",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/31feca0b-de81-4e64-8ede-9fd3f8fb72d9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:5,
        type: "New Markdown",
        spon: "",
        chezz:"",
        comapny: "Nordstrom Lingerie",
        product: "Moonlight Nightshirt",
       
        cprice: "Now: INR 2,137",
        was: "Was: INR 3,228.98   40%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/3a675965-fcd6-480d-916d-9d21d43f71e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:6,
        type: "",
        chezz:"",
        spon: "Sponsored",
        comapny: "Vince",
        product: "Vince Metallic Smock Waist Tiered Cotton Blend Skirt",
        
        cprice: "",
        was: "INR 31,774.78",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/8607eb37-3f0e-4370-83cd-f463bbd67bc9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:7,
        type: "New Markdown",
        spon: "",
        chezz:"",
        comapny: "Natori",
        product: "Feathers Underwire Contour Bra",
       
        cprice: "Now: INR 3,287 - INR 5,470.32",
        was: "Was: INR 5,470.98  Upto 40%off select color/size",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/0a65d941-2682-4e3a-bb0e-3a58f874adc4.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:8,
        type: "",
        spon: "",
        chezz: "Limted-Time sale",
        comapny: "True & Co.",
        product: "True Body Triangle Convertible Strap Bralette",
        
        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/405a5703-fa9a-4309-9673-6e3b642c2891.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:9,
        type: "New Markdown",
        chezz:"",
        spon: "",
        comapny: "Natori",
        product: "Feathers Underwire Contour Bra",
       
        cprice: "Now:INR 3,282.19 – INR 5,470.32",
        was: "Was:INR 5,470.32Up to 40% off select colors/sizes",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/e9737c84-c956-4a05-984f-a22a098d5ea5.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:10,
        type: "",
        chezz: "BB Dakota by Steve Madden",
        spon: "",
        comapny: ".",
        product: "BB Dakota Fields of Gold Shift Dress",
        
        cprice: "",
        was: "INR 5,550.77",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/f305d54f-b29d-44cd-b946-8667a0964ab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:11,
        type: "",
        chezz:"",
        spon: "",
        comapny: "BP.",
        product: "Double Scoop Stretch Cotton Bodysuit",
        
        cprice: "Now:INR 482.68",
        was: "Was:INR 965.3550% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/3cd19957-fa46-4b17-bdf5-babaf8051c7c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:12,
        type: "",
        spon: "",
        chezz: "Zella",
        comapny: "",
        product: "Live In High Waist Leggings",
        
        cprice: "",
        was: "INR 4,746.31",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/98123bfd-cffd-4958-846d-cd9974e24033.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:13,
        type: "",
        spon: "",
        chezz:"Price Matched",
        comapny: "Free People",
        product: "Julianna Floral Maxi Dress",
       
        cprice: "Now:INR 10,811.93",
        was: "Was:INR 13,514.9120% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/4054e900-caae-4175-99bb-0ec3e76bb153.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:14,
        type: "New Markdown",
        chezz:"",
        spon: "",
        comapny: "Treasure & Bond",
        product: "Ribbed One-Shoulder Pullover",
        
        cprice: "Now:INR 3,330.46",
        was: "Was:INR 5,550.77 40% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/62e22274-91e9-4487-ba87-ee807bbb7cf3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:15,
        type: "New Markdown",
        spon: "",
        chezz:"",
        comapny: "Free People",
        product: "Women's We the Free Buttercup Oversize Thermal Top",
       
        cprice: "Now:INR 3,282.19",
        was: "Was:INR 5,470.3240% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/6fdb54c3-7185-4075-b89b-7fd09be8f79d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:16,
        type: "New Markdown",
        spon: "",
        chezz: "",
        comapny: "BP.",
        product: "Rib Henley Tank",
        
        cprice: "Now:INR 579.21",
        was: "Was:INR 965.3540% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/03ec9f81-47d2-4f21-817c-9880012c11ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:17,
        type: "",
        chezz:"Price Matched",
        spon: "",
        comapny: "L Space",
        product: "Pacifica Cover-Up Tunic",
       
        cprice: "Now:INR 7,079.24",
        was: "Was:INR 8,849.0520% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/03ec9f81-47d2-4f21-817c-9880012c11ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:18,
        type: "",
        chezz: "",
        spon: "",
        comapny: "Dress the Population",
        product: "Tiffany One-Shoulder Midi Dress",
        
        cprice: "",
        was: "INR 11,905.99",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/e45e4250-d2ec-442c-bf13-72d18f341c1f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:19,
        type: "",
        chezz:"",
        spon: "",
        comapny: "Caslon®",
        product: "Long Sleeve Scoop Neck Cotton Tee (Regular & Petite)",
        
        cprice: "",
        was: "INR 2,011.15",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/2048c631-0e71-4406-a5cb-ce365ad5c364.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:20,
        type: "",
        spon: "Sponsored",
        chezz: "",
        comapny: "Hunkemöller",
        product: "Hunkemöller Dsse Underwire Lace & Mesh Bodysuit",
        
        cprice: "",
        was: "INR 3,509.48",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/255d7fb7-4bcc-4bb6-abbf-34f5af43c952.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:21,
        type: "New Markdown",
        spon: "",
        chezz:"",
        comapny: "Nordstrom Lingerie",
        product: "Moonlight Nightshirt",
       
        cprice: "Now: INR 2,137",
        was: "Was: INR 3,228.98   40%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/40a2ee5c-5fa5-4abb-8826-f1580d6aa69f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2https://n.nordstrommedia.com/id/sr3/40a2ee5c-5fa5-4abb-8826-f1580d6aa69f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2https://n.nordstrommedia.com/id/sr3/40a2ee5c-5fa5-4abb-8826-f1580d6aa69f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2https://n.nordstrommedia.com/id/sr3/40a2ee5c-5fa5-4abb-8826-f1580d6aa69f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:22,
        type: "",
        chezz:"",
        spon: "Sponsored",
        comapny: "Vince",
        product: "Vince Metallic Smock Waist Tiered Cotton Blend Skirt",
        
        cprice: "",
        was: "INR 31,774.78",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/e258432a-eab5-493b-8444-8d87f3f10bb2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:23,
        type: "New Markdown",
        spon: "",
        chezz:"",
        comapny: "Natori",
        product: "Feathers Underwire Contour Bra",
       
        cprice: "Now: INR 3,287 - INR 5,470.32",
        was: "Was: INR 5,470.98  Upto 40%off select color/size",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/0db2e4ee-48bf-4426-ae75-732bfe016614.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:24,
        type: "",
        spon: "",
        chezz: "Limted-Time sale",
        comapny: "True & Co.",
        product: "True Body Triangle Convertible Strap Bralette",
        
        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/8162a53d-feb4-48ab-b430-9e84c37758a7.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:25,
        type: "New Markdown",
        chezz:"",
        spon: "",
        comapny: "Nordstrom Lingerie",
        product: "Moonlight Pajamas",
       
        cprice: "Now: INR 3,137",
        was: "Was: INR 5,228.98   40%off",
        rating: "",
        pic: "https://rukminim1.flixcart.com/image/452/542/kp5sya80/pyjama/v/b/r/l-tp4-pink-the-million-club-original-imag3g82tyz77etz.jpeg?q=50https://n.nordstrommedia.com/id/sr3/885fe130-fcbf-4d8a-aca9-cab7d829b0eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:26,
        type: "",
        chezz: "Limted-Time sale",
        spon: "",
        comapny: "True & Co.",
        product: "True Body lift triangle Bra",
        
        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/885fe130-fcbf-4d8a-aca9-cab7d829b0eb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:27,
        type: "",
        chezz:"",
        spon: "Sponsored",
        comapny: "Wit & Wisdom",
        product: "Wit & Wisdom Ab-Solution Girlfriend Jeans",
        
        cprice: "",
        was: "INR 6,274.78",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/304d4a1b-0e47-49e6-b809-5271ecdea45d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:28,
        type: "",
        spon: "",
        chezz: "Zella",
        comapny: "",
        product: "Cozy Active Pocket Joggers",
        
        cprice: "Now: INR 2,365.11 - INR 3,153.48",
        was: "Was: INR 3,941.85 Up to 40% off select color/size",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/a7828537-33c6-4b3b-a055-84dfec19d8c6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:29,
        type: "New Markdown",
        spon: "",
        chezz:"",
        comapny: "Nordstrom Lingerie",
        product: "Moonlight Nightshirt",
       
        cprice: "Now: INR 2,137",
        was: "Was: INR 3,228.98   40%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/b3b4d2e4-df6c-466b-abeb-271a3214e5ec.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:30,
        type: "",
        chezz:"",
        spon: "Sponsored",
        comapny: "Vince",
        product: "Vince Metallic Smock Waist Tiered Cotton Blend Skirt",
        
        cprice: "",
        was: "INR 31,774.78",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/74c74781-8a1d-490c-b8d8-22dd42388d2c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:31,
        type: "New Markdown",
        spon: "",
        chezz:"",
        comapny: "Natori",
        product: "Feathers Underwire Contour Bra",
       
        cprice: "Now: INR 3,287 - INR 5,470.32",
        was: "Was: INR 5,470.98  Upto 40%off select color/size",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/73cd74fa-aadf-4c3d-9903-8ed186593e12.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id:32,
        type: "",
        spon: "",
        chezz: "Limted-Time sale",
        comapny: "True & Co.",
        product: "True Body Triangle Convertible Strap Bralette",
        
        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/a43170d6-2558-4378-abf6-d72d5ec11ead.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
];

deatils.map(function(el, index){
    var div = document.createElement("div");
    div.style.marginLeft="20px";
    div.style.marginBottom="30px";
   

    var picture = document.createElement("img");
    picture.setAttribute("src", el.pic);
    picture.style.height="200px"
    
    var top = document.createElement("p");
    top.innerText=el.type;
    top.style.color="red";
    top.style.fontWeight="900";

    var spone = document.createElement("p");
    spone.innerText=el.spon;    

    var line = document.createElement("p");
    line.innerText = el.chezz;
    line.style.fontWeight="900";

    var comp = document.createElement("p");
    comp.innerText = el.comapny;
    comp.style.fontWeight="900";

  var pro= document.createElement("p");
  pro.innerText=el.product;

  var pri = document.createElement("p");
  pri.innerText=el.cprice;
  pri.style.color="red";
  pri.style.fontWeight="600";

  var wa = document.createElement("p");
  wa.innerText=el.was;

  var rat= document.createElement("p");
  rat.innerText=el.rating;

  var btn= document.createElement("button");
  btn.innerText="Add to card";
  btn.setAttribute("class" , "btn");
  btn.addEventListener("click", function(){
      AddToCard(el);
  })

    div.append(picture, top, spone, line, comp, pro, pri, wa, rat, btn);
    document.querySelector("#models").append(div);
})

function AddToCard(el)
{
    console.log(el);
    addToCard.push(el);
    console.log(addToCard);
    localStorage.setItem("addToCard", JSON.stringify(addToCard));

}

