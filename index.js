"use strict";

// {
//   const open = document.getElementById("open");
//   const modal = document.getElementById("modal");
//   const mask = document.getElementById("mask");

//   open.addEventListener("click", function () {
//     modal.classList.remove("hidden");
//     mask.classList.remove("hidden");
//   });

//   mask.addEventListener("click", function () {
//     modal.classList.add("hidden");
//     mask.classList.add("hidden");
//   });
// }

$(function () {
  // open.addEventListener("click", function () {
  //   modal.classList.remove("hidden");
  //   mask.classList.remove("hidden");
  // });
  $("#open").click(() => {
    $("#open").hide();
    $("#japan_map").show();
    $("#mask").show();
  });

  // mask.addEventListener("click", function (e) {
  //   modal.classList.add("hidden");
  //   mask.classList.add("hidden");
  //   $("#japan_map").hide();
  // });
  $("#mask").click((e) => {
    $("#open").show();
    $("#japan_map").hide();
    $("#mask").hide();
  });

  $("#close").click(() => {
    $("#open").show();
    $("#japan_map").hide();
    $("#mask").hide();
  });

  //地域を選択
  $(".area_btn").click(function () {
    $(".area_overlay").show();
    $(".pref_area").show();
    let area = $(this).data("area");
    $("[data-list]").hide();
    $('[data-list="' + area + '"]').show();
  });

  //レイヤーをタップ
  $(".area_overlay").click(function () {
    prefReset();
  });

  // const dataId = document.querySelector("[.data-id]");
  // console.log(dataId);
  //都道府県をクリック
  $(".pref_list [data-id]").click(function (e) {
    if ($(this).data("id")) {
      let id = $(this).data("id");
      //このidを使用して行いたい操作をしてください
      //都道府県IDに応じて別ページに飛ばしたい場合はこんな風に書く↓
      //   window.location.href = "https://kinocolog.com/pref/" + id;
      // $(this).toggleClass("active");
      // prefReset();
    }
    // $(this).removeClass("active");
  });

  //表示リセット
  function prefReset() {
    $("[data-list]").hide();
    $(".pref_area").hide();
    $(".area_overlay").hide();
  }
});

let prefList = document.querySelectorAll(".pref_list");
// console.log(prefList[1].dataset.list);

// 都道府県のDOM要素取得
// let prefecture = document.querySelectorAll(".prefecture");

// 配列の初期化
let selectedPrefs = [];

// 都道府県のクリックされた箇所をカウント
// for (let i = 0; i < prefecture.length; i++) {
//   prefecture[i].addEventListener("click", function (e) {
//     // もしdata-pref-idが含まれていなかったら
//     if (!selectedPrefs.includes(this.dataset.prefId)) {
//       // 選択した都道府県が３つ以内なら
//       if (selectedPrefs.length < 3) {
//         this.classList.add("active");
//         selectedPrefs.push(this.dataset.prefId);
//       } else {
//         e.preventDefault();
//         alert("3都道府県まで選択できます。");
//       }
//     } else {
//       this.classList.remove("active");
//       // 配列に格納
//       selectedPrefs = selectedPrefs.filter((element) => {
//         return element != this.dataset.prefId;
//       });
//     }
//   });
// }

let prefecture = $(".prefecture");
prefecture.click(function (e) {
  if (!selectedPrefs.includes(this.dataset.prefId)) {
    // 選択した都道府県が３つ以内なら
    if (selectedPrefs.length < 3) {
      this.classList.add("active");
      selectedPrefs.push(this.dataset.prefId);
    } else {
      e.preventDefault();
      alert("3都道府県まで選択できます。");
    }
  } else {
    this.classList.remove("active");
    // 配列に格納
    selectedPrefs = selectedPrefs.filter((element) => {
      return element != this.dataset.prefId;
    });
  }
});
