// var counts = 0;

// var inputKey = "";
// const textList = [
//     { name: "こんにちは", romaji: ["konnnitiha"], count: 0 },
//     { name: "カレーライス", romaji: ["kare-raisu"], count: 0 },
//     { name: "行ってきます", romaji: ["ittekimasu"], count: 0 },
//     { name: "ただいま", romaji: ["okaerinasai"], count: 0 },
//     { name: "学校疲れた", romaji: ["gakkoutukareta"], count: 0 },
//     { name: "お仕事お疲れ様", romaji: ["osigotootukaresama"], count: 0 },
//     { name: "明日ここ集合ね", romaji: ["asitakokosyuugoune"], count: 0 },
//     { name: "あれやっといて", romaji: ["areyattoite"], count: 0 },
//     { name: "お腹すいたね", romaji: ["onakasuitane"], count: 0 },
//     { name: "こんばんは", romaji: ["oyasuminasai"], count: 0 },
//     { name: "タイピングは楽しい", romaji: ["taipinguhatanosii"], count: 0 },
//     { name: "ハンバーグうまい", romaji: ["hannba-guumai"], count: 0 },
//     { name: "睡魔と戦っている", romaji: ["suimatotatakatteiru"], count: 0 },
//     { name: "ユーチューブ面白い", romaji: ["yu-tyu-buomosiroi"], count: 0 },
//     { name: "音楽を聴く", romaji: ["onngakuwokiku"], count: 0 },
//     { name: "お寿司食べたい", romaji: ["osusitabetai"], count: 0 },
//     { name: "グーグルクローム", romaji: ["gu-gurukuro-mu"], count: 0 },
//     { name: "エヌ高等学校", romaji: ["enukoutougakkou"], count: 0 },
//     { name: "ハラハラドキドキ", romaji: ["haraharadokidoki"], count: 0 },
// ];

// function isKeyCorrect(key1, key2) {
//     return key1 === key2;
// }

// function keyevent(event) {
//     console.log(event.key);
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
// }

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

// document.addEventListener("keyup", (event) => {
//     // const con = document.getElementById("content");
//     const tar = document.getElementById("disp-word");

//     var index = Math.floor(Math.random() * textList.length);
//     tar.innerHTML = textList[index]["name"];
//     let count_key = 0;
//     let word = textList[index]["romaji"][0];
//     while (count_key !== word.length) {
//         if (word[count_key] === event.key) {
//             // if (word[count_key] === con.key) {
//             count_key++;
//         }
//     }
// });

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

// $(function(){
//     $('.fancy-button').on('click',function(){
//         $('.js-modal').fadeIn();
//             return false;
//     });
// });


 // カウントダウンする秒数
 var sec = 180;
 
 // 開始日時を設定
 var dt = new Date();
 console.log("Start: ", dt);
 // 終了時刻を開始日時+カウントダウンする秒数に設定
 var endDt = new Date(dt.getTime() + sec * 1000);
 console.log("End : ", endDt);

 // 1秒おきにカウントダウン
 var cnt = sec;
 var id = setInterval(function(){
   cnt--;
   console.log(cnt);
   // 現在日時と終了日時を比較
   dt = new Date();
   if(dt.getTime() >= endDt.getTime()){
     clearInterval(id);
    //  console.log("Finish!");
   }
 }, 1000);


// グローバルに変数を色々定義する
var counts = 0;
var miss = -1;
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
    { name: "こんばんは", romaji: ["konnbannha"], count: 0 },
    { name: "タイピングは楽しい", romaji: ["taipinguhatanosii"], count: 0 },
    { name: "ハンバーグうまい", romaji: ["hannba-guumai"], count: 0 },
    { name: "睡魔と戦っている", romaji: ["suimatotatakatteiru"], count: 0 },
    { name: "ユーチューブ面白い", romaji: ["yu-tyu-buomosiroi"], count: 0 },
    { name: "音楽を聴く", romaji: ["onngakuwokiku"], count: 0 },
    { name: "お寿司食べたい", romaji: ["osusitabetai"], count: 0 },
    { name: "グーグルクローム", romaji: ["gu-gurukuro-mu"], count: 0 },
    { name: "エヌ高等学校", romaji: ["enukoutougakkou"], count: 0 },
    { name: "ハラハラドキドキ", romaji: ["haraharadokidoki"], count: 0 },
    { name: "月が綺麗ですね", romaji: ["tukigakireidesune"], count: 0 },
    { name: "最近なにしてる?", romaji: ["saikinnnanisiteru?"], count: 0 },
    { name: "ダラダラしていた", romaji: ["daradarasiteita"], count: 0 },
    { name: "よろしくお願いします", romaji: ["yorosikuonegaisimasu"], count: 0 },
  ];
  
  var index = Math.floor(Math.random() * textList.length);
  const tar = document.getElementById("disp-word");
  const nar = document.getElementById("disp-word romaji");
  const player_typing = document.getElementById("disp-word player")
  
  // ページが読み込まれたら実行する;
  window.onload = function () {
    tar.innerHTML = textList[index]["name"];
    nar.innerHTML = textList[index]["romaji"];
    // console.log(miss);
    console.log(textList[index]["romaji"].length);
  };
  
  // キーボードが押されたら実行する
  window.onkeydown = function (event) {
    // 全ての文字が打たれたら
    if (textList[index]["count"] >= textList[index]["romaji"][0].length - 1) {
      //   新しいindexを定義して、表示する
    //   textList[index]["count"] = 0;
    textList.splice(index,1);
      index = Math.floor(Math.random() * textList.length);
      tar.innerHTML = textList[index]["name"];
      nar.innerHTML = textList[index]["romaji"];
      nar.style.color = "#daf6ff";
      player_typing.innerHTML = "";
      counts++;
      console.log("カウント" + counts);
      if (counts == 15){
        tar.innerHTML = "";
        nar.innerHTML = "";
        window.onkeydown = "";
        console.log("FINISH");
        $('.js-modal').fadeIn();
    }
    }
    //   全ての文字が打たれていなかったら
    else {
      tar.innerHTML = textList[index]["name"];
      nar.innerHTML = textList[index]["romaji"];
    }
  
    // 表示されている文字のローマ字を変数に入れておく
    romaji_word = textList[index]["romaji"][0];
    // ローマ字がどこまで打たれたか変数に入れておく
    romaji_count = textList[index]["count"];
    // 入力された文字が打つべき文字と正しかったら
    if (romaji_word[romaji_count] === event.key) {
      // textList[index]["count"]に1足して、次の文字にポインタを移す
      player_typing.insertAdjacentHTML('beforeend',romaji_word[romaji_count]); 
      // 打たれたアルファベットを表示する
      textList[index]["count"]++;
      // カウントを追加していく
    }
    else{
        miss++;
        // ミス数を追加していく
        document.getElementById("missCount").innerHTML = miss;
        // ミス数表示の更新
    }
    // consoleに色々表示する
    console.log(textList[index]["count"], textList[index]["romaji"][0].length);
    console.log(textList[index]["romaji"]);
  };


  // 途中で辞めたいとき
  $(document).keyup(function(e) {
    // もし27(Escキー)が押されたら
    if (e.keyCode == 27) {
      tar.innerHTML = "";
      nar.innerHTML = "";
      // お題とそのローマ字文を消す
      window.onkeydown = "";
      console.log("FINISH");
      $('.js-modal').fadeIn();
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