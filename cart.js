let favs = Array.from(document.querySelectorAll(".fa-heart"));
let deleteBtns = Array.from(document.querySelectorAll(".fa-trash"));
let cards = Array.from(document.querySelectorAll(".card"));
let plusBtns = Array.from(document.querySelectorAll(".fa-circle-plus"));
let minusBtns = Array.from(document.querySelectorAll(".fa-circle-minus"));
 
for (let fav of favs) {
    fav.addEventListener("click", function () {
        if (fav.style.color === "black") {
            fav.style.color = "red";
        } else {
            fav.style.color = "black";
        }
    });
}


for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function () {
        cards[i].remove();
        total();
    });
}

for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click", function () {
        plusBtn.nextElementSibling.innerHTML++;
        total();
    });
}


for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click", function () {
        if (minusBtn.previousElementSibling.innerHTML > 0) {
            minusBtn.previousElementSibling.innerHTML--;
        } else {
            null;
        }
        total();
    });
}
// Total price
function total() {
    let qte = Array.from(document.querySelectorAll(".qute"));
    let price = Array.from(document.querySelectorAll(".unit-price"));
    let s = 0;
    for (let i = 0; i < price.length; i++) {
        s = s + parseFloat(price[i].innerHTML) * parseFloat(qte[i].innerHTML);
    }
    document.getElementById("total-price").innerHTML = s;
}
