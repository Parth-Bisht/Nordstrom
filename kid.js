var menData = JSON.parse(localStorage.getItem("menData"));
var addToCard = JSON.parse(localStorage.getItem("addToCard")) || [];





var deatils = [
    {
        id: 1,
        type: "",
        chezz: "Limited-Time Sale",
        spon: "",
        comapny: "Nike",
        product: "Flex Plus Sneaker (Baby, Walker, Toddler & Big Kid)",

        cprice: "Now: INR 3,137",
        was: "Was: INR 5,228.98   40%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/f97a5cd9-d370-491d-bf4d-4525dce7c8e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
        image_url:
            "https://n.nordstrommedia.com/id/sr3/f97a5cd9-d370-491d-bf4d-4525dce7c8e8.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
        name: "Flex Plus Sneaker (Baby, Walker, Toddler & Big Kid)",
        desc: "Extra Fit Stretch ",
        size: "S",
        color: "Black",
        item: "123567",
        price: "3137",
        qty: 1,
    },
    {
        id: 2,
        type: "",
        chezz: "Limited-Time Sale",
        spon: "",
        comapny: "Nike",
        product: "MD Valiant Sneaker (Baby, Walker, Toddler, Little Kid & Big Kid)",

        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/1fb72950-26ca-4688-86f9-c8bfa02297b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
        image_url:
            "https://n.nordstrommedia.com/id/sr3/1fb72950-26ca-4688-86f9-c8bfa02297b0.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
        name: "MD Valiant Sneaker (Baby, Walker, Toddler, Little Kid & Big Kid)",
        desc: "Extra Fit Stretch ",
        size: "S",
        color: "Black",
        item: "123567",
        price: "3499",
        qty: 1,
    },
    {
        id: 3,
        type: "",
        chezz: "New!",
        spon: "",
        comapny: "Jellycat",
        product: "Mini Fossily Stegosaurus Stuffed Animal",

        cprice: "",
        was: "INR 965.35",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/657546f8-23b3-4037-9b44-342575084b3b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
        image_url:
            "https://n.nordstrommedia.com/id/sr3/657546f8-23b3-4037-9b44-342575084b3b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
        name: "Mini Fossily Stegosaurus Stuffed Animal",
        desc: "Extra Fluffy ",
        size: "S",
        color: "Green",
        item: "123567",
        price: "950",
        qty: 1,
    },
    {
        id: 4,
        type: "",
        spon: "Sponsored",
        chezz: "New!",
        comapny: "Bugaboo",
        product: "Bugaboo Donkey 5 Mono Stroller with Bassinet",

        cprice: "",
        was: "INR 114,180.50 – INR 132,952.14",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/6df793cb-5a2f-4764-89e7-f68f9ec3dbca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
        image_url:
            "https://n.nordstrommedia.com/id/sr3/6df793cb-5a2f-4764-89e7-f68f9ec3dbca.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
        name: "Bugaboo Donkey 5 Mono Stroller with Bassinet",
        desc: "Extra Flexible ",
        size: "S",
        color: "Black",
        item: "123567",
        price: "11,299",
        qty: 1,
    },
    {
        id: 5,
        type: "New Markdown",
        spon: "",
        chezz: "",
        comapny: "Nordstrom Lingerie",
        product: "Moonlight Nightshirt",

        cprice: "Now: INR 2,137",
        was: "Was: INR 3,228.98   40%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/eac77fa2-7d95-4989-ac00-90946f697daa.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
        image_url:
            "https://n.nordstrommedia.com/id/sr3/eac77fa2-7d95-4989-ac00-90946f697daa.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
        name: "Moonlight Nightshirt",
        desc: "Extra Fit Stretch  ",
        size: "S",
        color: "Black & Red",
        item: "123567",
        price: "2,137",
        qty: 1,
    },
    {
        id: 6,
        type: "",
        chezz: "",
        spon: "Sponsored",
        comapny: "Vince",
        product: "Vince Metallic Smock Waist Tiered Cotton Blend Skirt",
        cprice: "",
        was: "INR 31,774.78",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/02b1cc45-9d35-4179-8d3e-8212b50d9171.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
        image_url:
            "https://n.nordstrommedia.com/id/sr3/02b1cc45-9d35-4179-8d3e-8212b50d9171.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
        name: "Vince Metallic Smock Waist Tiered Cotton Blend Skirt",
        desc: "Extra Fit Stretch  ",
        size: "S",
        color: "Grey",
        item: "123567",
        price: "5,999",
        qty: 1,
    },
    {
        id: 7,
        type: "New Markdown",
        spon: "",
        chezz: "",
        comapny: "Natori",
        product: "Feathers Underwire Contour Bra",

        cprice: "Now: INR 3,287 - INR 5,470.32",
        was: "Was: INR 5,470.98  Upto 40%off select color/size",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/d8b2d26a-adb6-4b35-9d66-a472f5cd5ebc.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 8,
        type: "",
        spon: "",
        chezz: "Limted-Time sale",
        comapny: "True & Co.",
        product: "True Body Triangle Convertible Strap Bralette",

        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/17306d88-28e6-4249-817f-35e4584713de.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 9,
        type: "New Markdown",
        chezz: "",
        spon: "",
        comapny: "Natori",
        product: "Feathers Underwire Contour Bra",

        cprice: "Now:INR 3,282.19 – INR 5,470.32",
        was: "Was:INR 5,470.32Up to 40% off select colors/sizes",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/3876de3f-3956-4e30-99fc-785a3e3853f3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 10,
        type: "",
        chezz: "BB Dakota by Steve Madden",
        spon: "",
        comapny: ".",
        product: "BB Dakota Fields of Gold Shift Dress",

        cprice: "",
        was: "INR 5,550.77",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/9fa0663d-56ac-4794-bef9-da1f80cd4824.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 11,
        type: "",
        chezz: "",
        spon: "",
        comapny: "BP.",
        product: "Double Scoop Stretch Cotton Bodysuit",

        cprice: "Now:INR 482.68",
        was: "Was:INR 965.3550% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/87ed0d5b-130b-43e2-8e72-10569b4ae16c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 12,
        type: "",
        spon: "",
        chezz: "Zella",
        comapny: "",
        product: "Live In High Waist Leggings",

        cprice: "",
        was: "INR 4,746.31",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/c17318df-4e9e-4aa7-9f0b-72a0993ba8f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 13,
        type: "",
        spon: "",
        chezz: "Price Matched",
        comapny: "Free People",
        product: "Julianna Floral Maxi Dress",

        cprice: "Now:INR 10,811.93",
        was: "Was:INR 13,514.9120% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/733a6ce2-6972-402d-a5c7-ea6470c5482d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
    },
    {
        id: 14,
        type: "New Markdown",
        chezz: "",
        spon: "",
        comapny: "Treasure & Bond",
        product: "Ribbed One-Shoulder Pullover",

        cprice: "Now:INR 3,330.46",
        was: "Was:INR 5,550.77 40% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/da9767d7-405c-4260-92f6-cf72387e3948.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 15,
        type: "New Markdown",
        spon: "",
        chezz: "",
        comapny: "Free People",
        product: "Women's We the Free Buttercup Oversize Thermal Top",

        cprice: "Now:INR 3,282.19",
        was: "Was:INR 5,470.3240% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/ca5a4e5b-faad-403f-b96f-dbe2f5355952.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
    },
    {
        id: 16,
        type: "New Markdown",
        spon: "",
        chezz: "",
        comapny: "BP.",
        product: "Rib Henley Tank",

        cprice: "Now:INR 579.21",
        was: "Was:INR 965.3540% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/8e8f26e4-0a5b-48ea-b1dc-4f440d002a7a.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
    },
    {
        id: 17,
        type: "",
        chezz: "Price Matched",
        spon: "",
        comapny: "L Space",
        product: "Pacifica Cover-Up Tunic",

        cprice: "Now:INR 7,079.24",
        was: "Was:INR 8,849.0520% off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/e1897d37-6e0f-42fa-a202-194cef934168.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 18,
        type: "",
        chezz: "",
        spon: "",
        comapny: "Dress the Population",
        product: "Tiffany One-Shoulder Midi Dress",

        cprice: "",
        was: "INR 11,905.99",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/676e7a84-fc95-4264-9801-b568709d3911.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 19,
        type: "",
        chezz: "",
        spon: "",
        comapny: "Caslon®",
        product: "Long Sleeve Scoop Neck Cotton Tee (Regular & Petite)",

        cprice: "",
        was: "INR 2,011.15",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/25c6b9a7-579b-4aea-a7b2-5eeda84056df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 20,
        type: "",
        spon: "Sponsored",
        chezz: "",
        comapny: "Hunkemöller",
        product: "Hunkemöller Dsse Underwire Lace & Mesh Bodysuit",

        cprice: "",
        was: "INR 3,509.48",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/6cc725cf-b7c0-42ea-a892-6b2e91d07a81.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 21,
        type: "New Markdown",
        spon: "",
        chezz: "",
        comapny: "Nordstrom Lingerie",
        product: "Moonlight Nightshirt",

        cprice: "Now: INR 2,137",
        was: "Was: INR 3,228.98   40%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/239898e8-c78d-41ac-ab12-98b77b9dd587.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 22,
        type: "",
        chezz: "",
        spon: "Sponsored",
        comapny: "Vince",
        product: "Vince Metallic Smock Waist Tiered Cotton Blend Skirt",

        cprice: "",
        was: "INR 31,774.78",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/48f0f01b-9528-4335-a20b-147b552fda71.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 23,
        type: "New Markdown",
        spon: "",
        chezz: "",
        comapny: "Natori",
        product: "Feathers Underwire Contour Bra",

        cprice: "Now: INR 3,287 - INR 5,470.32",
        was: "Was: INR 5,470.98  Upto 40%off select color/size",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/d87df45d-a4cc-469c-a704-b6d3b2cac530.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 24,
        type: "",
        spon: "",
        chezz: "Limted-Time sale",
        comapny: "True & Co.",
        product: "True Body Triangle Convertible Strap Bralette",

        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/9359a3f3-0d39-4ee6-b829-ebf2109d59b2.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
    },
    {
        id: 25,
        type: "New Markdown",
        chezz: "",
        spon: "",
        comapny: "Nordstrom Lingerie",
        product: "Moonlight Pajamas",

        cprice: "Now: INR 3,137",
        was: "Was: INR 5,228.98   40%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/03180590-ea25-44a6-bb4e-0b264f38374b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 26,
        type: "",
        chezz: "Limted-Time sale",
        spon: "",
        comapny: "True & Co.",
        product: "True Body lift triangle Bra",

        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/4146ad71-29ce-49d7-8b1b-44202109d6f6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 27,
        type: "",
        chezz: "",
        spon: "Sponsored",
        comapny: "Wit & Wisdom",
        product: "Wit & Wisdom Ab-Solution Girlfriend Jeans",

        cprice: "",
        was: "INR 6,274.78",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/7b7c863a-6994-45f9-98cc-1a32ebbf4474.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838&dpr=2",
    },
    {
        id: 28,
        type: "",
        spon: "",
        chezz: "Zella",
        comapny: "",
        product: "Cozy Active Pocket Joggers",

        cprice: "Now: INR 2,365.11 - INR 3,153.48",
        was: "Was: INR 3,941.85 Up to 40% off select color/size",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/caf91105-4d45-41bd-bc6f-35f0ff400782.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 29,
        type: "New Markdown",
        spon: "",
        chezz: "",
        comapny: "Nordstrom Lingerie",
        product: "Moonlight Nightshirt",

        cprice: "Now: INR 2,137",
        was: "Was: INR 3,228.98   40%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/a99d7c28-cd11-42c5-bed8-08f53b7226b8.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 30,
        type: "",
        chezz: "",
        spon: "Sponsored",
        comapny: "Vince",
        product: "Vince Metallic Smock Waist Tiered Cotton Blend Skirt",

        cprice: "",
        was: "INR 31,774.78",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/57e24a3f-a69f-45ac-a0b3-613eda7d830a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 31,
        type: "New Markdown",
        spon: "",
        chezz: "",
        comapny: "Natori",
        product: "Feathers Underwire Contour Bra",

        cprice: "Now: INR 3,287 - INR 5,470.32",
        was: "Was: INR 5,470.98  Upto 40%off select color/size",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/a86b3d57-2c65-48da-a39b-d761a4ed0b5c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
    {
        id: 32,
        type: "",
        spon: "",
        chezz: "Limted-Time sale",
        comapny: "True & Co.",
        product: "True Body Triangle Convertible Strap Bralette",

        cprice: "Now: INR 3,499.40",
        was: "Was: INR 4,665.86   25%off",
        rating: "",
        pic: "https://n.nordstrommedia.com/id/sr3/40de7145-db1b-48f5-8ff4-5bbc4d4da33b.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196&dpr=2",
    },
];

deatils.map(function (el, index) {
    var div = document.createElement("div");
    div.style.marginLeft = "20px";
    div.style.marginBottom = "30px";


    var picture = document.createElement("img");
    picture.setAttribute("src", el.pic);
    picture.style.height = "200px"

    var top = document.createElement("p");
    top.innerText = el.type;
    top.style.color = "red";
    top.style.fontWeight = "900";

    var spone = document.createElement("p");
    spone.innerText = el.spon;

    var line = document.createElement("p");
    line.innerText = el.chezz;
    line.style.fontWeight = "900";

    var comp = document.createElement("p");
    comp.innerText = el.comapny;
    comp.style.fontWeight = "900";

    var pro = document.createElement("p");
    pro.innerText = el.product;

    var pri = document.createElement("p");
    pri.innerText = el.cprice;
    pri.style.color = "red";
    pri.style.fontWeight = "600";

    var wa = document.createElement("p");
    wa.innerText = el.was;

    var rat = document.createElement("p");
    rat.innerText = el.rating;

    var btn = document.createElement("button");
    btn.innerText = "Add to Bag";
    btn.setAttribute("class", "btn");
    btn.addEventListener("click", function () {
        AddToCard(el);
    })

    div.append(picture, top, spone, line, comp, pro, pri, wa, rat, btn);
    document.querySelector("#models").append(div);
})

function AddToCard(el) {
    console.log(el);
    addToCard.push(el);
    console.log(addToCard);
    localStorage.setItem("addToCard", JSON.stringify(addToCard));

}

