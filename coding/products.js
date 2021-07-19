console.log("hello");

let prod = [
    {
        name: "necklace",
        price: 22000,
        image: ["https://m.media-amazon.com/images/I/51rrdlAnjTL.jpg", "https://i.pinimg.com/originals/f2/b8/95/f2b895d89182e5ed82c1f3265a427d47.jpg"]
    },
    {
        name: "ring",
        price: 20000,
        image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvIuXy9lrZNd-6yXrIaqJajys6BzQcuefVQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFirvO-sUD4vZbmGitBHs0rjvfEVS1cMt7hQ&usqp=CAU"]
    },

    {
        name: "platina Ring",
        price: 35500,
        image: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mKhbQzrYCoLBMkyxfMLZmHQNdafxyCj89Q&usqp=CAU", "https://i.etsystatic.com/17346427/r/il/cd71a2/1728456966/il_570xN.1728456966_3qtw.jpg"]
        
    },
    {
      name: "Ear Ring",
        price: 12500,
        image:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGpL1YySBCOY6KmoAHOnup9QssukUhYW9NA&usqp=CAU","https://image.made-in-china.com/2f0j00ZaTGlfWFJico/Fashion-Clip-Earrings-Gold-Silver-Diamante-Ear-Stud-Ear-Ring.jpg"]  
    }

];
let jevdiv = document.getElementById("products");

function appendJevelery(el) {
    let pdiv = document.createElement('div');
    pdiv.setAttribute("class","pdiv")
    let pName = document.createElement('p');
    pName.innerText = el.name;

    let pPrice = document.createElement('p');
    pPrice.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "Add to cart";


    btn.addEventListener("click", function () {
        add2cart(el);
    })

    let image = document.createElement('img');
    image.src = el.image[0];
    pdiv.append(image,pName, pPrice,btn);

    image.addEventListener('mouseover', change);
    function change() {
        setTimeout(function () {
          image.src=el.image[1]  
        },1000)
      

    }
     image.addEventListener('mouseleave', change);
    function change() {
        setTimeout(function () {
          image.src=el.image[0]  
        },1000)
      

    }
    jevdiv.append(pdiv)
 
}
appendJevelery();
function show() {
    prod.forEach(function (el) {
        appendJevelery(el);
    })
}
show();
function add2cart(el) {
    let arr;
    if (arr = null)
        arr=[]
    else {
       arr = JSON.parse(localStorage.getItem("jewCart"));
       arr.push(el);
        localStorage.setItem("jewCart", JSON.stringify(arr))
    }
    console.log(el);
    
}


function low2high() {
    jevdiv.innerHTML = null;
    prod = prod.sort(function (a, b) {
        return a.price-b.price
    })

    prod.forEach(function (el) {
        appendJevelery(el);
    })
    
}

function high2low() {
       jevdiv.innerHTML = null;
    prod = prod.sort(function (a, b) {
        return b.price - a.price;
    })

    prod.forEach(function (el) {
        appendJevelery(el);
    })
}

function showcart() {
    window.location.href="cart.html"
}