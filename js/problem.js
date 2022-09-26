// ----------------點到問題選單標題即換下方說明文字----------------

let commonProblem = document.getElementsByClassName("titletext")[0];
let deliveryfee = document.getElementsByClassName("titletext")[1];
let shoppingProblem = document.getElementsByClassName("titletext")[2];
let mainArea = document.getElementById("mainarea");
console.log(mainArea);
console.log(commonProblem);


commonProblem.addEventListener("click", showMaintext);
deliveryfee.addEventListener("click", showMaintext);
shoppingProblem.addEventListener("click", showMaintext);

function showMaintext(e) {
    console.log(e);
    console.log(e.target.getAttribute('id'));
    let catch_tag = e.target.getAttribute("id");

    if(catch_tag == "commonproblem") {
        deliveryfee.style.backgroundColor = "white";
        deliveryfee.style.color = "#ae7373";
        shoppingProblem.style.backgroundColor = "white";
        shoppingProblem.style.color = "#ae7373";
        commonProblem.style.backgroundColor = "#86ab9b";
        commonProblem.style.color = "white";
    } else if (catch_tag == "deliveryfee") {
        deliveryfee.style.backgroundColor = "#86ab9b";
        deliveryfee.style.color = "#fff";
        shoppingProblem.style.backgroundColor = "white";
        shoppingProblem.style.color = "#ae7373";
        commonProblem.style.backgroundColor = "white";
        commonProblem.style.color = "#ae7373";
    } else if (catch_tag == "shoppingproblem") {
        deliveryfee.style.backgroundColor = "white";
        deliveryfee.style.color = "#ae7373";
        shoppingProblem.style.backgroundColor = "#86ab9b";
        shoppingProblem.style.color = "#fff";
        commonProblem.style.backgroundColor = "white";
        commonProblem.style.color = "#ae7373";
    }
    

    switch(catch_tag) {
        case "commonproblem" :


            mainArea.innerHTML = `

            <h4>1. 如何訂購商品？</h4>
            <p>透過購物車，將需要的商品加入購物車，結帳即可完成訂單，付費皆由轉帳完成，完成後會收到通知簡訊，商品在2-3天內即送達。</p>
            <h4>2. 若要購買大量禮盒，可以如何選購？？</h4>
            <p>若要購買超過一組（即三盒）以上之商品，請電洽本店：0800-875126，可享有特別優惠。</p>
            <h4>3. 店裡可以內用嗎？</h4>
            <p>可以，本店設有內用桌。每週四都會有特別甜品，只限店內享用。</p>
            <h4>4. 本店的營業時間是什麼時候？</h4>
            <p>每周三至週日，早上十點半至晚上八點半。</p>
            <h4>5. 店裡可以帶寵物嗎？</h4>
            <p>可以，以不影響其他客人為原則。若寵物影響到其他客人，請將寵物帶到戶外的庭院，勿進入室內。</p>

            `;
            break;
        case "deliveryfee" :


            mainArea.innerHTML = `
            <h4>1. 運費如何計算？</h4>
            <p>結帳滿1000元以上免運。</p>
            <p>未滿1000元，運費一律150元。</p>
            <h4>2. 每週四特別日皆免運。</h4>
            <p>每週四皆為本店免運日，購物金額不限即可享免運費。</p>

            `;
            break;
        ;

        case "shoppingproblem" :
            mainArea.innerHTML = `
            <h4>1. 下錯訂單該怎麼辦？</h4>
            <p>請勿轉帳，並電洽本店：0800-875126更改訂單或取消訂單。若已經轉帳，將會全款退回。</p>
            <h4>2. 想換退回商品怎麼辦？</h4>
            <p>若收到商品後，發現商品有瑕疵或疑問，請電洽本店：0800-875126，或用LINE的方式聯繫我們，將為您辦理退換貨。</p>
            <h4>3. 成立訂單的時候發生錯誤？</h4>
            <p>請截圖並傳至我們的官方LINE，將儘快為您解決。</p>
            <h4>4. 轉帳的帳號皆為此帳號，請勿轉帳至其他帳號。</h4>
            <p>帳號為：(700) 0000-0000-0000-00</p>
            `;
            break;
    };


}



