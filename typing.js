// グローバルに変数を色々定義する
const textList = [
  { name: "こんにちは", romaji: ["konnnitiha"], count: 0 },
  { name: "カレーライス", romaji: ["kare-raisu"], count: 0 },
  { name: "行ってきます", romaji: ["ittekimasu"], count: 0 },
  { name: "ただいま", romaji: ["tadaima"], count: 0 },
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

var index = Math.floor(Math.random() * textList.length);
const tar = document.getElementById("disp-word");

// ページが読み込まれたら実行する;
window.onload = function () {
  tar.innerHTML = textList[index]["name"];
};

// キーボードが押されたら実行する
window.onkeydown = function (event) {
  // 全ての文字が打たれたら
  if (textList[index]["count"] >= textList[index]["romaji"][0].length - 1) {
    //   新しいindexを定義して、表示する
    index = Math.floor(Math.random() * textList.length);
    tar.innerHTML = textList[index]["name"];
  }
  //   全ての文字が打たれていなかったら
  else {
    tar.innerHTML = textList[index]["name"];
  }

  // 表示されている文字のローマ字を変数に入れておく
  romaji_word = textList[index]["romaji"][0];
  // ローマ字がどこまで打たれたか変数に入れておく
  romaji_count = textList[index]["count"];
  // 入力された文字が打つべき文字と正しかったら
  if (romaji_word[romaji_count] === event.key) {
    // textList[index]["count"]に1足して、次の文字にポインタを移す
    textList[index]["count"]++;
  }
  // consoleに色々表示する
  console.log(textList[index]["count"], textList[index]["romaji"][0].length);
  console.log(textList[index]["romaji"]);
};

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
