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


    btn.addEventListener("click", function (el) {
        add2cart(el);
    })

    let image = document.createElement('img');
    image.src = el.image[0];
    pdiv.append(image,pName, pPrice);

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
var total = 0;
var prod = JSON.parse(localStorage.getItem("jewCart"));
appendJevelery();
function show() {
    prod.forEach(function (el) {
        appendJevelery(el);
        total += el.price;
    })
    cartamount(total)
    console.log(prod)
}
let text = "";

function cartamount(total) {
    var amountdiv = document.querySelector(".amount");
   var apply = document.createElement('button');
    var ptotal = document.createElement("p");
    
    ptotal.innerHTML = `Total amount=${total}`;
    ptotal.setAttribute("class","tot1")
    var input = document.createElement('input');
    input.setAttribute("class","tot")
    apply.innerHTML = "apply";
    
    amountdiv.append(ptotal, input, apply);

    apply.addEventListener('click',masai)
}
cartamount()
show();
function masai() {
    let tot = document.querySelector(".tot")
    let tot1=document.querySelector(".tot1")
    if (tot.value == "masai30") {
        tot1.setAttribute("class", "total")
        var ptotal2 = document.createElement("p");
        ptotal2.innerHTML = `SubTotal amount=${total * .7}`;
        var amountdiv = document.querySelector(".amount");
        amountdiv.append(ptotal2);
    }

}
function placeorder() {
    window.location.href="payments.html"
}