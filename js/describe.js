// -------------商品詳細內容下面的SLIDE----------------

let picGroup = document.getElementsByClassName("pic_group")[0];
let prev = document.getElementsByClassName("prev")[0].childNodes[0];
let next = document.getElementsByClassName("next")[0].childNodes[0];
// console.log(picGroup);
// console.log(prev);
// console.log(next);


prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);

let click = 0;
let height = 0;
let add_height = 250;
function nextItem() {
    click = click +1;
    
    if(click < 9 ) {
        console.log(click);
        // console.log(height);
        // console.log(add_height);
        height = height - add_height;
        picGroup.style.left = height + "px";
        // console.log(picGroup.style.left);  

    } else if(click >= 9) {
        console.log(click);
        height = 0;
        click = 0;
        picGroup.style.left = height + "px";
    }

};

function prevItem() {

    click = click -1;
    // console.log(click);
    // console.log(height);
    // console.log(add_height);
    height = height + add_height;
    picGroup.style.left = height + "px";
    // console.log(picGroup.style.left);  

    if(click <0) {
        click = 8;
        console.log(click);
        height = -2000;
        picGroup.style.left = height + "px";
    }

};

// 按按鈕增加購物車數量

let addCart = document.getElementById("addCart");
let itemNumber = Number(document.getElementById("itemNumber").innerHTML);
addCart.addEventListener("click",addNum);
console.log(itemNumber);
function addNum() {
    let addNumber = 1;
    itemNumber = itemNumber + addNumber;
    console.log(itemNumber);
    document.getElementById("itemNumber").innerHTML = itemNumber;
};