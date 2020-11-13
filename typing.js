var counts = 0;

var inputKey = "";
const textList = [
    { name: "こんにちは", romaji: ["konnnitiha"], count: 0 },
    { name: "カレーライス", romaji: ["kare-raisu"], count: 0 },
    { name: "行ってきます", romaji: ["ittekimasu"], count: 0 },
    { name: "ただいま", romaji: ["okaerinasai"], count: 0 },
    { name: "学校疲れた", romaji: ["gakkoutukareta"], count: 0 },
    { name: "お仕事お疲れ様", romaji: ["osigotootukaresama"], count: 0 },
    { name: "明日ここ集合ね", romaji: ["asitakokosyuugoune"], count: 0 },
    { name: "あれやっといて", romaji: ["areyattoite"], count: 0 },
    { name: "お腹すいたね", romaji: ["onakasuitane"], count: 0 },
    { name: "こんばんは", romaji: ["oyasuminasai"], count: 0 },
    { name: "タイピングは楽しい", romaji: ["taipinguhatanosii"], count: 0 },
    { name: "ハンバーグうまい", romaji: ["hannba-guumai"], count: 0 },
    { name: "睡魔と戦っている", romaji: ["suimatotatakatteiru"], count: 0 },
    { name: "ユーチューブ面白い", romaji: ["yu-tyu-buomosiroi"], count: 0 },
    { name: "音楽を聴く", romaji: ["onngakuwokiku"], count: 0 },
    { name: "お寿司食べたい", romaji: ["osusitabetai"], count: 0 },
    { name: "グーグルクローム", romaji: ["gu-gurukuro-mu"], count: 0 },
    { name: "エヌ高等学校", romaji: ["enukoutougakkou"], count: 0 },
    { name: "ハラハラドキドキ", romaji: ["haraharadokidoki"], count: 0 },
];

function isKeyCorrect(key1, key2) {
    return key1 === key2;
}

function keyevent(event) {
    console.log(event.key);
    // console.log(index, this);
    // counts++;
    // const keyName = event.key;
    // console.log(`${keyName}が押されました`);

    // while (true) {
    // let s = textList[index].romaji[0]
    // if (keyName === s) {
    //     console.log("true");
    // }
    // else {
    //     console.log("miss!");
    // }
    // }
}

// window.onload = function () {
//     const tar = document.getElementById("disp-word");

//     var index = Math.floor(Math.random() * textList.length);
//     tar.innerHTML = textList[index]["name"];

//     document.addEventListener("keyup", (event) => {
//         if (event.key == 2) {
//             console.log(event.key);
//         }
//     });
// };

document.addEventListener("keyup", (event) => {
    const con = document.getElementById("content");
    const tar = document.getElementById("disp-word");

    var index = Math.floor(Math.random() * textList.length);
    tar.innerHTML = textList[index]["name"];

    let count_key = 0;
    let word = textList[index]["romaji"][0];
    while (count_key !== word.length) {
        if (word[count_key] === con.key) {
            count_key++;
        }
    }
});

// function textboxView(e) {
//     if (e == textList[index]["name"]) {
//         textbox.value = "";
//         textList.splice(index, 1);
//         index = Math.floor(Math.random() * textList.length);
//         document.getElementById("disp-word").innerHTML = textList[index]["name"];
//         console.log("成功");
//         counts = counts + 1;
//         console.log(counts);
//     }
//     else {
//         console.log("失敗");
//     }
//     if (counts == 1) {
//         console.log("FINISH");
//         $('.js-modal').fadeIn();
//     }
// }
