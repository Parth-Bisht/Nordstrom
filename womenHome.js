var womenData= JSON.parse(localStorage.getItem("womenData"));
var addToCard = JSON.parse(localStorage.getItem("addToCard")) || [];





var deatils = [
    {
        id:1,
        type: "New Markdown",
        chezz:"",
        spon: "",
        comapny: "Nordstrom Lingerie",
        product: "Moonlight Pajamas",
       
        cprice: "Now: INR 3,137",
        was: "Was: INR 5,228.98   40%off",
        rating: "",
        pic: "https://rukminim1.flixcart.com/image/452/542/kp5sya80/pyjama/v/b/r/l-tp4-pink-the-million-club-original-imag3g82tyz77etz.jpeg?q=50",
    },
    {
        id:2,
        type: "",
        chezz: "Limted-Time sale",
        spon: "",
        comapny: "True & Co.",
        product: "True Body lift triangle Bra",
        
        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://rukminim1.flixcart.com/image/452/542/ks6ef0w0/bra/w/h/d/30b-bu-kristel-1-s-black-jockey-original-imag5spqz9dyuyxx.jpeg?q=50",
    },
    {
        id:3,
        type: "",
        chezz:"",
        spon: "Sponsored",
        comapny: "Wit & Wisdom",
        product: "Wit & Wisdom Ab-Solution Girlfriend Jeans",
        
        cprice: "",
        was: "INR 6,274.78",
        rating: "",
        pic: "https://rukminim1.flixcart.com/image/309/371/kfoapow0-0/jean/d/z/m/26-7139195-roadster-original-imafw2gy99d5hhtz.jpeg?q=50",
    },
    {
        id:4,
        type: "",
        spon: "",
        chezz: "Zella",
        comapny: "",
        product: "Cozy Active Pocket Joggers",
        
        cprice: "Now: INR 2,365.11 - INR 3,153.48",
        was: "Was: INR 3,941.85 Up to 40% off select color/size",
        rating: "",
        pic: "https://rukminim1.flixcart.com/image/309/371/ksm49e80/jean/d/f/b/30-jdhol-blue-dnext-original-imag6546x3zpvmcv.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/452/542/kskotjk0/shirt/m/y/d/s-sr0006-chimpaaanzee-original-imag647sqykjmqqw.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/309/371/kv8fbm80/skirt/g/q/z/m-166-black-aahwan-original-imag86b5gxrzgabh.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/309/371/keekmfk0-0/bra/4/7/i/lightly-padded-32c-no-regular-regular-contours-ink-blue-lovable-original-imafv3dgnrxxjghx.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/452/542/ks6ef0w0/bra/w/h/d/30b-bu-kristel-1-s-black-jockey-original-imag5spqz9dyuyxx.jpeg?q=50",
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
        pic: "https://n.nordstrommedia.com/id/sr3/e0a2f664-83d5-4df6-8e20-fda4d7e4c773.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/8a76914d-77ee-4065-bd30-a369b0b94d86.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/2a77a44b-0b91-4268-a3ad-666c521c1b99.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/d7ddc0c2-9394-4742-bbdb-2f1febbd2608.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/42b395b9-e428-4ab5-b555-fac74ac0822d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/0fef94dd-8108-46a7-95bf-c067fe7d08d1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/717c22b5-af1f-4ca4-a793-31aa07be4f45.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/4e124061-670a-4b5f-9085-2a147a361cbc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/812ca4ac-a857-46f2-856e-1144d4d53e8e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/9033bc27-7b03-473c-8ef8-4a36c441b3e2.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/b87d0ccf-3906-4a12-8bfe-d547c08f4aef.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://n.nordstrommedia.com/id/sr3/07e0abbf-4562-42e9-b574-c602ee75cf91.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
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
        pic: "https://rukminim1.flixcart.com/image/452/542/kskotjk0/shirt/m/y/d/s-sr0006-chimpaaanzee-original-imag647sqykjmqqw.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/309/371/kv8fbm80/skirt/g/q/z/m-166-black-aahwan-original-imag86b5gxrzgabh.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/309/371/keekmfk0-0/bra/4/7/i/lightly-padded-32c-no-regular-regular-contours-ink-blue-lovable-original-imafv3dgnrxxjghx.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/452/542/ks6ef0w0/bra/w/h/d/30b-bu-kristel-1-s-black-jockey-original-imag5spqz9dyuyxx.jpeg?q=50",
    },
    {
        id:1,
        type: "New Markdown",
        chezz:"",
        spon: "",
        comapny: "Nordstrom Lingerie",
        product: "Moonlight Pajamas",
       
        cprice: "Now: INR 3,137",
        was: "Was: INR 5,228.98   40%off",
        rating: "",
        pic: "https://rukminim1.flixcart.com/image/452/542/kp5sya80/pyjama/v/b/r/l-tp4-pink-the-million-club-original-imag3g82tyz77etz.jpeg?q=50",
    },
    {
        id:2,
        type: "",
        chezz: "Limted-Time sale",
        spon: "",
        comapny: "True & Co.",
        product: "True Body lift triangle Bra",
        
        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://rukminim1.flixcart.com/image/452/542/ks6ef0w0/bra/w/h/d/30b-bu-kristel-1-s-black-jockey-original-imag5spqz9dyuyxx.jpeg?q=50",
    },
    {
        id:3,
        type: "",
        chezz:"",
        spon: "Sponsored",
        comapny: "Wit & Wisdom",
        product: "Wit & Wisdom Ab-Solution Girlfriend Jeans",
        
        cprice: "",
        was: "INR 6,274.78",
        rating: "",
        pic: "https://rukminim1.flixcart.com/image/309/371/kfoapow0-0/jean/d/z/m/26-7139195-roadster-original-imafw2gy99d5hhtz.jpeg?q=50",
    },
    {
        id:4,
        type: "",
        spon: "",
        chezz: "Zella",
        comapny: "",
        product: "Cozy Active Pocket Joggers",
        
        cprice: "Now: INR 2,365.11 - INR 3,153.48",
        was: "Was: INR 3,941.85 Up to 40% off select color/size",
        rating: "",
        pic: "https://rukminim1.flixcart.com/image/309/371/ksm49e80/jean/d/f/b/30-jdhol-blue-dnext-original-imag6546x3zpvmcv.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/452/542/kskotjk0/shirt/m/y/d/s-sr0006-chimpaaanzee-original-imag647sqykjmqqw.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/309/371/kv8fbm80/skirt/g/q/z/m-166-black-aahwan-original-imag86b5gxrzgabh.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/309/371/keekmfk0-0/bra/4/7/i/lightly-padded-32c-no-regular-regular-contours-ink-blue-lovable-original-imafv3dgnrxxjghx.jpeg?q=50",
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
        pic: "https://rukminim1.flixcart.com/image/452/542/ks6ef0w0/bra/w/h/d/30b-bu-kristel-1-s-black-jockey-original-imag5spqz9dyuyxx.jpeg?q=50",
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
    top.style.fontSize="larger"

    var spone = document.createElement("p");
    spone.innerText=el.spon;    

    var line = document.createElement("p");
    line.innerText = el.chezz;

    var comp = document.createElement("p");
    comp.innerText = el.comapny;

  var pro= document.createElement("p");
  pro.innerText=el.product;

  var pri = document.createElement("p");
  pri.innerText=el.cprice;
  pri.style.color="red";

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

