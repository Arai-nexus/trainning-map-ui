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

  // mask.addEventListener("click", function () {
  //   modal.classList.add("hidden");
  //   mask.classList.add("hidden");
  // });
  $("#mask").click(() => {
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

  //都道府県をクリック
  $(".pref_list [data-id]").click(function () {
    if ($(this).data("id")) {
      let id = $(this).data("id");
      //このidを使用して行いたい操作をしてください
      //都道府県IDに応じて別ページに飛ばしたい場合はこんな風に書く↓
      //   window.location.href = "https://kinocolog.com/pref/" + id;

      prefReset();
    }
  });

  //表示リセット
  function prefReset() {
    $("[data-list]").hide();
    $(".pref_area").hide();
    $(".area_overlay").hide();
  }
});
